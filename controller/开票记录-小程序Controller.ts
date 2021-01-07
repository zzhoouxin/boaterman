/**
 *
 *新增开票
 *
 **/
const addUsingPOST_12 = (
  params: OrderInvoiceRecordInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_12
}

export type OrderInvoiceRecordInsertDTO = {
  //发票编号
  orderInvoiceId?: string,

  //订单编号
  orderNo?: string
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
