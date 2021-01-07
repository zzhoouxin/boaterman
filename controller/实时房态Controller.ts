/**
 *
 *实时房态---置脏/置净
 *
 **/
const operateClearOrDirtyUsingPOST = (
  params: RoomNoClearDirtyDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *实时房态查询(左边菜单)
 *
 **/
const queryLeftListUsingGET = (
  storeId: number
): Promise<ResponseVO实时房态> => {
  return new Promise(() => {})
}

/**
 *
 *实时房态查询(右边菜单)
 *
 **/
const queryRightListUsingGET = (params: {
  orderSources?: Array<number>,
  roomNoOrName?: string,
  roomReminder?: number,
  roomStateStatus?: number,
  roomTypeIds?: Array<number>,
  storeId: number
}): Promise<ResponseVOListRoomStateReportVO> => {
  return new Promise(() => {})
}

export default {
  operateClearOrDirtyUsingPOST,

  queryLeftListUsingGET,

  queryRightListUsingGET
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

export type ResponseVOListRoomStateReportVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomStateReportVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVO实时房态 = {
  //接口错误码
  code: number,

  //接口返回数据
  data: 实时房态,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomCostVO = {
  //日期
  checkInDate: string,

  //房间费用
  salePrice: number,

  //星期几
  weekDay: string
}

export type RoomNoClearDirtyDTO = {
  //是否置脏/置净：0：置脏  1：置净
  clearFlag?: number,

  //房号
  roomNoId?: number,

  //门店Id
  storeId?: number
}

export type RoomStateRealTimeVO = {
  //房态类型数量
  roomStateCount: number,

  //房态类型 1:空房 2:维修  3:住房  4:保留房
  roomStatus: number,

  //房态类型 1:空房 2:维修  3:住房  4:保留房
  roomStatusName: string
}

export type RoomStateReportVO = {
  //实际支付金额
  actualPayAmount: number,

  //是否欠费：0欠费 1不欠费
  arrearsFlag: number,

  //早餐费用 （不算入订单费用。只是为了统计成本）
  breakfastAmount: number,

  //押金
  cashPledge: number,

  //是否有押金 0:没有 1：有
  cashPledgeFlag: number,

  //当前时间
  checkInDate: string,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPerson>,

  //实际入住时间
  checkInTime: string,

  //房号状态：当前是否净房 1=空净  0=空脏 2=住净 3=住脏
  clearFlag: number,

  //消费金额
  consumption: number,

  //优惠券抵扣金额
  couponAmount: number,

  //是否使用优惠券 0:未使用 1:使用了
  couponFlag: number,

  //优惠券名称
  couponName: string,

  //优惠券编号
  couponNo: string,

  //保留/维修结束时间
  endDate: string,

  //离开时间
  leaveDate: string,

  //预定人的手机号
  mobile: string,

  //预定人姓名
  name: string,

  //订单金额
  orderAmount: number,

  //关联订单号
  orderNo: string,

  //订单来源  1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态 0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //支付金额
  payment: number,

  //积分抵扣金额
  pointAmount: number,

  //是否使用了积分
  pointFlag: number,

  //预入住时间
  preCheckInDate: string,

  //原因
  reason: string,

  //备注
  remark: string,

  //可预定库存
  residueInventory: number,

  //房间费用
  roomAmount: number,

  //房费信息
  roomCostList: Array<RoomCostVO>,

  //房号编码
  roomNo: string,

  //房号id
  roomNoId: number,

  //房型id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //保留/维修开始时间
  startDate: string,

  //状态  0：未入住 1:已入住 2:维修 3:保留房
  status: number
}

export type RoomTypeRealTimeVO = {
  //房间数量
  roomCount: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type 实时房态 = {
  //订单来源
  orderSourceList: Array<订单来源>,

  //房间提醒
  roomReminderList: Array<房间提醒>,

  //房态
  roomStateList: Array<RoomStateRealTimeVO>,

  //房型
  roomTypeList: Array<RoomTypeRealTimeVO>
}

export type 房间提醒 = {
  //房间提醒类型 1:预抵  2:预离   3:脏房  4:欠费
  roomReminder: number,

  //房间提醒数量
  roomReminderCount: number,

  //房间提醒名称
  roomReminderName: string
}

export type 订单来源 = {
  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单来源数量
  orderSourceCount: number,

  //订单来源
  orderSourceName: string
}

export type BaseResponse = {}
