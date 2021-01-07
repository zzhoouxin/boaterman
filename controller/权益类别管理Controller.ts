/**
 *
 *查询可用权益类别列表
 *
 **/
const queryAvailableListUsingGET = (): Promise<ResponseVOListRightCategoryVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询所有权益类别列表
 *
 **/
const queryListUsingGET_22 = (params: {
  rightName?: string,
  status?: number
}): Promise<ResponseVORightCategoryInfoVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改权益类别状态
 *
 **/
const updateStatusUsingPOST_3 = (
  params: UpdateRightCategoryStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  queryAvailableListUsingGET,

  queryListUsingGET_22,

  updateStatusUsingPOST_3
}

export type MemberRightVO = {
  //所属权益类别
  categoryId: number,

  //权益Id
  rightId: string,

  //权益名称
  rightName: string,

  //权益启用停用 0停用 1启用（默认）
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

export type ResponseVOListRightCategoryVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RightCategoryVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVORightCategoryInfoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: RightCategoryInfoVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RightCategoryInfoVO = {
  //有效权益个数
  effectiveMemberRights: number,

  //无效权益个数
  invalidMemberRights: number,

  //权益类型列表
  rightCategoryVOList: Array<RightCategoryVO>,

  //权益总个数
  totalMemberRights: number
}

export type RightCategoryVO = {
  //权益类别Icon关闭
  categoryIconClose: string,

  //权益类别Icon打开
  categoryIconOpen: string,

  //权益类别Id
  categoryId: number,

  //权益类别名称
  categoryName: string,

  //拥有的权益列表
  memberRightVOList: Array<MemberRightVO>,

  //权益类别状态 0停用 1启用
  status: number
}

export type UpdateRightCategoryStatusDTO = {
  //权益类别id
  categoryId?: number,

  //权益类别状态 0停用 1启用
  status?: number
}

export type BaseResponse = {}
