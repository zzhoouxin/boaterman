/**
 *
 *新增会员使用权益并记录
 *
 **/
const addUsingPOST_10 = (
  params: MemberRightRecordAddDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员使用权益记录列表
 *
 **/
const queryListUsingGET_18 = (
  memberId: string
): Promise<ResponseVOListMemberRightRecordVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_10,

  queryListUsingGET_18
}

export type MemberRightRecordAddDTO = {
  //权益类别id不能为空
  memberOwnRightId?: string,

  //备注
  remark: string
}

export type MemberRightRecordVO = {
  //创建时间
  createTime: string,

  //备注
  remark: string,

  //记录内容
  rightContent: string,

  //权益名称
  rightName: string
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

export type ResponseVOListMemberRightRecordVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberRightRecordVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
