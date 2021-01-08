var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _ = require('lodash');
var ts = require('./util');
var ejs = require('ejs'); //ejs模版引擎
var fs = require('fs'); //文件读写
var path = require('path'); //路径配置
var axios = require('axios');
var ora = require('ora');
var prettier = require('prettier');
var pinyin = require("pinyin");
var spinners = [ora('正在获取swagger数据中...'), ora('TS代码生成中...')];
var swaggerUrl = 'https://rv.cosmoplat.com/sindar/sit/rc/api/v2/api-docs';
// const swaggerUrl = 'http://localhost:7001/swagger-doc';
/**
 * 获取基础的swagger数据
 */
function getBaseSwaggerInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var generateList, controllerList, json, response, error_1, _a, paths, definitions, tags, urlKey, data, pathsObj, methodKey, serviceInfo;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    spinners[0].start();
                    generateList = [];
                    controllerList = [];
                    json = {};
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get(swaggerUrl)];
                case 2:
                    response = _b.sent();
                    if (response.status !== 200)
                        return [2 /*return*/, false];
                    spinners[0].succeed('接口数据请求成功~');
                    json = response.data;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    spinners[0].fail('swaggger似乎出现了问题~');
                    return [3 /*break*/, 4];
                case 4:
                    _a = json, paths = _a.paths, definitions = _a.definitions, tags = _a.tags;
                    try {
                        //1.获取基础的数据
                        for (urlKey in paths) {
                            data = {};
                            pathsObj = paths[urlKey];
                            for (methodKey in pathsObj) {
                                serviceInfo = pathsObj[methodKey];
                                data = {
                                    url: urlKey,
                                    method: methodKey.toUpperCase(),
                                    tags: serviceInfo.tags[0],
                                    summary: serviceInfo.summary,
                                    params: serviceInfo.parameters,
                                    response: serviceInfo.responses,
                                    operationId: serviceInfo.operationId
                                };
                            }
                            generateList.push(data);
                        }
                        tags.map(function (tags) {
                            var serviceList = generateList.filter(function (item) {
                                return tags.name === item.tags;
                            });
                            var describeName = tags.name;
                            var newTagsName = translateName(tags.name);
                            controllerList.push({ name: newTagsName, describeName: describeName, list: serviceList });
                        });
                        return [2 /*return*/, { controllerList: controllerList, definitions: definitions }];
                    }
                    catch (error) {
                        return [2 /*return*/, { controllerList: controllerList }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
(function run() {
    return __awaiter(this, void 0, void 0, function () {
        var baseSwaggerInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getBaseSwaggerInfo()];
                case 1:
                    baseSwaggerInfo = _a.sent();
                    //@ts-ignore
                    converTest(baseSwaggerInfo);
                    return [2 /*return*/];
            }
        });
    });
})();
//1.转换Ts类型
function converTest(data) {
    try {
        spinners[1].start();
        var fileList_1 = [];
        baseFileHandle();
        //1.处理入参ts类型
        data.controllerList.map(function (controller) {
            fileList_1.push(controller.name + "Controller");
            var renderList = [];
            var hasRenderType = new Set();
            controller.list.map(function (item) {
                _.forEach(item.params, function (parameter) {
                    var tsType = ts.convertType(parameter);
                    parameter.tsType = tsType;
                });
                //2.组装渲染参数
                assemblyRender(item, renderList, hasRenderType);
                //3.得到所有的接口的response
                hasRenderType.add(getResponseType(item.response));
            });
            assemblyResponse(data.definitions, hasRenderType, true);
            var newDefinitions = assemblyResponse(data.definitions, hasRenderType);
            var name = controller.name, describeName = controller.describeName;
            writeCode({ renderList: renderList, definitions: newDefinitions }, { name: name, describeName: describeName });
        });
        writeAllControllerCode(fileList_1);
        spinners[1].succeed('TS代码生成成功~~');
    }
    catch (error) {
        console.log("errr======>", error);
        spinners[1].fail('好像发生了点意外~');
    }
}
/**
 * 处理response对象
 * @param definitions 总接口的respons
 * @param hasRenderTypeList 需要渲染的response key
 * @param isrecursive 是否顶柜
 */
