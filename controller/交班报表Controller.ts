/**
 *
 *确认交班报告
 *
 **/
const affirmShiftReportUsingPOST = (
  params: AffirmShiftReportDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *检查今日工作
 *
 **/
const checkTodayWorkUsingGET = (
  storeId: number
): Promise<ResponseVOTodayWorkVO> => {
  return new Promise(() => {})
}

/**
 *
 *交班
 *
 **/
const nextShiftUsingPOST = (params: NextShiftDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *准备交班
 *
 **/
const preNextShiftUsingGET = (
  storeId: number
): Promise<ResponseVONextShiftVO> => {
  return new Promise(() => {})
}

/**
 *
 *交班详情
 *
 **/
const queryDetailUsingGET_17 = (
  shiftReportId: string
): Promise<ResponseVOShiftReportVO> => {
  return new Promise(() => {})
}

/**
 *
 *交班报表
 *
 **/
const queryPageUsingGET_9 = (params: {
  affirmId?: number,
  affirmStatus?: number,
  createId?: number,
  page?: number,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVOShiftReportListVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询交班报告
 *
 **/
const queryShiftReportUsingGET = (
  storeId: number
): Promise<ResponseVOShiftReportVO> => {
  return new Promise(() => {})
}

export default {
  affirmShiftReportUsingPOST,

  checkTodayWorkUsingGET,

  nextShiftUsingPOST,

  preNextShiftUsingGET,

  queryDetailUsingGET_17,

  queryPageUsingGET_9,

  queryShiftReportUsingGET
}

export type AffirmShiftReportDTO = {
  //报告id
  shiftReportId?: string,

  //门店id
  storeId?: number
}

export type CheckInPersonVO = {
  //车牌号-CRS
  carNo: string,

  //证件号码-CRS
  idNo: string,

  //证件类型-CRS
  idType: number,

  //入住人联系方式-CRS
  mobile: string,

  //入住人姓名
  name: string
}

export type NextShiftDTO = {
  //交接人id
  affirmId?: number,

  //门店id
  storeId?: number
}

export type NextShiftVO = {
  //现金
  cashAmount: number,

  //交班人姓名
  createName: string,

  //操作员列表
  operatorList: Array<string>,

  //交班财务情况
  shiftFinanceList: Array<ShiftFinanceVO>
}

export type PageVOShiftReportListVO = {
  //数据
  content: Array<ShiftReportListVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
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

export type ResponseVONextShiftVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: NextShiftVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOShiftReportListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOShiftReportListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOShiftReportVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: ShiftReportVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOTodayWorkVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: TodayWorkVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ShiftFinanceVO = {
  //合计金额
  compilationsAmount: number,

  //收款
  payAmount: number,

  //科目名称
  paymentTypeName: string,

  //退款款
  refundAmount: number
}

export type ShiftReportListVO = {
  //交接人id
  affirmId: number,

  //交接人姓名
  affirmName: string,

  //确认状态 0:未确认 1:已确认
  affirmStatus: number,

  //报告id
  createId: number,

  //报告人
  createName: string,

  //交班时间
  createTime: string,

  //报告id
  shiftReportId: string
}

export type ShiftReportVO = {
  //交接人id
  affirmId: number,

  //交接人姓名
  affirmName: string,

  //交班现金
  cashAmount: number,

  //报告id
  createId: number,

  //报告id
  createName: string,

  //交班时间
  createTime: string,

  //操作人
  operatorList: Array<string>,

  //交班财务情况
  shiftFinanceList: Array<ShiftFinanceVO>,

  //报告id
  shiftReportId: string
}

export type TodayWorkVO = {
  //欠费订单
  amountOverdueOrderList: Array<WorkOrderVO>,

  //到期都未入住的订单
  noCheckInOrderList: Array<WorkOrderVO>,

  //应离未离订单
  oughtLeaveOrderList: Array<WorkOrderVO>,

  //应到未到无付款订单
  overdueNoAmountOrderList: Array<WorkOrderVO>
}

export type WorkOrderVO = {
  //是否确认
  affirmFlag: number,

  //确认人id
  affirmId: number,

  //确认人
  affirmName: string,

  //确认备注
  affirmRemark: string,

  //入住人
  checkInPersonList: Array<CheckInPersonVO>,

  //入住时间
  checkInTime: string,

  //消费金额
  consumptionAmount: number,

  //离开时间
  leaveDate: string,

  //预定人的手机号
  mobile: string,

  //预定人姓名
  name: string,

  //订单金额
  orderAmount: number,

  //订单编号
  orderNo: string,

  //订单状态
  orderState: number,

  //支付金额
  paymentAmount: number,

  //预入住时间
  preCheckInDate: string,

  //房费
  roomAmount: number,

  //房型房号
  roomNo: string,

  //订单状态
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type BaseResponse = {}
