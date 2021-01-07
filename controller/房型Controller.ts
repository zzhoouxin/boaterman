/**
 *
 *新增房型
 *
 **/
const addUsingPOST_18 = (params: AddRoomTypeDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改房型
 *
 **/
const modifyUsingPOST_9 = (params: ModifyRoomTypeDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *房型详情
 *
 **/
const queryDetailUsingGET_16 = (
  roomTypeId: number
): Promise<ResponseVORoomTypeDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *远期房态--房型列表
 *
 **/
const queryListUsingGET_25 = (params: {
  roomTypeId?: number,
  storeId: number
}): Promise<ResponseVOListRoomTypeListVO> => {
  return new Promise(() => {})
}

/**
 *
 *房型列表
 *
 **/
const queryPageUsingGET_8 = (params: {
  page?: number,
  roomTypeName?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVORoomTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *远期房态--房型下拉列表
 *
 **/
const querySelectListUsingGET = (
  storeId: number
): Promise<ResponseVOListRoomTypeSelectVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单换房--房型列表
 *
 **/
const replaceListUsingGET = (params: {
  roomTypeId?: number,
  storeId: number
}): Promise<ResponseVOListRoomTypeSelectVO> => {
  return new Promise(() => {})
}

/**
 *
 *停用/启用
 *
 **/
const updateStatusUsingPOST_5 = (
  params: RoomTypeStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_18,

  modifyUsingPOST_9,

  queryDetailUsingGET_16,

  queryListUsingGET_25,

  queryPageUsingGET_8,

  querySelectListUsingGET,

  replaceListUsingGET,

  updateStatusUsingPOST_5
}

export type AddRoomTypeDTO = {
  //面积
  area?: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:不包含 1:包含
  breakfastFlag?: number,

  //早餐单价
  breakfastPrice: number,

  //押金
  cashPledge: number,

  //是否有押金 0:否 1:是
  cashPledgeFlag?: number,

  //可入住人数
  checkInPeople?: number,

  //房型介绍
  description?: string,

  //营地设备
  facilityId: Array<number>,

  //房型图片
  roomTypeImg?: Array<string>,

  //房型名称
  roomTypeName?: string,

  //房型门市价
  salePrice?: number,

  //门店id
  storeId?: number
}

export type ModifyRoomTypeDTO = {
  //面积
  area?: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:不包含 1:包含
  breakfastFlag?: number,

  //早餐单价
  breakfastPrice: number,

  //押金
  cashPledge: number,

  //是否有押金 0:否 1:是
  cashPledgeFlag?: number,

  //可入住人数
  checkInPeople?: number,

  //房型介绍
  description?: string,

  //营地设备
  facilityId: Array<number>,

  //房型Id
  roomTypeId?: number,

  //房型图片
  roomTypeImg?: Array<string>,

  //房型名称
  roomTypeName?: string,

  //房型门市价
  salePrice?: number
}

export type PageVORoomTypeVO = {
  //数据
  content: Array<RoomTypeVO>,

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

export type ResponseVOListRoomTypeListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomTypeListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListRoomTypeSelectVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomTypeSelectVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVORoomTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVORoomTypeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVORoomTypeDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: RoomTypeDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomFacilityVO = {
  //设备id
  facilityId: number,

  //服务名称
  facilityName: string,

  //服务类型Id
  facilityTypeId: number,

  //图片路径
  imageUrl: string
}

export type RoomFeatureVO = {
  //服务Id
  serveId: number,

  //服务名称
  serveName: string
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

export type RoomTypeDetailVO = {
  //面积
  area: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:不包含 1:包含
  breakfastFlag: number,

  //早餐单价
  breakfastPrice: number,

  //押金
  cashPledge: number,

  //是否有押金 0:否 1:是
  cashPledgeFlag: number,

  //可入住人数
  checkInPeople: number,

  //房型介绍
  description: string,

  //营地设备
  facilityList: Array<RoomFacilityVO>,

  //房型Id
  roomTypeId: number,

  //房型图片
  roomTypeImg: Array<string>,

  //房型名称
  roomTypeName: string,

  //房型门市价
  salePrice: number
}

export type RoomTypeListVO = {
  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:否 1:是
  breakfastFlag: number,

  //早餐单价
  breakfastPrice: number,

  //押金
  cashPledge: number,

  //是否有押金 0:否 1:是
  cashPledgeFlag: number,

  //当前日期
  currentDate: string,

  //星期几
  currentWeek: string,

  //房间数量
  roomCount: number,

  //房间号集合
  roomNoVOList: Array<RoomNoVO>,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //房型门市价
  salePrice: number
}

export type RoomTypeSelectVO = {
  //押金
  cashPledge: number,

  //是否有押金
  cashPledgeFlag: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type RoomTypeStatusDTO = {
  //房型id
  roomTypeId?: number,

  //状态 0:停用 1:启用
  status?: number
}

export type RoomTypeVO = {
  //押金
  cashPledge: number,

  //是否有押金 0:否 1:是
  cashPledgeFlag: number,

  //房间数量
  roomCount: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //房型门市价
  salePrice: number,

  //状态 0:停用 1:启用
  status: number
}

export type BaseResponse = {}
