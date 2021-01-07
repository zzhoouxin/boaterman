/**
 *
 *新增/修改积分策略
 *
 **/
const addUsingPOST_15 = (
  params: PointsStrategyConfigAddDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询积分策略规则
 *
 **/
const queryDetailUsingGET_15 = (): Promise<ResponseVOPointsStrategyConfigVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_15,

  queryDetailUsingGET_15
}

export type ActivityIncentive = {
  //
  activityCount: number,

  //
  activityType: number,

  //
  pointsValue: number
}

export type ConsumptionSubjectDTO = {
  //消费科目id
  consumptionTypeId: number,

  //消费科目名称
  consumptionTypeName: string,

  //父级id
  parentId: number
}

export type ConsumptionSubjectVO = {
  //消费科目id
  consumptionTypeId: number,

  //消费科目名称
  consumptionTypeName: string,

  //父级id
  parentId: number
}

export type PointsStrategyConfigAddDTO = {
  //活动类型：1:签到  2.连续签到 3.小游戏 4.问卷调查 5.分享 6评价
  activityIncentiveList: Array<ActivityIncentive>,

  //活动激励策略开关 0关闭 1打开
  activityIncentiveType: number,

  //积分累计基础：消费1元积几个积分
  basePointsValue: number,

  //已选科目
  checkedSubjectList: Array<ConsumptionSubjectDTO>,

  //消费激励策略状态 0关闭 1打开
  consumeType: number,

  //积分抵扣开关 0关闭 1打开
  pointsDeductType: number,

  //积分抵扣金额：多少积分抵扣一元
  pointsDeductValue: number,

  //积分规则说明
  ruleExplain: string,

  //积分累计项类型 0所有消费科目 1指定消费科目
  subjectType: number,

  //积分有效期天数
  validityDays: number,

  //积分有效期类型 0永久有效 1自定义天数
  validityType: number
}

export type PointsStrategyConfigVO = {
  //活动类型：1:签到  2.连续签到 3.小游戏 4.问卷调查 5.分享 6评价
  activityIncentiveList: Array<ActivityIncentive>,

  //活动激励策略开关 0关闭 1打开
  activityIncentiveType: number,

  //积分累计基础：消费1元积几个积分
  basePointsValue: number,

  //已选科目
  checkedSubjectList: Array<ConsumptionSubjectVO>,

  //所属集团ID
  companyId: number,

  //消费激励策略状态 0关闭 1打开
  consumeType: number,

  //积分抵扣开关 0关闭 1打开
  pointsDeductType: number,

  //积分抵扣金额：多少积分抵扣一元
  pointsDeductValue: number,

  //Id
  pointsStrategyId: string,

  //积分规则说明
  ruleExplain: string,

  //积分累计项类型 0所有消费科目 1指定消费科目
  subjectType: number,

  //积分有效期天数
  validityDays: number,

  //积分有效期类型 0永久有效 1自定义天数
  validityType: number
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

export type ResponseVOPointsStrategyConfigVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PointsStrategyConfigVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
