const _ = require('lodash');
const ts = require('./util');
const ejs = require('ejs'); //ejs模版引擎
const fs = require('fs'); //文件读写
const path = require('path'); //路径配置
const axios = require('axios');
const ora = require('ora');
const prettier = require('prettier');
const spinners = [ora('正在获取swagger数据中...'),ora('TS代码生成中...')];
// const swaggerUrl = 'https://rv.cosmoplat.com/sindar/sit/rc/api/v2/api-docs';
const swaggerUrl = 'http://localhost:7001/swagger-doc';
/**
 * 获取基础的swagger数据
 */
async function getBaseSwaggerInfo() {
  // compose multiple styles using the chainable API
  // log(chalk.white.bgGreen.bold('Hello world!'));

  spinners[0].start();
  const generateList = [] as Array<GenerateData>;
  const controllerList = [] as Array<ControllerList>;
  let json = {};
  try {
    const response = await axios.get(swaggerUrl);
    if (response.status !== 200) return false;
    spinners[0].succeed('接口数据请求成功~');
    json = response.data;
  } catch (error) {
    spinners[0].fail('swaggger似乎出现了问题~');
  }
  const { paths, definitions, tags } = json as any;
  try {
    //1.获取基础的数据
    //urlKey是路由
    for (let urlKey in paths) {
      let data = {} as GenerateData;
      const pathsObj = paths[urlKey];
      //类型key
      for (let methodKey in pathsObj) {
        const serviceInfo = pathsObj[methodKey];
        data = {
          url: urlKey,
          method: methodKey.toUpperCase(), //接口方法
          tags: serviceInfo.tags[0], //用来做分类
          summary: serviceInfo.summary, //描述
          params: serviceInfo.parameters, //入参
          response: serviceInfo.responses, //响应
          operationId: serviceInfo.operationId, //方法名称
        };
      }
      generateList.push(data);
    }

    tags.map((tags: { name: string; description: string }) => {
      const serviceList = generateList.filter((item) => {
        return tags.name === item.tags;
      }) as GenerateData[];
      controllerList.push({ name: tags.name, list: serviceList });
    });

    return { controllerList, definitions };
  } catch (error) {
    return { controllerList };
  }
}

(async function run() {
  baseFileHandle();
  const baseSwaggerInfo = await getBaseSwaggerInfo();
  //现在在执行写代码的过程吧
  //@ts-ignore  //转换代码-得到tsType
  converTest(baseSwaggerInfo);
})();

//1.转换Ts类型
function converTest(data: {
  controllerList: ControllerList[];
  definitions: any;
}) {
  try {
      spinners[1].start();
    //1.处理入参ts类型
    data.controllerList.map((controller) => {
      //渲染list
      const renderList = [] as any;
      //所有入参类型
      const hasRenderType = new Set() as Set<string>;
      controller.list.map((item) => {
        _.forEach(item.params, function(parameter: any) {
          var tsType = ts.convertType(parameter);
          parameter.tsType = tsType;
        });
        //2.组装渲染参数
        assemblyRender(item, renderList, hasRenderType);

        //3.得到所有的接口的response
        hasRenderType.add(getResponseType(item.response));

        //4.得到的响应 里面可能还会包裹其他的对象
      });

      assemblyResponse(data.definitions, hasRenderType, true);
      const newDefinitions = assemblyResponse(data.definitions, hasRenderType);
      //end.写入代码

      writeCode({ renderList, definitions: newDefinitions }, controller.name);
    });
     setTimeout(()=>{
         spinners[1].succeed('TS代码生成成功~~');
     },1000)




  } catch (error) {}
}

/**
 * 处理response对象
 * @param definitions 总接口的respons
 * @param hasRenderTypeList 需要渲染的response key
 * @param isrecursive 是否顶柜
 */
function assemblyResponse(
  definitions: any,
  hasRenderTypeList: Set<string>,
  isrecursive: boolean = false
) {
  const newHasRenderTypeList = Array.from(hasRenderTypeList);
  const newDefinitions = [] as any;
  _.forEach(definitions, (value: any, key: string) => {
    _.forEach(newHasRenderTypeList, (renderTypeName: string) => {
      if (key === renderTypeName) {
        if (isrecursive) {
          findMoreRef(definitions, key, hasRenderTypeList);
          return;
        }
        newDefinitions.push({
          name: normalizeTypeName(key),
          description: value.description,
          tsType: ts.convertType(value),
        });
      }
    });
  });
  return newDefinitions;
}

/**
 * 递归寻找更多ref类型
 * @param alldefinitions  所有ref类型汇总
 * @param key 寻找的key
 * @param hasRenderTypeList 需要渲染的key
 */
function findMoreRef(
  alldefinitions: any,
  key: any,
  hasRenderTypeList: Set<string>
) {
  _.forEach(alldefinitions, (swaggerType: any, definitionsKey: string) => {
    if (key === definitionsKey) {
      _.forEach(
        swaggerType.properties,
        (properties: any, propertiesKey: string) => {
          if (_.isString(properties.$ref)) {
            const findNeewRenderKey = properties.$ref.substring(
              properties.$ref.lastIndexOf('/') + 1
            );
            hasRenderTypeList.add(findNeewRenderKey);
            findMoreRef(alldefinitions, findNeewRenderKey, hasRenderTypeList);
          } else if (properties.type === 'array') {
            if (properties.items.hasOwnProperty('$ref')) {
              const findNeewRenderKey = properties.items.$ref.substring(
                properties.items.$ref.lastIndexOf('/') + 1
              );
              if (!hasRenderTypeList.has(findNeewRenderKey)) {
                hasRenderTypeList.add(findNeewRenderKey);
                findMoreRef(
                  alldefinitions,
                  findNeewRenderKey,
                  hasRenderTypeList
                );
              }
            }
          }
        }
      );
    }
  });
}

