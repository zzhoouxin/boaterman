/**
 *
 *新增入住服务信息
 *
 **/
const addUsingPOST_4 = (params: CheckInServeAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除入住服务信息
 *
 **/
const deleteUsingDELETE_3 = (serveId?: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看入住服务信息
 *
 **/
const queryDetailUsingGET_7 = (params: {
  serveId?: number,
  serveType?: number
}): Promise<ResponseVOCheckInServeDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询入住服务列表
 *
 **/
const queryPageUsingGET_1 = (params: {
  page?: number,
  serveName?: string,
  serveType?: number,
  showFlag?: number,
  size?: number,
  storeIdList?: Array<number>
}): Promise<ResponseVOPageVOCheckInServeVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑入住服务信息
 *
 **/
const updateUsingPOST_2 = (
  params: CheckInServeUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *是否选择操作
 *
 **/
const updateSelectUsingPOST = (
  params: CheckInServeSelectDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *是否展示操作
 *
 **/
const updateShowUsingPOST_1 = (
  params: CheckInServeShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_4,

  deleteUsingDELETE_3,

  queryDetailUsingGET_7,

  queryPageUsingGET_1,

  updateUsingPOST_2,

  updateSelectUsingPOST,

  updateShowUsingPOST_1
}

export type CheckInServeAddDTO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //是否应用所有房型 0:否 1:是
  roomTypeFlag: number,

  //房型
  roomTypeIdList: Array<number>,

  //服务内容
  serveContent: string,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  //服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number,

  //是否展示  0:不展示 1:展示
  showFlag: number,

  //是否应用所有门店 0:否 1:是
  storeFlag: number,

  //营地id
  storeIdList: Array<number>
}

export type CheckInServeDetailVO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //是否应用所有房型 0:否 1:是
  roomTypeFlag: number,

  //服务内容
  serveContent: string,

  //服务ID
  serveId: number,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  //服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number,

  //是否展示  0:不展示 1:展示
  showFlag: number,

  //是否应用所有门店 0:否 1:是
  storeFlag: number,

  //门店 0:否 1:是
  storeList: Array<CrsStoreVO>,

  //
  storeRoomTypeList: Array<StoreRoomTypeVO>
}

export type CheckInServeSelectDTO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //服务id
  serveId: number
}

export type CheckInServeShowDTO = {
  //服务id
  serveId: number,

  //是否展示： 0:不展示 1:展示
  showFlag: number
}

export type CheckInServeUpdateDTO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //是否应用所有房型 0:否 1:是
  roomTypeFlag: number,

  //房型
  roomTypeIdList: Array<number>,

  //服务内容
  serveContent: string,

  //服务id
  serveId: number,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  //服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number,

  //是否展示  0:不展示 1:展示
  showFlag: number,

  //是否应用所有门店 0:否 1:是
  storeFlag: number,

  //营地id
  storeIdList: Array<number>
}

export type CheckInServeVO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //是否应用所有房型 0:否 1:是
  roomTypeFlag: number,

  //房型
  roomTypeList: Array<RoomTypeBaseVO>,

  //服务内容
  serveContent: string,

  //服务ID
  serveId: number,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  //服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number,

  //是否展示  0:不展示 1:展示
  showFlag: number,

  //是否应用所有门店 0:否 1:是
  storeFlag: number,

  //门店 0:否 1:是
  storeList: Array<CrsStoreVO>
}

export type CrsStoreVO = {
  //渠道展示：0否 1是
  channelShow: number,

  //房型总数
  countRoomType: number,

  //创建日期
  createTime: string,

  //排序
  sort: number,

  //营地状态：0营业 1歇业
  status: number,

  //门店id
  storeId: number,

  //门店名称
  storeName: string
}

export type PageVOCheckInServeVO = {
  //数据
  content: Array<CheckInServeVO>,

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

export type ResponseVOCheckInServeDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CheckInServeDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCheckInServeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCheckInServeVO,

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

export type StoreRoomTypeVO = {
  //
  roomTypeList: Array<RoomTypeBaseVO>,

  //营地Id
  storeId: number,

  //营地名称
  storeName: string
}

export type BaseResponse = {}
