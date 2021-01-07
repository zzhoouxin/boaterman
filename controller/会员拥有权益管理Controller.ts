/**
 *
 *会员所属等级/拥有的权益
 *
 **/
const memberOwnLevelUsingGET = (
  memberId: string
): Promise<ResponseVOMemberOwnLevelVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员所属等级/拥有的权益--早餐、康乐、水果下拉框
 *
 **/
const querySelectUsingGET_2 = (
  memberId: string
): Promise<ResponseVOListMemberOwnRightSelectVO> => {
  return new Promise(() => {})
}

export default {
  memberOwnLevelUsingGET,

  querySelectUsingGET_2
}

export type MemberOwnLevelVO = {
  //会员有效结束日期
  endDate: string,

  //会员是否永久0否，1是
  foreverFlag: number,

  //会员等级
  level: number,

  //会员等级Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //会员Id
  memberId: string,

  //会员拥有的权益
  memberOwnRightsVOList: Array<MemberOwnRightsVO>,

  //会员有效开始日期
  startDate: string
}

export type MemberOwnRightSelectVO = {
  //会员拥有的权益id
  memberOwnRightId: string,

  //权益名称
  rightName: string
}

export type MemberOwnRightsVO = {
  //权益类别id
  categoryId: number,

  //权益类别名称
  categoryName: string,

  //是否享用 0否，1是
  enjoyFlag: number,

  //权益内容
  rightContent: string,

  //优惠券权益内容
  rightCoupon: RightCoupon,

  //权益说明
  rightExplain: string,

  //康乐权益内容
  rightHealth: RightHealth,

  //权益id
  rightId: string,

  //权益名称
  rightName: string
}

export type ResponseVOListMemberOwnRightSelectVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberOwnRightSelectVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberOwnLevelVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberOwnLevelVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RightCoupon = {
  //
  couponConditionPrice: number,

  //
  couponConditionType: number,

  //
  couponCount: number,

  //
  couponId: string,

  //
  couponType: number,

  //
  effectType: number,

  //
  effectValue: number,

  //
  fullReduceDiscount: number
}

export type RightHealth = {
  //
  content: string,

  //
  timeLong: number
}

export type BaseResponse = {}
