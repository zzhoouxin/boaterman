/**
 *
 *今日已入住
 *
 **/
const queryCheckInUsingGET_1 = (params: {
  page?: number,
  searchText?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVO今日已入住> => {
  return new Promise(() => {})
}

/**
 *
 *当前在住
 *
 **/
const queryCurrentLivingUsingGET = (params: {
  page?: number,
  searchText?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVO今当前在住> => {
  return new Promise(() => {})
}

/**
 *
 *今日离店
 *
 **/
const queryLeaveUsingGET = (params: {
  page?: number,
  searchText?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVO今日离店> => {
  return new Promise(() => {})
}

/**
 *
 *今日预抵
 *
 **/
const queryPreArrivalsUsingGET = (params: {
  page?: number,
  searchText?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVO今日预抵> => {
  return new Promise(() => {})
}

/**
 *
 *今日预定
 *
 **/
const queryReserveUsingGET = (params: {
  page?: number,
  searchText?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVO今日预定> => {
  return new Promise(() => {})
}

export default {
  queryCheckInUsingGET_1,

  queryCurrentLivingUsingGET,

  queryLeaveUsingGET,

  queryPreArrivalsUsingGET,

  queryReserveUsingGET
}

export type CheckInPerson = {
  //
  idNo: string,

  //
  idType: number,

  //
  mobile: string,

  //
  name: string
}

export type PageVO今当前在住 = {
  //数据
  content: Array<今当前在住>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVO今日已入住 = {
  //数据
  content: Array<今日已入住>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVO今日离店 = {
  //数据
  content: Array<今日离店>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVO今日预定 = {
  //数据
  content: Array<今日预定>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVO今日预抵 = {
  //数据
  content: Array<今日预抵>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type ResponseVOPageVO今当前在住 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVO今当前在住,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVO今日已入住 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVO今日已入住,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVO今日离店 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVO今日离店,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVO今日预定 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVO今日预定,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVO今日预抵 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVO今日预抵,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type 今当前在住 = {
  //押金
  cashPledge: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPerson>,

  //入住时间
  checkInTime: string,

  //离店时间
  leaveDate: string,

  //手机号
  mobile: string,

  //入住人
  name: string,

  //订单金额
  orderAmount: number,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态  0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type 今日已入住 = {
  //押金
  cashPledge: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPerson>,

  //入住时间
  checkInTime: string,

  //离店时间
  leaveDate: string,

  //手机号
  mobile: string,

  //预定人
  name: string,

  //订单金额
  orderAmount: number,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态  0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type 今日离店 = {
  //押金
  cashPledge: number,

  //入住时间
  checkInTime: string,

  //离店时间
  leaveDate: string,

  //手机号
  mobile: string,

  //入住人
  name: string,

  //订单金额
  orderAmount: number,

  //订单编号
  orderNo: string,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态  0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //房号
  roomNo: string,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type 今日预定 = {
  //入住时长(天)
  checkInDays: number,

  //入住时间
  checkInTime: string,

  //预定时间
  createTime: string,

  //预定人的手机号
  mobile: string,

  //预定人
  name: string,

  //订单金额
  orderAmount: number,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态  0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type 今日预抵 = {
  //预定天数
  checkInDays: number,

  //离开时间
  leaveDate: string,

  //预定人的手机号
  mobile: string,

  //预定人
  name: string,

  //订单金额
  orderAmount: number,

  //订单号
  orderNo: string,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态  0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //预入住时间
  preCheckInDate: string,

  //房号
  roomNo: string,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type BaseResponse = {}
