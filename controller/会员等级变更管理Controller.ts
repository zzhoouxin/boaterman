/**
 *
 *新增会员等级变更记录
 *
 **/
const addUsingPOST_8 = (params: MemberLevelRecordDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员等级变更列表
 *
 **/
const queryListUsingGET_17 = (
  memberId?: string
): Promise<ResponseVOListMemberLevelRecordVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_8,

  queryListUsingGET_17
}

export type MemberLevelRecordDTO = {
  //会员级别Id
  levelId?: string,

  //原会员等级名称
  levelName?: string,

  //会员Id
  memberId?: string,

  //新会员级别Id
  newLevelId?: string,

  //新会员等级名称
  newLevelName?: string,

  //原因
  remark?: string
}

export type MemberLevelRecordVO = {
  //原会员等级名称
  levelName: string,

  //新会员等级名称
  newLevelName: string,

  //原因
  remark: string,

  //修改人
  updateAccount: string,

  //修改时间
  updateTime: string
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

export type ResponseVOListMemberLevelRecordVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberLevelRecordVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
