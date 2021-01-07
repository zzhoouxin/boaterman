/**
 *
 *新增活动Banner信息
 *
 **/
const addUsingPOST_2 = (params: ActivityBannerAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除活动Banner信息
 *
 **/
const deleteUsingDELETE_1 = (bannerId?: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看活动Banner信息
 *
 **/
const queryDetailUsingGET_5 = (
  bannerId?: number
): Promise<ResponseVOActivityBannerVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询活动Banner列表
 *
 **/
const queryListUsingGET_4 = (): Promise<ResponseVOListActivityBannerVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询活动Banner列表数量
 *
 **/
const queryListCountUsingGET = (): Promise<ResponseVOActivityBannerCountVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑活动Banner信息
 *
 **/
const updateUsingPOST = (
  params: ActivityBannerUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_2,

  deleteUsingDELETE_1,

  queryDetailUsingGET_5,

  queryListUsingGET_4,

  queryListCountUsingGET,

  updateUsingPOST
}

export type ActivityBannerAddDTO = {
  //Banner图片
  bannerImg: string,

  //Banner标题
  bannerTitle: string,

  //跳转URL
  jumpUrl: string,

  //排序
  sort: number,

  //状态: 0下架 1:上架
  status: number
}

export type ActivityBannerCountVO = {
  //数量
  count: number
}

export type ActivityBannerUpdateDTO = {
  //活动BannerID
  bannerId: number,

  //banner图片
  bannerImg: string,

  //Banner标题
  bannerTitle: string,

  //跳转URL
  jumpUrl: string,

  //排序
  sort: number,

  //状态: 0下架 1:上架
  status: number
}

export type ActivityBannerVO = {
  //活动BannerID
  bannerId: number,

  //banner图片
  bannerImg: string,

  //Banner标题
  bannerTitle: string,

  //跳转URL
  jumpUrl: string,

  //排序
  sort: number,

  //0下架 1:上架
  status: number
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

export type ResponseVOActivityBannerCountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: ActivityBannerCountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOActivityBannerVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: ActivityBannerVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListActivityBannerVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<ActivityBannerVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
