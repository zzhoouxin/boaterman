/**
 *
 *新增房号
 *
 **/
const addUsingPOST_17 = (params: AddRoomNoDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *检查房号是否存在
 *
 **/
const checkRoomNoExistUsingGET = (params: {
  roomNo: string,
  roomNoId?: number,
  roomTypeId: number
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改房间净脏状态
 *
 **/
const modifyClearFlagUsingPOST = (
  params: RoomNoClearDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *根据房型和时间段查询可用房号列表
 *
 **/
const queryAvailableRoomNoListUsingGET = (params: {
  endTime: string,
  roomTypeId: number,
  startTime: string,
  storeId: number
}): Promise<ResponseVOListAvailableRoomNoVO> => {
  return new Promise(() => {})
}

/**
 *
 *保留根据房型和时间段查询可用房号列表
 *
 **/
const queryKeepRoomNoListUsingGET = (params: {
  endTime: string,
  roomNoId: number,
  roomTypeId: number,
  startTime: string,
  storeId: number
}): Promise<ResponseVOListRoomNoSelectVO> => {
  return new Promise(() => {})
}

/**
 *
 *根据房型查询房号列表
 *
 **/
const queryListUsingGET_24 = (params: {
  roomTypeId: number,
  storeId: number
}): Promise<ResponseVOListRoomNoListVO> => {
  return new Promise(() => {})
}

/**
 *
 *房号列表
 *
 **/
const queryPageUsingGET_7 = (params: {
  page?: number,
  roomNo?: string,
  roomTypeId?: number,
  size?: number,
  status?: number,
  storeId: number
}): Promise<ResponseVOPageVORoomNoVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询入住服务--客房特征
 *
 **/
const queryRoomFeatureUsingGET = (
  roomTypeId?: number
): Promise<ResponseVOListCheckInServeSelectVO> => {
  return new Promise(() => {})
}

/**
 *
 *时间段内可预定的房间
 *
 **/
const selectRoomNoForAvailableUsingGET = (params: {
  endTime: string,
  roomTypeId: number,
  startTime: string,
  storeId: number
}): Promise<ResponseVOListSubscribeRoomNoStateVO> => {
  return new Promise(() => {})
}

/**
 *
 *弹框修改房号信息
 *
 **/
const updateUsingPOST_8 = (params: UpdateRoomNoDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *上下架房号
 *
 **/
const updateStatusUsingPOST_4 = (
  params: UpdateRoomNoStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_17,

  checkRoomNoExistUsingGET,

  modifyClearFlagUsingPOST,

  queryAvailableRoomNoListUsingGET,

  queryKeepRoomNoListUsingGET,

  queryListUsingGET_24,

  queryPageUsingGET_7,

  queryRoomFeatureUsingGET,

  selectRoomNoForAvailableUsingGET,

  updateUsingPOST_8,

  updateStatusUsingPOST_4
}

export type AddRoomNoDTO = {
  //房间备注
  remark: string,

  //房间编号
  roomNo?: string,

  //房型id
  roomTypeId?: number,

  //房间特征集合
  serveIds: Array<number>,

  //房间状态：1 上架（可用）  0 下架（停用）
  status?: number,

  //所属门店Id
  storeId?: number
}

export type AvailableRoomNoVO = {
  //房间备注
  remark: string,

  //房号编号
  roomNo: string,

  //房号编号
  roomNoId: number,

  //房型Id
  roomTypeId: number,

  //房间状态 1 上架（可用）  0 下架（停用）
  status: number
}

export type CheckInServeSelectVO = {
  //服务ID
  serveId: number,

  //服务名称
  serveName: string
}

export type PageVORoomNoVO = {
  //数据
  content: Array<RoomNoVO>,

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

export type ResponseVOListAvailableRoomNoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<AvailableRoomNoVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListCheckInServeSelectVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CheckInServeSelectVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListRoomNoListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomNoListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListRoomNoSelectVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomNoSelectVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListSubscribeRoomNoStateVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<SubscribeRoomNoStateVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVORoomNoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVORoomNoVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomFeatureVO = {
  //服务Id
  serveId: number,

  //服务名称
  serveName: string
}

export type RoomNoClearDTO = {
  //将要转成的脏净状态
  clearFlag?: number,

  //房号Id
  roomNoId?: number,

  //房型id
  roomTypeId?: number,

  //所属门店Id
  storeId?: number
}

export type RoomNoListVO = {
  //房间备注
  remark: string,

  //房屋特征
  roomFeatureList: Array<RoomFeatureVO>,

  //房号编号
  roomNo: string,

  //房号编号
  roomNoId: number,

  //房型Id
  roomTypeId: number,

  //房间状态 1 上架（可用）  0 下架（停用）
  status: number
}

export type RoomNoSelectVO = {
  //房号编号
  roomNo: string,

  //房号编号
  roomNoId: number
}

export type RoomNoVO = {
  //房间备注
  remark: string,

  //房屋特征
  roomFeatureList: Array<RoomFeatureVO>,

  //房号编号
  roomNo: string,

  //房号编号
  roomNoId: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //房间状态 1 上架（可用）  0 下架（停用）
  status: number
}

export type SubscribeRoomNoStateVO = {
  //入住时间
  checkInDate: string,

  //房号编号
  roomNo: string,

  //房号Id
  roomNoId: number
}

export type UpdateRoomNoDTO = {
  //房间备注
  remark: string,

  //房间编号
  roomNo?: string,

  //房号Id
  roomNoId?: number,

  //房间特征集合
  serveIds: Array<number>
}

export type UpdateRoomNoStatusDTO = {
  //房号Id
  roomNoId: number,

  //房间状态：1 上架（可用）  0 下架（停用）
  status?: number,

  //所属门店Id
  storeId?: number
}

export type BaseResponse = {}
