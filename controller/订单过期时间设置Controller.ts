/**
 *
 *添加订单过期时间
 *
 **/
const addUsingPOST_13 = (
  params: OrderRefundTimeInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询订单过期时间
 *
 **/
const queryListUsingGET_20 = (
  storeId: number
): Promise<ResponseVOListOrderRefundTimeVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改订单过期时间
 *
 **/
const updateUsingPOST_7 = (
  params: OrderRefundTimeUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_13,

  queryListUsingGET_20,

  updateUsingPOST_7
}

export type LocalTime = {
  //
  hour: number,

  //
  minute: number,

  //
  nano: number,

  //
  second: number
}

export type OrderRefundTimeInsertDTO = {
  //营地id
  storeId: number,

  //时间
  time?: LocalTime
}

export type OrderRefundTimeUpdateDTO = {
  //id
  id?: number,

  //时间
  time?: LocalTime
}

export type OrderRefundTimeVO = {
  //是否可修改: 0:否 1:是
  showFlag: number,

  //时间
  time: LocalTime
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

export type ResponseVOListOrderRefundTimeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<OrderRefundTimeVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
