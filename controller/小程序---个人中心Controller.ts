/**
 *
 *个人中心--入住人
 *
 **/
const queryCheckInPersonUsingGET = (): Promise<ResponseVOListCheckInPersonVO> => {
  return new Promise(() => {})
}

/**
 *
 *个人中心--会员升级政策条件
 *
 **/
const queryLevelConditionUsingGET = (): Promise<ResponseVOListMemberStrategyConditionVO> => {
  return new Promise(() => {})
}

/**
 *
 *个人中心--会员等级列表(对应权益列表)
 *
 **/
const queryLevelListUsingGET = (): Promise<ResponseVOListFrontMemberLevelVO> => {
  return new Promise(() => {})
}

/**
 *
 *当前用户个人中心信息
 *
 **/
const queryMemberDetailUsingGET = (): Promise<ResponseVOMemberPersonInfoVO> => {
  return new Promise(() => {})
}

/**
 *
 *用户签到
 *
 **/
const signInUsingPOST = (params: MemberSignDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  queryCheckInPersonUsingGET,

  queryLevelConditionUsingGET,

  queryLevelListUsingGET,

  queryMemberDetailUsingGET,

  signInUsingPOST
}

export type CheckInPersonVO = {
  //车牌号-CRS
  carNo: string,

  //证件号码-CRS
  idNo: string,

  //证件类型-CRS
  idType: number,

  //入住人联系方式-CRS
  mobile: string,

  //入住人姓名
  name: string
}

export type FrontMemberLevelVO = {
  //当前等级 :  0:是 1:否
  currentType: number,

  //会员有效结束日期
  endDate: string,

  //会员是否永久0否，1是  除了初级会员是1，其他会员等级都是0，包括买的权益卡
  foreverFlag: number,

  //幸福值占比
  happyPercentage: string,

  //会员级别 升序
  level: number,

  //会员等级icon
  levelIcon: string,

  //会员等级Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //背景图片
  logo: string,

  //会员等级拥有权益
  memberLevelRightsList: Array<MemberOwnRightsInfoVO>,

  //待解锁权益权益
  memberLevelRightsUnlockList: Array<MemberOwnRightsInfoVO>,

  //会员有效开始日期
  startDate: string,

  //会员升级条件
  upgradeConditions: string
}

export type MemberOwnRightsInfoVO = {
  //图标
  categoryIcon: string,

  //权益类别id
  categoryId: number,

  //权益类别名称
  categoryName: string,

  //数据值
  value: string
}

export type MemberPersonInfoVO = {
  //会员有效结束日期
  endDate: string,

  //会员是否永久0否，1是  除了初级会员是1，其他会员等级都是0，包括买的权益卡
  foreverFlag: number,

  //头像
  headImage: string,

  //等级
  level: number,

  //会员等级icon
  levelIcon: string,

  //等级Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //背景图片
  logo: string,

  //会员Id
  memberId: string,

  //会员现在拥有权益
  memberOwnRightsInfoList: Array<MemberOwnRightsInfoVO>,

  //待解锁权益权益
  memberRightsUnlockList: Array<MemberOwnRightsInfoVO>,

  //昵称
  nickname: string,

  //积分值
  points: number,

  //签到状态：1:签到 2:已签到(为空表示不展示签到)
  signInType: number,

  //会员有效开始日期
  startDate: string,

  //会员升级条件
  upgradeConditions: string
}

export type MemberSignDTO = {
  //会员id
  memberId?: string
}

export type MemberStrategyConditionVO = {
  //当前会员级别
  level: number,

  //当前会员级别Id
  levelId: string,

  //当前会员级别名称
  levelName: string,

  //保级条件
  relegationCondition: StrategyConditionVO,

  //升级条件
  upgradeCondition: StrategyConditionVO
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

export type ResponseVOListCheckInPersonVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CheckInPersonVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListFrontMemberLevelVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<FrontMemberLevelVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListMemberStrategyConditionVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberStrategyConditionVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberPersonInfoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberPersonInfoVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StrategyConditionVO = {
  //条件类型 0当前会员入住间夜 1预定间夜 2当前幸福值 3累计积分 4当前可用积分 5扣除幸福值 6扣除积分  7降级扣幸福值 8降级扣除积分
  conditionType: number,

  //条件值
  conditionValue: number,

  //条件开启状态 0不开启 1开启
  status: number
}

export type BaseResponse = {}
