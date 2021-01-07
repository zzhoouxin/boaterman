/**
 *
 *新增会员等级
 *
 **/
const addMemberLevelUsingPOST = (
  params: MemberLevelAddDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看会员等级详情
 *
 **/
const detailMemberLevelUsingGET = (
  levelId: string
): Promise<ResponseVOMemberLevelDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员等级列表
 *
 **/
const queryListUsingGET_16 = (params: {
  cardName?: string,
  level?: number
}): Promise<ResponseVOMemberLevelResultVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员等级列表-下拉框
 *
 **/
const querySelectorUsingGET = (): Promise<ResponseVOListMemberLevelSelectorVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑会员等级
 *
 **/
const updateMemberLevelUsingPOST = (
  params: MemberLevelUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改会员等级状态
 *
 **/
const updateStatusUsingPOST_1 = (
  params: UpdateMemberLevelStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addMemberLevelUsingPOST,

  detailMemberLevelUsingGET,

  queryListUsingGET_16,

  querySelectorUsingGET,

  updateMemberLevelUsingPOST,

  updateStatusUsingPOST_1
}

export type MemberLevelAddDTO = {
  //会员等级id,第一次新建不传
  levelId: string,

  //会员等级名称
  levelName?: string,

  //操作类型：-1新增 0新增升级 1新增降级
  operateType?: number
}

export type MemberLevelDetailVO = {
  //会员等级icon
  levelIcon: string,

  //会员级别Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //背景图片
  logo: string,

  //会员等级拥有的权益
  memberLevelRightsVOList: Array<MemberLevelRightsVO>
}

export type MemberLevelResultVO = {
  //会员等级
  memberLevelVOList: Array<MemberLevelVO>,

  //保级策略配置
  saveStrategyConfigVO: SaveStrategyConfigVO
}

export type MemberLevelRightsVO = {
  //权益类别id
  categoryId: number,

  //权益类别名称
  categoryName: string,

  //权益id
  rightId: string,

  //权益名称
  rightName: string
}

export type MemberLevelSelectorVO = {
  //会员级别 升序
  level: number,

  //会员等级Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //是否启用 0否 1是
  status: number
}

export type MemberLevelUpdateDTO = {
  //会员等级icon
  levelIcon?: string,

  //会员级别Id
  levelId?: string,

  //会员等级名称
  levelName?: string,

  //背景图片
  logo?: string,

  //会员权益
  rightIds: Array<string>
}

export type MemberLevelVO = {
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

  //会员等级拥有的权益
  memberLevelRightsVOList: Array<MemberLevelRightsVO>,

  //策略列表
  memberStrategyVOList: Array<MemberStrategyVO>,

  //是否启用 0否 1是
  status: number
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

export type ResponseVOListMemberLevelSelectorVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberLevelSelectorVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberLevelDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberLevelDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberLevelResultVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberLevelResultVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type SaveStrategyConfigVO = {
  //会员等级有效时长
  effectiveDays: number,

  //启用/停用保级策略 0停用 1启用
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

export type UpdateMemberLevelStatusDTO = {
  //会员等级id
  levelId?: string,

  //会员等级状态 0停用 1启用
  status?: number
}

export type BaseResponse = {}
