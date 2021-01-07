/**
 *
 *展示城市列表
 *
 **/
const queryCityListUsingGET = (
  province: string
): Promise<ResponseVOListSystemAreaVO> => {
  return new Promise(() => {})
}

/**
 *
 *展示区域列表
 *
 **/
const queryDistrictListUsingGET = (
  city: string
): Promise<ResponseVOListSystemAreaVO> => {
  return new Promise(() => {})
}

/**
 *
 *展示省份列表
 *
 **/
const queryProvinceListUsingGET = (): Promise<ResponseVOListSystemAreaVO> => {
  return new Promise(() => {})
}

export default {
  queryCityListUsingGET,

  queryDistrictListUsingGET,

  queryProvinceListUsingGET
}

export type ResponseVOListSystemAreaVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<SystemAreaVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type SystemAreaVO = {
  //编码
  code: string,

  //地址名称
  name: string
}

export type BaseResponse = {}
