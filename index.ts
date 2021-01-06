import { Console } from 'console';

let _ = require('lodash');
var ts = require('./util');
const ejs = require('ejs'); //ejs模版引擎
const fs = require('fs'); //文件读写
const path = require('path'); //路径配置
const axios = require('axios');
const swaggerUrl = 'http://localhost:7001/swagger-doc';

/**
 * 获取基础的swagger数据
 */
async function getBaseSwaggerInfo() {
  const generateList = [] as Array<GenerateData>;
  const controllerList = [] as Array<ControllerList>;
  const response = await axios.get(swaggerUrl);
  if (response.status !== 200) return false;
  const json = response.data;
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
  //这边准备处理所有的ref 类型
  // const definitionsNameList = [] as string[];
  // _.forEach(data.definitions, (value: any, key: any) => {
  //   definitionsNameList.push(key);
  // });

  // console.log('data====>', data);

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
      //3.得到所有的response
      hasRenderType.add(getResponseType(item.response));
    });

    // console.log('data.definitions=====>',data.definitions)

    const newDefinitions = assemblyResponse(data.definitions, Array.from(hasRenderType));


    let action = fs.readFileSync(path.resolve(__dirname, './ts.ejs'), 'utf8');
    const webApiHtml = ejs.render(action, { renderList,definitions: newDefinitions });
    fs.writeFile(`action.ts`, webApiHtml, 'utf8', async () => {});

    // console.log('hasRenderType====>', Array.from(hasRenderType));
    //end.写入代码
    // writeCode(renderList, newDefinitions,controller.name);
  });

  // //渲染ref对象数据
  // _.forEach(data.definitions, function(definition: any, name: string) {
  //   newDefinitions.push({
  //     name: normalizeTypeName(name),
  //     description: definition.description,
  //     tsType: ts.convertType(definition, data),
  //   });
  // });
}

function assemblyResponse(definitions: any, hasRenderTypeList: string[]) {
  const newDefinitions = [] as any;
  _.forEach(definitions, (value: any, key: string) => {
    _.forEach(hasRenderTypeList, (renderTypeName: string) => {
      if (key === renderTypeName) {
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
    responseType,
    operationId: operationName,
  } as any;
  // 这边参数为1个的时候-不管是单个字段或者ref类型
  if (item.params.length === 0) {
    baseData.showRender = '';
  } else if (item.params.length === 1) {
    const typeData = item.params[0];
    if (typeData?.tsType?.isRef) {
      baseData.showRender = `params${typeData.required ? '' : '?'}:${
        typeData.tsType.target
      }`;
      hasRenderType.add(typeData.tsType.target);
    } else {
      baseData.showRender = `${typeData.name}${typeData.required ? '' : '?'}:${
        typeData.tsType.tsType
      }`;
    }
  } else if (item.params.length > 1) {
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
      } else {
        showRenderString.add(
          `${_params.name}${_params.required ? '' : '?'}:${
            _params.tsType.tsType
          }`
        );
      }
    });
    //如果全是ref
    if (isRefTypeCount === item.params.length) {
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
    if (
      swaggerType.hasOwnProperty('schema') &&
      _.isString(swaggerType.schema?.$ref)
    ) {
      responseType = swaggerType.schema.$ref.substring(
        swaggerType.schema.$ref.lastIndexOf('/') + 1
      );
    }
  });
  return responseType;
}

// //3.组装需要的Response
// function assemblyResponse(response: any, hasRenderType: Set<unknown>) {
//   _.forEach(response, (swaggerType: any, key: string) => {
//     if (key === 'default') {
//       hasRenderType.add('BaseResponse');
//       return;
//     }
//     if (
//       swaggerType.hasOwnProperty('schema') &&
//       _.isString(swaggerType.schema?.$ref)
//     ) {
//       const responseType = swaggerType.schema.$ref.substring(
//         swaggerType.schema.$ref.lastIndexOf('/') + 1
//       );
//       hasRenderType.add(responseType);
//     }
//   });
// }

//4.写入code
function writeCode(renderList: any,definitions:any, fileName: string) {
  let action = fs.readFileSync(path.resolve(__dirname, './ts.ejs'), 'utf8');
  const webApiHtml = ejs.render(action, { renderList ,definitions});
  fs.writeFile(`${fileName}Controller.ts`, webApiHtml, 'utf8', async () => {});
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