//2.组装渲染数据
function assemblyRender(
  item: any,
  renderList: any,
  hasRenderType: Set<unknown>
) {
  let showRenderString = new Set();
  let showRenderRef = new Set();
  //获取返回类型
  const responseType = getResponseType(item.response);
  let operationName = '';
  const operationList: string[] = item.operationId
    .replace('controller-', '')
    .split('-');
  operationList.map((_operation, _operationIndex) => {
    if (_operationIndex === 0) {
      operationName += _operation;
      return;
    }
    operationName += _operation.slice(0, 1).toUpperCase() + _operation.slice(1);
  });
  let baseData = {
    url: item.url,
    method: item.method,
    summary: item.summary,
    responseType: normalizeTypeName(responseType),
    operationId: operationName,
  } as any;
  // 这边参数为1个的时候-不管是单个字段或者ref类型

  if (!item?.params || item?.params?.length === 0) {
    baseData.showRender = '';
  } else if (item?.params?.length === 1) {
    const typeData = item.params[0];
    if (baseData.operationId === 'updateStoreSortUsingPOST') {
    }
    if (typeData?.tsType?.isRef) {
      baseData.showRender = `params${typeData.required ? '' : '?'}:${
        typeData.tsType.target
      }`;
      hasRenderType.add(typeData.tsType.target);
    } else if (typeData?.tsType?.isArray) {
      baseData.showRender = `params${typeData.required ? '' : '?'}:Array<${
        typeData.tsType.elementType.target
          ? typeData.tsType.elementType.target.replace('«', '').replace('»', '')
          : typeData.tsType.elementType.tsType
      }>`;
      if (typeData.tsType.elementType.target) {
        hasRenderType.add(typeData.tsType.elementType.target);
      }
    } else {
      baseData.showRender = `${typeData.name}${typeData.required ? '' : '?'}:${
        typeData.tsType.tsType
      }`;
    }
  } else if (item?.params?.length > 1) {
    //当是多个入参的时候--如果全部是单个字段 如果是其他对象呢
    let isRefTypeCount = 0;
    item.params.map((_params: any) => {
      if (_params.tsType.isRef) {
        isRefTypeCount += 1;
        showRenderRef.add(`${_params.tsType.target}`);
        hasRenderType.add(_params.tsType.target);
      } else if (_params.tsType.isObject) {
        isRefTypeCount += 1;
        showRenderRef.add(`${_params.type}`);
        hasRenderType.add(_params.type);
      } else if (_params.tsType.isArray) {
        showRenderString.add(
          `${_params.name}${_params.required ? '' : '?'} :Array<${
            _params.tsType.elementType.target
              ? _params.tsType.elementType.target
                  .replace('«', '')
                  .replace('»', '')
              : _params.tsType.elementType.tsType
          }>`
        );
        if (_params.tsType.elementType.target) {
          hasRenderType.add(_params.tsType.elementType.target);
        }
      } else {
        showRenderString.add(
          `${_params.name}${_params.required ? '' : '?'} : ${
            _params.tsType.tsType
          }`
        );
      }
    });
    //如果全是ref
    if (isRefTypeCount === item?.params?.length) {
      baseData.showRender = `params:${Array.from(showRenderRef).join('&')}`;
    } else if (isRefTypeCount === 0) {
      //全是单独类型
      baseData.showRender = `params:{${Array.from(showRenderString).join(
        ','
      )}}`;
    } else {
      //混合类型
      baseData.showRender = `params:{${Array.from(showRenderString).join(
        ','
      )}} & ${Array.from(showRenderRef).join('&')}`;
    }
  }

  renderList.push(baseData);
}

//获取response类型
function getResponseType(response: any): string {
  let responseType = '';
  _.forEach(response, (swaggerType: any, key: string) => {
    if (key === 'default') {
      responseType = 'BaseResponse';
    }
    if (key === '200') {
      if (
        swaggerType.hasOwnProperty('schema') &&
        _.isString(swaggerType.schema?.$ref)
      ) {
        responseType = swaggerType.schema.$ref.substring(
          swaggerType.schema.$ref.lastIndexOf('/') + 1
        );
      } else if (
        swaggerType.hasOwnProperty('schema') &&
        swaggerType.schema.hasOwnProperty('type')
      ) {
        responseType = swaggerType.schema.type;
      }
    }
  });
  return responseType;
}

//4.写入code
function writeCode(data: any, fileName: string) {
  let action = fs.readFileSync(path.resolve(__dirname, './ts.ejs'), 'utf8');
  const ejsHtml = ejs.render(action, { ...data });
  const webApiHtml = prettier.format(ejsHtml, { semi: false, parser: 'babel' });
  fs.writeFile(
    `./controller/${fileName}Controller.ts`,
    webApiHtml,
    'utf8',
    async () => {}
  );
}

function baseFileHandle() {
  delDir(path.join(__dirname, 'controller'));
  fs.mkdirSync(path.join(__dirname, 'controller'));
}

function delDir(path: string) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file: any) => {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

function normalizeTypeName(id: string) {
  return id.replace(/«|»/g, '');
}


interface GenerateData {
  url: string;
  method: string;
  summary: string;
  params: Params[];
  response: any;
  tags: string;
  operationId: string;
}

interface Params {
  in: string;
  type: string;
  name: string;
  required: boolean;
  description: string;
  example: string;
  schema?: { $ref: string };
  $ref?: string;
}

interface ControllerList {
  name: string;
  list: Array<GenerateData>;
}
