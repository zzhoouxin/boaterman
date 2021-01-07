/**
 *
 *新增会员入住服务信息
 *
 **/
const addUsingPOST_7 = (
  params: MemberCheckInServeAddDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除会员入住服务信息
 *
 **/
const deleteUsingDELETE_5 = (memberServeId?: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看会员入住服务信息
 *
 **/
const queryDetailUsingGET_12 = (
  memberServeId?: number
): Promise<ResponseVOMemberCheckInServeVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询会员入住服务展示列表
 *
 **/
const queryListUsingGET_14 = (): Promise<ResponseVOListMemberCheckInServeVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询会员入住服务列表
 *
 **/
const queryPageUsingGET_4 = (params: {
  memberServeName?: string,
  page?: number,
  showFlag?: number,
  size?: number
}): Promise<ResponseVOPageVOMemberCheckInServeVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑会员入住服务信息
 *
 **/
const updateUsingPOST_5 = (
  params: MemberCheckInServeUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *是否展示操作
 *
 **/
const updateShowUsingPOST_2 = (
  params: MemberCheckInServeShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_7,

  deleteUsingDELETE_5,

  queryDetailUsingGET_12,

  queryListUsingGET_14,

  queryPageUsingGET_4,

  updateUsingPOST_5,

  updateShowUsingPOST_2
}

export type MemberCheckInServeAddDTO = {
  //入住服务内容
  memberServeContent: string,

  //入住服务名称
  memberServeName: string,

  //是否展示：0不展示  1展示
  showFlag: number
}

export type MemberCheckInServeShowDTO = {
  //会员入住服务id
  memberServeId: number,

  //是否展示：0不展示  1展示
  showFlag: number
}

export type MemberCheckInServeUpdateDTO = {
  //入住服务内容
  memberServeContent: string,

  //入住服务id
  memberServeId: number,

  //入住服务名称
  memberServeName: string,

  //是否展示：0不展示  1展示
  showFlag: number
}

export type MemberCheckInServeVO = {
  //服务内容
  memberServeContent: string,

  //服务ID
  memberServeId: number,

  //服务名称
  memberServeName: string,

  //是否展示  0:不展示 1:展示
  showFlag: number
}

export type PageVOMemberCheckInServeVO = {
  //数据
  content: Array<MemberCheckInServeVO>,

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

export type ResponseVOListMemberCheckInServeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberCheckInServeVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberCheckInServeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberCheckInServeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOMemberCheckInServeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOMemberCheckInServeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
