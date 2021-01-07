/**
 *
 *收银
 *
 **/
const addCashUsingPOST = (params: OrderCashInsertDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *冲账
 *
 **/
const offsetCashUsingPOST = (params: OffsetCashDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *对账详情---(备注：全部=消费+支付)
 *
 **/
const queryCashDetailUsingGET = (params: {
  orderNo: string,
  storeId: number
}): Promise<ResponseVOOrderCashListVO> => {
  return new Promise(() => {})
}

/**
 *
 *退款
 *
 **/
const refundCashUsingPOST = (params: RefundCashDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *收银--修改备注
 *
 **/
const updateCashUsingPOST = (
  params: OrderCashUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addCashUsingPOST,

  offsetCashUsingPOST,

  queryCashDetailUsingGET,

  refundCashUsingPOST,

  updateCashUsingPOST
}

export type OffsetCashDTO = {
  //消费科目id集合
  consumptionOffsetList: Array<string>,

  //支付科目id集合
  paymentOffsetList: Array<string>,

  //门店id
  storeId?: number
}

export type OrderCashInsertDTO = {
  //订单消费明细
  orderConsumptionInsertDTOList: Array<OrderConsumptionInsertDTO>,

  //订单编号
  orderNo?: string,

  //订单支付记录
  orderPaymentInsertDTOList: Array<OrderPaymentInsertDTO>,

  //门店id
  storeId?: number
}

export type OrderCashListVO = {
  //余额
  balanceAmount: number,

  //营业日
  businessDate: string,

  //入住时间
  checkInTime: string,

  //消费金额
  consumptionAmount: number,

  //消费集合
  consumptionList: Array<OrderConsumptionDetailVO>,

  //离开时间
  leaveDate: string,

  //冲账集合
  offsetList: Array<OrderOffsetDetailVO>,

  //订单金额
  orderAmount: number,

  //订单编号
  orderNo: string,

  //订单状态 0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //付款金额
  paymentAmount: number,

  //支付集合
  paymentList: Array<OrderPaymentDetailVO>,

  //预定时间
  preCheckInDate: string,

  //减免金额
  reduceConsumptionAmount: number,

  //房型市价
  salePrice: number
}

export type OrderCashUpdateDTO = {
  //消费/支付id
  id?: string,

  //操作备注
  remark: string,

  //门店id
  storeId?: number,

  //消费/支付类型：0 消费  1 支付
  type?: number
}

export type OrderConsumptionDetailVO = {
  //支付金额
  consumptionAmount: number,

  //ID
  consumptionId: string,

  //消费状态  1:正常 2:冲账
  consumptionType: number,

  //消费类型Id  1:夜审房费 2:手工房费
  consumptionTypeId: number,

  //消费类型名称
  consumptionTypeName: string,

  //操作人姓名
  createName: string,

  //创建时间
  createTime: string,

  //操作备注
  remark: string,

  //班次:1白班，2中班，3晚班
  shift: number,

  //类型 0:消费 1：支付
  type: number
}

export type OrderConsumptionInsertDTO = {
  //消费金额
  consumptionAmount?: number,

  //消费类型Id  1:手工房费  .......
  consumptionTypeId?: number,

  //操作备注
  remark: string
}

export type OrderOffsetDetailVO = {
  //类型 0:消费  1：支付
  consumptionPaymentType: number,

  //操作人姓名
  createName: string,

  //创建时间
  createTime: string,

  //支付金额
  offsetAmount: number,

  //消费/支付Id
  offsetId: string,

  //消费/支付状态 0:退款 1:正常 2:冲账
  offsetType: number,

  //消费类型Id  1:夜审房费 2:手工房费
  offsetTypeId: number,

  //消费类型名称
  offsetTypeName: string,

  //操作备注
  remark: string,

  //班次:1白班，2中班，3晚班
  shift: number,

  //类型 0:消费  1：支付  2:冲账
  type: number
}

export type OrderPaymentDetailVO = {
  //操作人姓名
  createName: string,

  //创建时间
  createTime: string,

  //支付状态类型:0退款  1收款 2:冲账
  payType: number,

  //支付金额
  paymentAmount: number,

  //ID
  paymentId: string,

  //支付科目id 1:线上支付 2:线上优惠券 3:积分抵扣 4:现金
  paymentTypeId: number,

  //消费/支付类型名称
  paymentTypeName: string,

  //操作备注
  remark: string,

  //班次:1白班，2中班，3晚班
  shift: number,

  //类型 0:消费  1：支付
  type: number
}

export type OrderPaymentInsertDTO = {
  //支付金额
  paymentAmount?: number,

  //支付科目id
  paymentTypeId?: number,

  //操作备注
  remark: string
}

export type RefundCashDTO = {
  //订单编号
  orderNo?: string,

  //支付金额
  paymentAmount?: number,

  //操作备注
  remark: string,

  //门店id
  storeId?: number
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

export type ResponseVOOrderCashListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: OrderCashListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
