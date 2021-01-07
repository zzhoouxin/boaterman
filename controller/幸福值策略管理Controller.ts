/**
 *
 *查看幸福值策略
 *
 **/
const queryDetailUsingGET_11 = (): Promise<ResponseVOHappinessStrategyConfigVO> => {
  return new Promise(() => {})
}

/**
 *
 *更新策略内容
 *
 **/
const updateHappinessStrategyUsingPOST = (
  params: HappinessStrategyConfigDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  queryDetailUsingGET_11,

  updateHappinessStrategyUsingPOST
}

export type ActivityIncentive = {
  //
  activityCount: number,

  //
  activityType: number,

  //
  pointsValue: number
}

export type ConsumptionSubject = {
  //
  consumptionTypeId: number,

  //
  consumptionTypeName: string,

  //
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

export type HappinessStrategyConfigDTO = {
  //活动类型：1:签到  2.连续签到 3.小游戏 4.问卷调查 5.分享 6评价
  activityIncentiveList: Array<ActivityIncentive>,

  //活动激励策略开关 0关闭 1打开
  activityIncentiveType: number,

  //幸福值累计基础：消费1元积几个幸福值
  baseHappyValue: number,

  //已选科目
  checkedSubjectList: Array<ConsumptionSubject>,

  //消费激励策略状态 0关闭 1打开
  consumeType: number,

  //最高消费金额：超过这个金额，就按消费金额积幸福值
  maxMoney: number,

  //保底幸福值
  minHappyValue: number,

  //最低消费金额：没达到这个金额，有个保底幸福值
  minMoney: number,

  //幸福值配置说明
  ruleExplain: string,

  //特殊规则：0无 1有
  specialRuleType: number,

  //幸福值累计项类型 0所有消费科目 1指定消费科目
  subjectType: number,

  //幸福值有效期天数
  validityDays: number,

  //幸福值有效期类型 0永久有效 1自定义天数
  validityType: number
}

export type HappinessStrategyConfigVO = {
  //活动类型：1:签到  2.连续签到 3.小游戏 4.问卷调查 5.分享 6评价
  activityIncentiveList: Array<ActivityIncentive>,

  //活动激励策略开关 0关闭 1打开
  activityIncentiveType: number,

  //幸福值累计基础：消费1元积几个幸福值
  baseHappyValue: number,

  //已选科目
  checkedSubjectList: Array<ConsumptionSubjectVO>,

  //消费激励策略状态 0关闭 1打开
  consumeType: number,

  //策略Id
  id: string,

  //最高消费金额：超过这个金额，就按消费金额积幸福值
  maxMoney: number,

  //保底幸福值
  minHappyValue: number,

  //最低消费金额：没达到这个金额，有个保底幸福值
  minMoney: number,

  //幸福值配置说明
  ruleExplain: string,

  //特殊规则：0无 1有
  specialRuleType: number,

  //幸福值累计项类型 0所有消费科目 1指定消费科目
  subjectType: number,

  //幸福值有效期天数
  validityDays: number,

  //幸福值有效期类型 0永久有效 1自定义天数
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

export type ResponseVOHappinessStrategyConfigVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: HappinessStrategyConfigVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
