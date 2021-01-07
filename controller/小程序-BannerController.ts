/**
 *
 *查询小程序精选文章列表(更多精选推荐)
 *
 **/
const queryActivityContentListUsingGET = (): Promise<ResponseVOListActivityContentVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询小程序Banner列表(首页)
 *
 **/
const queryListUsingGET_10 = (): Promise<ResponseVOBannerVO> => {
  return new Promise(() => {})
}

export default {
  queryActivityContentListUsingGET,

  queryListUsingGET_10
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

export type ActivityContentVO = {
  //精选文章展示：0不展示 1展示
  articleFlag: number,

  //内容ID
  contentId: number,

  //内容图片
  contentImg: string,

  //内容简介
  contentIntro: string,

  //内容标题
  contentTitle: string,

  //首页甄选展示: 0不展示 1展示
  homeFlag: number,

  //跳转URL
  jumpUrl: string,

  //推荐标签id
  recommendLabelId: number,

  //推荐标签名
  recommendLabelName: string,

  //排序
  sort: number,

  //状态：0不展示  1展示
  status: number
}

export type BannerVO = {
  //活动Banner
  activityBannerList: Array<ActivityBannerVO>,

  //内容
  activityContentList: Array<ActivityContentVO>,

  //首页Banner
  homeBannerList: Array<HomeBannerVO>,

  //营地ID
  storeId: number,

  //营地名称
  storeName: string
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

export type ResponseVOBannerVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: BannerVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListActivityContentVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<ActivityContentVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
