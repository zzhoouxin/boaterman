/**
 *
 *新增首页Banner信息
 *
 **/
const addUsingPOST_5 = (params: HomeBannerAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除首页Banner信息
 *
 **/
const deleteUsingDELETE_4 = (homeBannerId?: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看首页Banner信息
 *
 **/
const queryDetailUsingGET_8 = (
  homeBannerId?: number
): Promise<ResponseVOHomeBannerVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询首页Banner列表
 *
 **/
const queryListUsingGET_6 = (): Promise<ResponseVOListHomeBannerVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询首页Banner列表数量
 *
 **/
const queryListCountUsingGET_1 = (): Promise<ResponseVOHomeBannerCountVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑首页Banner信息
 *
 **/
const updateUsingPOST_3 = (
  params: HomeBannerUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_5,

  deleteUsingDELETE_4,

  queryDetailUsingGET_8,

  queryListUsingGET_6,

  queryListCountUsingGET_1,

  updateUsingPOST_3
}

export type HomeBannerAddDTO = {
  //Banner图片
  homeBannerImg: string,

  //Banner标题
  homeBannerTitle: string,

  //跳转URL
  jumpUrl: string,

  //排序
  sort: number,

  //状态: 0下架 1:上架
  status: number
}

export type HomeBannerCountVO = {
  //数量
  count: number
}

export type HomeBannerUpdateDTO = {
  //首页BannerID
  homeBannerId: number,

  //banner图片
  homeBannerImg: string,

  //Banner标题
  homeBannerTitle: string,

  //跳转URL
  jumpUrl: string,

  //排序
  sort: number,

  //状态: 0下架 1:上架
  status: number
}

export type HomeBannerVO = {
  //首页BannerID
  homeBannerId: number,

  //banner图片
  homeBannerImg: string,

  //Banner标题
  homeBannerTitle: string,

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

export type ResponseVOHomeBannerCountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: HomeBannerCountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOHomeBannerVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: HomeBannerVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListHomeBannerVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<HomeBannerVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
