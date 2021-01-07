/**
 *
 *查询推荐标签列表
 *
 **/
const queryListUsingGET_7 = (): Promise<ResponseVOListRecommendLabelVO> => {
  return new Promise(() => {})
}

export default {
  queryListUsingGET_7
}

export type RecommendLabelVO = {
  //推荐标签ID
  recommendLabelId: number,

  //推荐标签名称
  recommendLabelName: string
}

export type ResponseVOListRecommendLabelVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RecommendLabelVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
