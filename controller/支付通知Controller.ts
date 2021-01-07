/**
 *
 *支付通知
 *
 **/
const payNotifyUsingPOST = (params: PayNotifyDTO): Promise<string> => {
  return new Promise(() => {})
}

/**
 *
 *退款通知
 *
 **/
const refundNotifyUsingPOST = (params: RefundNotifyDTO): Promise<string> => {
  return new Promise(() => {})
}

/**
 *
 *分帐通知
 *
 **/
const settleNotifyUsingPOST = (params: SettleNotifyDTO): Promise<string> => {
  return new Promise(() => {})
}

export default {
  payNotifyUsingPOST,

  refundNotifyUsingPOST,

  settleNotifyUsingPOST
}

export type PayNotifyDTO = {
  //渠道编码
  channelCode: string,

  //扩展参数
  extendParam: string,

  //支付中心通知业务系统时间
  notifyDate: string,

  //通知类型 支付：pay 分账：settle 退款：refund
  notifyType: string,

  //业务系统订单号
  outTradeNo: string,

  //支付单号
  paymentCode: string,

  //支付时间
  paymentDate: string,

  //支付方式编码
  paymentMethodCode: string,

  //支付方式名称
  paymentMethodName: string,

  //平台费
  platformFee: number,

  //可分账金额
  settleFee: number,

  //status
  status: number
}

export type RefundNotifyDTO = {
  //支付中心通知业务系统时间
  notifyDate: string,

  //回调类型 refund
  notifyType: string,

  //业务系统订单号
  outTradeNo: string,

  //退款时间
  refundDate: string,

  //status 5:退款成功 6:退款失败 8:退款中
  status: number
}

export type SettleNotifyDTO = {
  //支付中心通知业务系统时间
  notifyDate: string,

  //回调类型 refund
  notifyType: string,

  //业务系统订单号
  outTradeNo: string,

  //分帐时间
  settleDate: string,

  //status 3 分账成功 4分账失败 7分账中
  status: number
}

export type BaseResponse = {}
