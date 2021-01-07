/**
 *
 *查看门店信息
 *
 **/
const queryDetailUsingGET_9 = (
  storeId: number
): Promise<ResponseVOCrsStoreViewVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询门店列表
 *
 **/
const queryListUsingGET_9 = (params: {
  channelShow?: number,
  page?: number,
  size?: number,
  status?: number,
  storeName?: string
}): Promise<ResponseVOPageVOCrsStoreVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询门店（营地）列表---入住服务
 *
 **/
const querySelectUsingGET_1 = (): Promise<ResponseVOListCrsStoreSelectVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑门店信息
 *
 **/
const updateUsingPOST_4 = (
  params: CrsStoreNewUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改门店渠道展示
 *
 **/
const updateChannelShowUsingPOST_1 = (
  params: CrsStoreChannelShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改门店排序
 *
 **/
const updateStoreSortUsingPOST = (
  params: Array<CrsUpdateStoreSortDTO>
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  queryDetailUsingGET_9,

  queryListUsingGET_9,

  querySelectUsingGET_1,

  updateUsingPOST_4,

  updateChannelShowUsingPOST_1,

  updateStoreSortUsingPOST
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

export type CrsStoreChannelShowDTO = {
  //渠道展示：0否 1是
  channelShow?: number,

  //店铺ID
  storeId?: number
}

export type CrsStoreNewUpdateDTO = {
  //取消政策
  cancelPolicy?: string,

  //入住政策
  checkInPolicy?: string,

  //首推营地服务
  firstServers: Array<number>,

  //安全须知
  mustsOfSafety?: string,

  //营地运营名称
  operateName?: string,

  //标签
  recommendLabels?: Array<string>,

  //店铺id
  storeId?: number,

  //营地标签
  storeTag?: string
}

export type CrsStoreSelectVO = {
  //门店id
  storeId: number,

  //门店名称
  storeName: string
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

export type CrsStoreViewVO = {
  //营地区域相册
  campImageLists: Array<CampImageVO>,

  //取消政策
  cancelPolicy: string,

  //入住政策
  checkInPolicy: string,

  //城市编码
  city: string,

  //城市名称
  cityName: string,

  //所属集团ID
  companyId: number,

  //详细地址
  detailArea: string,

  //地区编码
  district: string,

  //地区名称
  districtName: string,

  //营地设施
  facilityLists: Array<FacilityVO>,

  //首推特色服务
  firstServers: Array<FacilityVO>,

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

  //安全须知
  mustsOfSafety: string,

  //营地运营名称
  operateName: string,

  //门店电话
  phone: string,

  //省份编码
  province: string,

  //省份名称
  provinceName: string,

  //营地推荐词
  recommendWords: Array<string>,

  //简介
  remark: string,

  //状态（0正常、1停用）
  status: number,

  //店铺id
  storeId: number,

  //门店标签
  storeLabel: Array<string>,

  //店铺名称
  storeName: string,

  //营地标签
  storeTag: string
}

export type CrsUpdateStoreSortDTO = {
  //营地排序
  sort?: number,

  //店铺id
  storeId?: number
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

export type PageVOCrsStoreVO = {
  //数据
  content: Array<CrsStoreVO>,

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

export type ResponseVOCrsStoreViewVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CrsStoreViewVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListCrsStoreSelectVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CrsStoreSelectVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCrsStoreVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCrsStoreVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
