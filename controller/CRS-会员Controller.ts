/**
 *
 *会员列表
 *
 **/
const crsQueryPageUsingGET = (params: {
  endTime?: string,
  page?: number,
  searchText?: string,
  size?: number,
  startTime?: string
}): Promise<ResponseVOPageVOCrsMemberVO> => {
  return new Promise(() => {})
}

export default {
  crsQueryPageUsingGET
}

export type CrsMemberVO = {
  //创建时间
  createTime: string,

  //用户ID
  memberId: string,

  //手机号
  mobile: string,

  //客户姓名
  name: string,

  //昵称
  nickname: string,

  //用户openId
  openId: string,

  //注册来源
  registerSource: number
}

export type PageVOCrsMemberVO = {
  //数据
  content: Array<CrsMemberVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type ResponseVOPageVOCrsMemberVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCrsMemberVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
