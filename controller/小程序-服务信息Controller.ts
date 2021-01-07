/**
 *
 *取消订单原因
 *
 **/
const queryCancelReasonUsingGET = (
  storeId: number
): Promise<ResponseVOListOrderReasonVO> => {
  return new Promise(() => {})
}

/**
 *
 *服务列表
 *
 **/
const queryRoomServeUsingGET = (params: {
  roomTypeId: number,
  storeId: number
}): Promise<ResponseVOOrderServeListVO> => {
  return new Promise(() => {})
}

export default {
  queryCancelReasonUsingGET,

  queryRoomServeUsingGET
}

export type OrderReasonVO = {
  //取消原因Id
  serveId: number,

  //取消原因
  serveName: string
}

export type OrderServeListVO = {
  //4:特别关照顾客
  careList: Array<OrderServeVO>,

  //1.入住茶饮
  checkInList: Array<OrderServeVO>,

  //4:入住偏好
  featureList: Array<OrderServeVO>,

  //2:客房布置
  roomList: Array<OrderServeVO>
}

export type OrderServeVO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //服务Id
  serveId: number,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  // 服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number
}

export type ResponseVOListOrderReasonVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<OrderReasonVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOOrderServeListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: OrderServeListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
