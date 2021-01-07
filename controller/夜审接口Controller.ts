/**
 *
 *获取班次
 *
 **/
const getShiftUsingGET = (): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  getShiftUsingGET
}

export type ResponseVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: object,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
