/**
 *
 *添加支付科目类型
 *
 **/
const addUsingPOST_14 = (params: PaymentTypeInsertDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑支付科目类型
 *
 **/
const modifyUsingPOST_7 = (
  params: PaymentTypeUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *是否展示支付科目类型
 *
 **/
const modifyShowUsingPOST_1 = (
  params: PaymentTypeUpdateShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询支付科目类型(所有)
 *
 **/
const queryAllListUsingGET = (): Promise<ResponseVOListPaymentTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询支付科目类型(下拉框展示)
 *
 **/
const queryListUsingGET_21 = (): Promise<ResponseVOListPaymentTypeVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_14,

  modifyUsingPOST_7,

  modifyShowUsingPOST_1,

  queryAllListUsingGET,

  queryListUsingGET_21
}

export type PaymentTypeInsertDTO = {
  //父级id
  parentId?: number,

  //支付科目名称
  paymentTypeName?: string
}

export type PaymentTypeUpdateDTO = {
  //父级id
  parentId?: number,

  //支付科目id
  paymentTypeId?: number,

  //支付科目名称
  paymentTypeName?: string
}

export type PaymentTypeUpdateShowDTO = {
  //支付科目id
  paymentTypeId?: number,

  //是否显示: 0显示、1不显示
  showFlag?: number
}

export type PaymentTypeVO = {
  //是否编辑：0:否  1:是
  editFlag: number,

  //父级id
  parentId: number,

  //支付科目id
  paymentTypeId: number,

  //支付科目名称
  paymentTypeName: string,

  //前是否展示：0展示  1不展示
  showFlag: number
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

export type ResponseVOListPaymentTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<PaymentTypeVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
