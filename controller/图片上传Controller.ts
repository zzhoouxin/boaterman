/**
 *
 *上传图片(单张)
 *
 **/
const uploadUsingPOST = (file?: object): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *上传图片(批量:最大数量5)
 *
 **/
const uploadManyUsingPOST = (params: Array<object>): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  uploadUsingPOST,

  uploadManyUsingPOST
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
