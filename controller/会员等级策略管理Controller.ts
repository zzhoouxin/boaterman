/**
 *
 *新增策略内容
 *
 **/
const addMemberStrategyUsingPOST = (
  params: MemberStrategyAddDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑保留策略配置
 *
 **/
const editSaveStrategyUsingPOST = (
  params: SaveStrategyConfigDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看具体等级策略
 *
 **/
const queryDetailUsingGET_14 = (params: {
  level: number,
  levelId: string,
  strategyType: number
}): Promise<ResponseVOMemberStrategyVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看当前等级升/保级策略
 *
 **/
const queryInfoUsingGET = (params: {
  level: number,
  levelId: string
}): Promise<ResponseVOMemberStrategyInfoVO> => {
  return new Promise(() => {})
}

/**
 *
 *更新策略内容
 *
 **/
const updateMemberStrategyUsingPOST = (
  params: MemberStrategyUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addMemberStrategyUsingPOST,

  editSaveStrategyUsingPOST,

  queryDetailUsingGET_14,

  queryInfoUsingGET,

  updateMemberStrategyUsingPOST
}

export type MemberStrategyAddDTO = {
  //条件列表
  conditionDTOList: Array<StrategyConditionDTO>,

  //当前会员级别Id
  levelId: string,

  //政策说明
  policyStatement: string,

  //条件限制 0满足任一条件 1同时满足
  satisfyFlag: number,

  //政策类型 0升级 1保级
  strategyType: number
}

export type MemberStrategyInfoVO = {
  //当前会员级别Id
  levelId: string,

  //当前会员级别名称
  levelName: string,

  //策略列表
  memberStrategyVOList: Array<MemberStrategyVO>
}

export type MemberStrategyUpdateDTO = {
  //条件列表
  conditionDTOList: Array<StrategyConditionDTO>,

  //当前会员级别Id
  levelId: string,

  //政策说明
  policyStatement: string,

  //条件限制 0满足任一条件 1同时满足
  satisfyFlag: number,

  //政策类型 0升级 1保级
  strategyType: number
}

export type MemberStrategyVO = {
  //条件列表
  conditionVOList: Array<StrategyConditionVO>,

  //当前会员级别Id
  levelId: string,

  //当前会员级别名称
  levelName: string,

  //政策说明
  policyStatement: string,

  //条件限制 0满足任一条件 1同时满足
  satisfyFlag: number,

  //策略Id
  strategyId: string,

  //政策类型 0升级 1保级
  strategyType: number,

  //降级目标会员级别名称
  targetDownLevelName: string,

  //目标会员级别名称
  targetLevelName: string
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

export type ResponseVOMemberStrategyInfoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberStrategyInfoVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberStrategyVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberStrategyVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type SaveStrategyConfigDTO = {
  //会员等级有效时长
  effectiveDays: number,

  //启用/停用保级策略 0停用 1启用
  status: number
}

export type StrategyConditionDTO = {
  //条件类型 0当前会员入住间夜 1预定间夜 2当前幸福值 3累计积分 4当前可用积分 5扣除幸福值 6扣除积分 7降级扣幸福值 8降级扣除积分
  conditionType: number,

  //条件值
  conditionValue: number,

  //是否开启 0不开启 1开启
  status: number
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
