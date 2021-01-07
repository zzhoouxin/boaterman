/**
 *
 *新增开票
 *
 **/
const addUsingPOST_11 = (
  params: OrderInvoiceInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除开票
 *
 **/
const deleteUsingDELETE_6 = (
  params: OrderInvoiceDeleteDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询会员发票列表
 *
 **/
const queryListUsingGET_19 = (): Promise<ResponseVOListOrderInvoiceVO> => {
  return new Promise(() => {})
}

/**
 *
 *新增开票
 *
 **/
const updateUsingPOST_6 = (
  params: OrderInvoiceUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_11,

  deleteUsingDELETE_6,

  queryListUsingGET_19,

  updateUsingPOST_6
}

export type OrderInvoiceDeleteDTO = {
  //发票编号
  orderInvoiceId?: string
}

export type OrderInvoiceInsertDTO = {
  //开户银行账号
  bankAccount: string,

  //开户银行名称
  bankName: string,

  //公司注册地址
  companyAddress: string,

  //公司联系方式
  companyMobile: string,

  //发票方式：1电子、2纸质
  invoiceMethod?: number,

  //抬头名称
  invoiceTitleName?: string,

  //发票抬头类型：1个人、2公司
  invoiceTitleType?: number,

  //发票类型：1普通发票 2增值税专用发票
  invoiceType?: number,

  //个人邮箱
  personalEmail: string,

  //个人手机号
  personalMobile: string,

  //纳税人识别号
  taxCompanyNo: string
}

export type OrderInvoiceUpdateDTO = {
  //开户银行账号
  bankAccount: string,

  //开户银行名称
  bankName: string,

  //公司注册地址
  companyAddress: string,

  //公司联系方式
  companyMobile: string,

  //发票方式：1电子、2纸质
  invoiceMethod?: number,

  //抬头名称
  invoiceTitleName?: string,

  //发票抬头类型：1个人、2公司
  invoiceTitleType?: number,

  //发票类型：1普通发票 2增值税专用发票
  invoiceType?: number,

  //发票编号
  orderInvoiceId?: string,

  //个人邮箱
  personalEmail: string,

  //个人手机号
  personalMobile: string,

  //纳税人识别号
  taxCompanyNo: string
}

export type OrderInvoiceVO = {
  //银行账号
  bankAccount: string,

  //银行名称
  bankName: string,

  //公司注册地址
  companyAddress: string,

  //公司联系方式
  companyMobile: string,

  //发票方式：1电子、2纸质
  invoiceMethod: number,

  //抬头名称-公司
  invoiceTitleName: string,

  //发票抬头类型：1个人、2公司
  invoiceTitleType: number,

  //发票类型：1普通发票 2增值税专用发票
  invoiceType: number,

  //开票主键
  orderInvoiceId: string,

  //个人邮箱
  personalEmail: string,

  //个人手机号
  personalMobile: string,

  //纳税人识别号
  taxCompanyNo: string
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

export type ResponseVOListOrderInvoiceVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<OrderInvoiceVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
