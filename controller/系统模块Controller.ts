/**
 *
 *查询系统可访问模块
 *
 **/
const queryAccessListUsingGET = (): Promise<ResponseVOListSystemModuleAccessVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询系统模块
 *
 **/
const queryListUsingGET_29 = (): Promise<ResponseVOListSystemModuleVO> => {
  return new Promise(() => {})
}

export default {
  queryAccessListUsingGET,

  queryListUsingGET_29
}

export type ResponseVOListSystemModuleAccessVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<SystemModuleAccessVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListSystemModuleVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<SystemModuleVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type SystemModuleAccessVO = {
  //模块激活图标
  moduleActiveImg: string,

  //模块Id
  moduleId: number,

  //模块图标
  moduleImg: string,

  //模块名称
  moduleName: string,

  //模块英文名称
  moduleNameEn: string,

  //模块路由
  moduleRoute: string,

  //是否可以访问 0:不能访问 1:可以访问
  status: number
}

export type SystemModuleVO = {
  //模块Id
  moduleId: number,

  //模块名称
  moduleName: string,

  //模块英文名称
  moduleNameEn: string
}

export type BaseResponse = {}