function assemblyResponse(definitions, hasRenderTypeList, isrecursive) {
    if (isrecursive === void 0) { isrecursive = false; }
    var newHasRenderTypeList = Array.from(hasRenderTypeList);
    var newDefinitions = [];
    _.forEach(definitions, function (value, key) {
        _.forEach(newHasRenderTypeList, function (renderTypeName) {
            if (key === renderTypeName) {
                if (isrecursive) {
                    findMoreRef(definitions, key, hasRenderTypeList);
                    return;
                }
                newDefinitions.push({
                    name: normalizeTypeName(key),
                    description: value.description,
                    tsType: ts.convertType(value)
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
function findMoreRef(alldefinitions, key, hasRenderTypeList) {
    _.forEach(alldefinitions, function (swaggerType, definitionsKey) {
        if (key === definitionsKey) {
            _.forEach(swaggerType.properties, function (properties, propertiesKey) {
                if (_.isString(properties.$ref)) {
                    var findNeewRenderKey = properties.$ref.substring(properties.$ref.lastIndexOf('/') + 1);
                    hasRenderTypeList.add(findNeewRenderKey);
                    findMoreRef(alldefinitions, findNeewRenderKey, hasRenderTypeList);
                }
                else if (properties.type === 'array') {
                    if (properties.items.hasOwnProperty('$ref')) {
                        var findNeewRenderKey = properties.items.$ref.substring(properties.items.$ref.lastIndexOf('/') + 1);
                        if (!hasRenderTypeList.has(findNeewRenderKey)) {
                            hasRenderTypeList.add(findNeewRenderKey);
                            findMoreRef(alldefinitions, findNeewRenderKey, hasRenderTypeList);
                        }
                    }
                }
            });
        }
    });
}
//2.组装渲染数据
function assemblyRender(item, renderList, hasRenderType) {
    var _a, _b, _c, _d, _e, _f;
    var showRenderString = new Set();
    var showRenderRef = new Set();
    var responseType = getResponseType(item.response);
    var operationName = '';
    var operationList = item.operationId
        .replace('controller-', '')
        .split('-');
    operationList.map(function (_operation, _operationIndex) {
        if (_operationIndex === 0) {
            operationName += _operation;
            return;
        }
        operationName += _operation.slice(0, 1).toUpperCase() + _operation.slice(1);
    });
    var baseData = {
        url: item.url,
        method: item.method,
        summary: item.summary,
        responseType: normalizeTypeName(responseType),
        operationId: operationName
    };
    if (!(item === null || item === void 0 ? void 0 : item.params) || ((_a = item === null || item === void 0 ? void 0 : item.params) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        baseData.showRender = '';
    }
    else if (((_b = item === null || item === void 0 ? void 0 : item.params) === null || _b === void 0 ? void 0 : _b.length) === 1) {
        var typeData = item.params[0];
        if (baseData.operationId === 'updateStoreSortUsingPOST') {
        }
        if ((_c = typeData === null || typeData === void 0 ? void 0 : typeData.tsType) === null || _c === void 0 ? void 0 : _c.isRef) {
            baseData.showRender = "params" + (typeData.required ? '' : '?') + ":" + typeData.tsType.target;
            hasRenderType.add(typeData.tsType.target);
        }
        else if ((_d = typeData === null || typeData === void 0 ? void 0 : typeData.tsType) === null || _d === void 0 ? void 0 : _d.isArray) {
            baseData.showRender = "params" + (typeData.required ? '' : '?') + ":Array<" + (typeData.tsType.elementType.target
                ? typeData.tsType.elementType.target.replace('«', '').replace('»', '')
                : typeData.tsType.elementType.tsType) + ">";
            if (typeData.tsType.elementType.target) {
                hasRenderType.add(typeData.tsType.elementType.target);
            }
        }
        else {
            baseData.showRender = "" + typeData.name + (typeData.required ? '' : '?') + ":" + typeData.tsType.tsType;
        }
    }
    else if (((_e = item === null || item === void 0 ? void 0 : item.params) === null || _e === void 0 ? void 0 : _e.length) > 1) {
        var isRefTypeCount_1 = 0;
        item.params.map(function (_params) {
            if (_params.tsType.isRef) {
                isRefTypeCount_1 += 1;
                showRenderRef.add("" + _params.tsType.target);
                hasRenderType.add(_params.tsType.target);
            }
            else if (_params.tsType.isObject) {
                isRefTypeCount_1 += 1;
                showRenderRef.add("" + _params.type);
                hasRenderType.add(_params.type);
            }
            else if (_params.tsType.isArray) {
                showRenderString.add("" + _params.name + (_params.required ? '' : '?') + " :Array<" + (_params.tsType.elementType.target
                    ? _params.tsType.elementType.target
                        .replace('«', '')
                        .replace('»', '')
                    : _params.tsType.elementType.tsType) + ">");
                if (_params.tsType.elementType.target) {
                    hasRenderType.add(_params.tsType.elementType.target);
                }
            }
            else {
                showRenderString.add("" + _params.name + (_params.required ? '' : '?') + " : " + _params.tsType.tsType);
            }
        });
        //如果全是ref
        if (isRefTypeCount_1 === ((_f = item === null || item === void 0 ? void 0 : item.params) === null || _f === void 0 ? void 0 : _f.length)) {
            baseData.showRender = "params:" + Array.from(showRenderRef).join('&');
        }
        else if (isRefTypeCount_1 === 0) {
            //全是单独类型
            baseData.showRender = "params:{" + Array.from(showRenderString).join(',') + "}";
        }
        else {
            //混合类型
            baseData.showRender = "params:{" + Array.from(showRenderString).join(',') + "} & " + Array.from(showRenderRef).join('&');
        }
    }
    renderList.push(baseData);
}
//获取response类型
function getResponseType(response) {
    var responseType = '';
    _.forEach(response, function (swaggerType, key) {
        var _a;
        if (key === 'default') {
            responseType = 'BaseResponse';
        }
        if (key === '200') {
            if (swaggerType.hasOwnProperty('schema') &&
                _.isString((_a = swaggerType.schema) === null || _a === void 0 ? void 0 : _a.$ref)) {
                responseType = swaggerType.schema.$ref.substring(swaggerType.schema.$ref.lastIndexOf('/') + 1);
            }
            else if (swaggerType.hasOwnProperty('schema') &&
                swaggerType.schema.hasOwnProperty('type')) {
                responseType = swaggerType.schema.type;
            }
        }
    });
    return responseType;
}
function writeCode(data, fileNameInfo) {
    var _this = this;
    var action = fs.readFileSync(path.resolve(__dirname, './ejs/ts.ejs'), 'utf8');
    var describeName = fileNameInfo.describeName;
    var ejsHtml = ejs.render(action, __assign(__assign({}, data), { describeName: describeName }));
    var webApiHtml = prettier.format(ejsHtml, { semi: false, parser: 'babel' });
    fs.writeFile("./controller/" + fileNameInfo.name + "Controller.ts", webApiHtml, 'utf8', function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); });
}
function writeAllControllerCode(fileList) {
    var _this = this;
    var action = fs.readFileSync(path.resolve(__dirname, './ejs/allController.ejs'), 'utf8');
    var ejsHtml = ejs.render(action, { fileList: fileList });
    var webApiHtml = prettier.format(ejsHtml, { semi: false, parser: 'babel' });
    fs.writeFile("./controller/api.ts", webApiHtml, 'utf8', function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); });
}
function baseFileHandle() {
    delDir(path.join(__dirname, 'controller'));
    fs.mkdirSync(path.join(__dirname, 'controller'));
}
function delDir(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file) {
            var curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) {
                delDir(curPath); //递归删除文件夹
            }
            else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(path);
    }
}
function normalizeTypeName(id) {
    return id.replace(/«|»/g, '');
}
function translateName(name) {
    //可能需要在这边处理数据了----
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    if (reg.test(name)) {
        name.split('').map(function (key) {
            var singlePingyin = pinyin(key, {
                style: pinyin.STYLE_FIRST_LETTER
            })[0][0];
            name = name.replace(key, singlePingyin).replace('-', '').replace('/', '');
        });
    }
    return name;
}
