/**
 *
 *新增用户领取优惠信息
 *
 **/
const addUsingPOST_6 = (params: MemberCouponAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询用户可领取的优惠劵--领劵中心
 *
 **/
const queryListUsingGET_11 = (): Promise<ResponseVOListFrontCouponListVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询用户领取优惠列表
 *
 **/
const queryListByMemberUsingGET = (): Promise<ResponseVOFrontMemberCouponVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_6,

  queryListUsingGET_11,

  queryListByMemberUsingGET
}

export type FrontCouponListVO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵ID
  couponId: string,

  //优惠劵名称
  couponName: string,

  //优惠劵类型：1:满减劵，2:折扣劵，3:免单劵
  couponType: number,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //生效时间
  effectValue: string,

  //满减劵金额/折扣劵折扣--优惠劵内容
  fullReduceDiscount: number,

  //领取结束时间
  receiveEndDate: string,

  //领取开始时间
  receiveStartDate: string,

  //优惠劵领取时间类型：1.无限制  2.自定义
  receiveType: number,

  //规则说明
  ruleDescription: string,

  //用户是否能领取：0.可以领取 1.无法领取
  showFlag: number
}

export type FrontMemberCouponListVO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵名称
  couponName: string,

  //用户领取优惠劵编码
  couponNo: string,

  //优惠劵类型：1:满减劵，2:折扣劵，3:免单劵
  couponType: number,

  //生效结束时间
  effectEndDate: string,

  //生效开始时间
  effectStartDate: string,

  //生效类型：1.无限制 2.生效时间
  effectType: number,

  //满减劵金额/折扣劵折扣
  fullReduceDiscount: number,

  //规则说明
  ruleDescription: string,

  //状态类型：1.已领取 2.已使用 3.已过期
  status: number
}

export type FrontMemberCouponVO = {
  //用户不可使用优惠劵
  memberCouponNotUseList: Array<FrontMemberCouponListVO>,

  //用户可使用优惠劵
  memberCouponUseList: Array<FrontMemberCouponListVO>
}

export type MemberCouponAddDTO = {
  //优惠劵编码
  couponId: string
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

export type ResponseVOFrontMemberCouponVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: FrontMemberCouponVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListFrontCouponListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<FrontCouponListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
