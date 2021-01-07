/**
 *
 *新增内容管理信息
 *
 **/
const addUsingPOST_3 = (params: ActivityContentAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除内容管理信息
 *
 **/
const deleteUsingDELETE_2 = (contentId?: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看内容管理信息
 *
 **/
const queryDetailUsingGET_6 = (
  contentId?: number
): Promise<ResponseVOActivityContentVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询内容管理列表
 *
 **/
const queryListUsingGET_5 = (params: {
  articleFlag?: number,
  contentTitle?: string,
  homeFlag?: number,
  page?: number,
  recommendLabelId?: number,
  size?: number,
  status?: number
}): Promise<ResponseVOPageVOActivityContentVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑内容管理信息
 *
 **/
const updateUsingPOST_1 = (
  params: ActivityContentUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *内容管理信息是否精选文章
 *
 **/
const updateArticleUsingPOST = (
  params: ActivityContentArticleDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *内容管理信息是否首页臻选
 *
 **/
const updateHomeUsingPOST = (
  params: ActivityContentHomeDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *内容管理信息是否展示
 *
 **/
const updateShowUsingPOST = (
  params: ActivityContentShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_3,

  deleteUsingDELETE_2,

  queryDetailUsingGET_6,

  queryListUsingGET_5,

  updateUsingPOST_1,

  updateArticleUsingPOST,

  updateHomeUsingPOST,

  updateShowUsingPOST
}

export type ActivityContentAddDTO = {
  //内容图片
  contentImg: string,

  //内容简介
  contentIntro: string,

  //内容标题
  contentTitle: string,

  //跳转URL
  jumpUrl: string,

  //推荐标签id
  recommendLabelId: number,

  //状态：0不展示  1展示
  status: number
}

export type ActivityContentArticleDTO = {
  //精选文章：0否 1是  默认 0否
  articleFlag: number,

  //内容ID
  contentId: number
}

export type ActivityContentHomeDTO = {
  //内容ID
  contentId: number,

  //首页臻选：0否 1是   默认 0否
  homeFlag: number,

  //排序
  sort: number
}

export type ActivityContentShowDTO = {
  //内容ID
  contentId: number,

  //状态：0不展示  1展示
  status: number
}

export type ActivityContentUpdateDTO = {
  //内容ID
  contentId: number,

  //内容图片
  contentImg: string,

  //内容简介
  contentIntro: string,

  //内容标题
  contentTitle: string,

  //跳转URL
  jumpUrl: string,

  //推荐标签Id
  recommendLabelId: number,

  //状态：0不展示  1展示
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

export type PageVOActivityContentVO = {
  //数据
  content: Array<ActivityContentVO>,

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

export type ResponseVOActivityContentVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: ActivityContentVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOActivityContentVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOActivityContentVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
