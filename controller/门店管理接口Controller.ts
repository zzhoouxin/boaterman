/**
 *
 *添加门店
 *
 **/
const addUsingPOST_19 = (params: StoreNewInsertDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *创建营地图片分类区域
 *
 **/
const createCampImageUsingPOST = (
  params: CampImageInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除营地区域
 *
 **/
const deleteCampImageUsingDELETE = (params: {
  campId?: number,
  storeId: number
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑图片分类区域
 *
 **/
const editCampImageUsingPOST = (
  params: CampImageUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询是否有门店存在
 *
 **/
const queryCountUsingGET = (): Promise<ResponseVOint> => {
  return new Promise(() => {})
}

/**
 *
 *查看门店信息
 *
 **/
const queryDetailUsingGET_18 = (
  storeId: number
): Promise<ResponseVOStoreViewVO> => {
  return new Promise(() => {})
}

/**
 *
 *展示(查询)门店列表
 *
 **/
const queryListUsingGET_27 = (
  storeName?: string
): Promise<ResponseVOListStoreVO> => {
  return new Promise(() => {})
}

/**
 *
 *展示(查询)门店列表
 *
 **/
const queryPageUsingGET_11 = (params: {
  manager?: string,
  managerMobile?: string,
  page?: number,
  size?: number,
  status?: number,
  storeName?: string
}): Promise<ResponseVOPageVOStoreViewVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询营地图片分类区域信息
 *
 **/
const selectCampImageUsingGET = (params: {
  campIdLit: Array<number>,
  storeId: number
}): Promise<ResponseVOListCampImageVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑门店信息
 *
 **/
const updateUsingPOST_9 = (params: StoreNewUpdateDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑门店信息--补充小程序显示
 *
 **/
const updateFrontUsingPOST = (
  params: StoreFrontUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *启用禁用门店
 *
 **/
const uptownUsingPOST_1 = (params: StoreUptownDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_19,

  createCampImageUsingPOST,

  deleteCampImageUsingDELETE,

  editCampImageUsingPOST,

  queryCountUsingGET,

  queryDetailUsingGET_18,

  queryListUsingGET_27,

  queryPageUsingGET_11,

  selectCampImageUsingGET,

  updateUsingPOST_9,

  updateFrontUsingPOST,

  uptownUsingPOST_1
}

export type CampImageInsertDTO = {
  //营地相片区域名称
  campName?: string,

  //门店id
  storeId?: number
}

export type CampImageModifyDTO = {
  //营地相片区域id
  campId: number,

  //图片地址
  imageUrl: Array<string>
}

export type CampImageUpdateDTO = {
  //营地相片区域ID
  campId?: number,

  //营地相片区域名称
  campName?: string,

  //门店id
  storeId?: number
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

export type PageVOStoreViewVO = {
  //数据
  content: Array<StoreViewVO>,

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

export type ResponseVOListCampImageVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CampImageVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListStoreVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<StoreVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOStoreViewVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOStoreViewVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOStoreViewVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: StoreViewVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOint = {
  //接口错误码
  code: number,

  //接口返回数据
  data: number,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StoreFrontUpdateDTO = {
  //营地相册图片
  campImageLists?: Array<CampImageModifyDTO>,

  //介绍
  introduction?: string,

  //营地设施
  storeFacilityList: Array<number>,

  //店铺id
  storeId?: number
}

export type StoreNewInsertDTO = {
  //城市名称
  city?: string,

  //详细地址
  detailArea?: string,

  //地区名称
  district?: string,

  //纬度
  latitude: string,

  //商户logo
  logo: string,

  //经度
  longitude: string,

  //店长姓名
  manager?: string,

  //店长手机号
  managerMobile?: string,

  //门店电话
  phone: string,

  //省份名称
  province?: string,

  //店铺名称
  storeName?: string
}

export type StoreNewUpdateDTO = {
  //营地相册图片
  campImageLists: Array<CampImageModifyDTO>,

  //城市名称
  city?: string,

  //详细地址
  detailArea?: string,

  //地区名称
  district?: string,

  //介绍
  introduction: string,

  //纬度
  latitude: string,

  //商户logo
  logo: string,

  //经度
  longitude: string,

  //店长姓名
  manager?: string,

  //店长手机号
  managerMobile?: string,

  //门店电话
  phone: string,

  //省份名称
  province?: string,

  //推荐标签
  recommendLabels: Array<string>,

  //简介
  remark: string,

  //营地设施
  storeFacilityList: Array<number>,

  //店铺id
  storeId?: number,

  //店铺名称
  storeName?: string
}

export type StoreUptownDTO = {
  //0启用 1:禁用
  status?: number,

  //店铺ID
  storeId?: number
}

export type StoreVO = {
  //门店logo
  logo: string,

  //状态：0正常、1停用
  status: number,

  //门店id
  storeId: number,

  //门店名称
  storeName: string
}

export type StoreViewVO = {
  //营地区域相册
  campImageLists: Array<CampImageVO>,

  //城市编码
  city: string,

  //城市名称
  cityName: string,

  //所属集团ID
  companyId: number,

  //创建人id
  createId: number,

  //创建时间
  createTime: string,

  //是否删除  0否 1是
  deleteFlag: number,

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

  //商户logo
  logo: string,

  //店长姓名
  manager: string,

  //店长手机号
  managerMobile: string,

  //门店电话
  phone: string,

  //省份编码
  province: string,

  //省份名称
  provinceName: string,

  //推荐标签
  recommendLabels: Array<string>,

  //简介
  remark: string,

  //状态（0正常、1停用）
  status: number,

  //店铺id
  storeId: number,

  //店铺名称
  storeName: string,

  //更新人Id
  updateId: number,

  //更新时间
  updateTime: string
}

export type BaseResponse = {}
