/**
 *
 *小程序--查询门店列表
 *
 **/
const queryListUsingGET_12 = (params: {
  endDate: string,
  sortFlag?: number,
  startDate: string,
  storeName?: string
}): Promise<ResponseVOListStoreRoomTypeListVO> => {
  return new Promise(() => {})
}

/**
 *
 *小程序--查询可预定房型
 *
 **/
const queryPreRoomTypeListUsingGET = (params: {
  endDate: string,
  startDate: string,
  storeId?: number
}): Promise<ResponseVOListRoomTypeDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *小程序--查询门店详情
 *
 **/
const queryStoreDetailUsingGET = (params: {
  endDate: string,
  startDate: string,
  storeId?: number
}): Promise<ResponseVOStoreDetailVO> => {
  return new Promise(() => {})
}

export default {
  queryListUsingGET_12,

  queryPreRoomTypeListUsingGET,

  queryStoreDetailUsingGET
}

export type CampImageVO = {
  //营地区域id
  campId: number,

  //营地区域名称
  campName: string,

  //是否删除，默认0:否 1：删除
  deleteFlag: number,

  //图片访问路径
  imageUrl: Array<string>,

  //门店id
  storeId: number
}

export type FacilityVO = {
  //设施Id
  facilityId: number,

  //设施名称
  facilityName: string,

  //设施类型
  facilityType: number,

  //设施类型名称
  facilityTypeName: string,

  //图片路径
  imageUrl: string
}

export type ResponseVOListRoomTypeDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomTypeDetailVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListStoreRoomTypeListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<StoreRoomTypeListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOStoreDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: StoreDetailVO,

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

export type StoreDetailVO = {
  //营地区域相册
  campImageLists: Array<CampImageVO>,

  //入住政策
  checkInPolicy: string,

  //城市编码
  city: string,

  //城市名称
  cityName: string,

  //详细地址
  detailArea: string,

  //地区编码
  district: string,

  //地区名称
  districtName: string,

  //营地设施
  facilityLists: Array<FacilityVO>,

  //介绍
  introduction: string,

  //纬度
  latitude: string,

  //商户logo
  logo: string,

  //经度
  longitude: string,

  //运营人
  manager: string,

  //房型最低价格
  minPrice: number,

  //安全须知
  mustsOfSafety: string,

  //门店电话
  phone: string,

  //省份编码
  province: string,

  //省份名称
  provinceName: string,

  //简介
  remark: string,

  //房型
  roomTypeList: Array<RoomTypeDetailVO>,

  //状态（0正常、1停用）
  status: number,

  //店铺id
  storeId: number,

  //门店标签
  storeLabel: Array<string>,

  //店铺名称
  storeName: string
}

export type StoreRoomTypeListVO = {
  //介绍
  introduction: string,

  //商户logo
  logo: string,

  //房型最低价格
  minPrice: number,

  //营地推荐词
  recommendWords: Array<string>,

  //简介
  remark: string,

  //房型
  roomTypeList: Array<RoomTypeDetailVO>,

  //营地Id
  storeId: number,

  //门店标签
  storeLabel: Array<string>,

  //营地名称
  storeName: string,

  //营地标签
  storeTag: string
}

export type BaseResponse = {}
