/**
 *
 *修改房型
 *
 **/
const modifyUsingPOST_5 = (
  params: CrsModifyRoomTypeDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询房型管理列表
 *
 **/
const queryListUsingGET_8 = (params: {
  page?: number,
  size?: number,
  storeName?: string
}): Promise<ResponseVOPageVOCrsRoomTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *房型列表
 *
 **/
const queryRoomTypePageUsingGET = (params: {
  page?: number,
  roomTypeName?: string,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVOCrsRoomTypeListVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询门店列表（入住服务）
 *
 **/
const querySelectUsingGET = (
  params?: Array<number>
): Promise<ResponseVOListStoreRoomTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *渠道展示与否
 *
 **/
const updateChannelShowUsingPOST = (
  params: RoomTypeChannelShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  modifyUsingPOST_5,

  queryListUsingGET_8,

  queryRoomTypePageUsingGET,

  querySelectUsingGET,

  updateChannelShowUsingPOST
}

export type CrsModifyRoomTypeDTO = {
  //营地设备
  facilityId: Array<number>,

  //房型Id
  roomTypeId?: number,

  //房型图片
  roomTypeImg?: Array<string>
}

export type CrsRoomTypeListVO = {
  //渠道展示：0否 1是
  channelShow: number,

  //房间数量
  roomCount: number,

  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //房型门市价
  salePrice: number
}

export type CrsRoomTypeVO = {
  //房型总数
  countRoomType: number,

  //房型下架数量
  countRoomTypeDown: number,

  //房型上架数量
  countRoomTypeUp: number,

  //门店id
  storeId: number,

  //门店名称
  storeName: string
}

export type PageVOCrsRoomTypeListVO = {
  //数据
  content: Array<CrsRoomTypeListVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVOCrsRoomTypeVO = {
  //数据
  content: Array<CrsRoomTypeVO>,

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

export type ResponseVOListStoreRoomTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<StoreRoomTypeVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCrsRoomTypeListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCrsRoomTypeListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCrsRoomTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCrsRoomTypeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomTypeBaseVO = {
  //房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string
}

export type RoomTypeChannelShowDTO = {
  //渠道展示：0否 1是
  channelShow?: number,

  //房型id
  roomTypeId?: number
}

export type StoreRoomTypeVO = {
  //
  roomTypeList: Array<RoomTypeBaseVO>,

  //营地Id
  storeId: number,

  //营地名称
  storeName: string
}

export type BaseResponse = {}
