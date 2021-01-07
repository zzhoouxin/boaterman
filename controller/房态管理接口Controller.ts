/**
 *
 *批量保留远期房间
 *
 **/
const batchSaveRoomStatusUsingPOST = (
  params: BatchUpdateRoomStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *更换保留房间
 *
 **/
const changeSaveRoomUsingPOST = (
  params: ChangeSaveRoomDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *远期房态信息
 *
 **/
const queryForwardListUsingGET = (params: {
  roomTypeId?: number,
  startTime: string,
  storeId: number
}): Promise<ResponseVOListRoomTypeStateDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *远期房态日历
 *
 **/
const queryRoomStateDateListUsingGET = (
  startTime: string
): Promise<ResponseVOListDateDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改远期房间状态
 *
 **/
const updateRoomStatusUsingPOST = (
  params: UpdateRoomStateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  batchSaveRoomStatusUsingPOST,

  changeSaveRoomUsingPOST,

  queryForwardListUsingGET,

  queryRoomStateDateListUsingGET,

  updateRoomStatusUsingPOST
}

export type BatchUpdateRoomStatusDTO = {
  //结束日期
  endDate?: string,

  //保留房型ID列表
  roomTypeList: Array<number>,

  //开始日期
  startDate?: string,

  //所属门店Id
  storeId?: number
}

export type ChangeSaveRoomDTO = {
  //结束时间
  endTime?: string,

  //新房号id
  newRoomNoId?: number,

  //原房号id
  oldRoomNoId?: number,

  //原因
  reason: string,

  //备注
  remark: string,

  //开始时间
  startTime?: string,

  //店铺id
  storeId?: number
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

export type DateDetailVO = {
  //日期
  checkInDate: string,

  //星期几
  weekDay: string
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

export type ResponseVOListDateDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<DateDetailVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListRoomTypeStateDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomTypeStateDetailVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomNoDayStateVO = {
  //房态日期
  checkInDate: string,

  //入住时长
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPerson>,

  ///保留/预定/结束时间
  endDate: string,

  //入住人手机号
  mobile: string,

  //预定人姓名
  name: string,

  //订单编号
  orderNo: string,

  //订单状态  0:未确认（未支付） 1:已支付(未入住--线上预定) 2:申请退款 3:退款中 4:已退款  5:未入住(线下预定) 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //备注信息
  remark: string,

  //房费
  roomAmount: number,

  ///保留/预定/入住开始时间
  startDate: string,

  //状态  0：未预定 1:已入住  2:维修  3:保留房
  status: number
}

export type RoomNoStateVO = {
  //当前是否净房 1=空净  0=空脏 2=住净 3=住脏
  clearFlag: number,

  //房号编号
  roomNo: string,

  //房号Id
  roomNoId: number,

  //每日房态
  roomNoStateList: Array<RoomNoDayStateVO>,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type RoomStateVO = {
  //日期
  checkInDate: string,

  //剩余房间数
  roomCount: number,

  //星期几
  weekDay: string
}

export type RoomTypeStateDetailVO = {
  //房间信息
  roomNoList: Array<RoomNoStateVO>,

  //每日房态
  roomStateList: Array<RoomStateVO>,

  //房型id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type UpdateRoomStateDTO = {
  //房间结束日期
  endDate?: string,

  //备注
  remark: string,

  //房间id
  roomNoId?: number,

  //房型id
  roomTypeId?: number,

  //房间开始日期
  startDate?: string,

  //房间状态：0：未入住 1:已入住 2:维修 3:保留房
  status?: number,

  //门店id
  storeId?: number
}

export type BaseResponse = {}
