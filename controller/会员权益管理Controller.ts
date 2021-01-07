/**
 *
 *新增会员权益
 *
 **/
const addUsingPOST_9 = (params: MemberRightAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改会员权益
 *
 **/
const modifyUsingPOST_6 = (
  params: MemberRightUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看权益详情
 *
 **/
const queryDetailUsingGET_13 = (params: {
  categoryId: number,
  rightId: string
}): Promise<ResponseVOMemberRightDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *根据权益类别查看权益列表
 *
 **/
const queryListByRightCategoryUsingGET = (
  categoryId: number
): Promise<ResponseVOListMemberRightVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改会员权益状态
 *
 **/
const updateStatusUsingPOST_2 = (
  params: UpdateMemberRightStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_9,

  modifyUsingPOST_6,

  queryDetailUsingGET_13,

  queryListByRightCategoryUsingGET,

  updateStatusUsingPOST_2
}

export type MemberRightAddDTO = {
  //早餐权益类型 0早餐数量 1按入住人数
  breakfastType: number,

  //权益类别id
  categoryId?: number,

  //欢迎水果/MiniBar增值商品权益 0每次入住送1份  1入住每天送1份
  fruitType: number,

  //房费折扣/积分权益/早餐数量内容
  numContent: string,

  //优惠券权益内容
  rightCouponDTO: RightCouponDTO,

  //权益说明
  rightExplain: string,

  //康乐权益内容
  rightHealthDTO: RightHealthDTO,

  //权益名称
  rightName?: string,

  //季节礼遇权益 0年/次 1半年/次 2季度/次
  seasonType: number,

  //sindarPlus服务 1可选1个 2可选2个 3可选3个
  sindarType: number,

  //消费赠券（待设计）/生日礼物（待设计）/季节礼遇（待设计）
  stringContent: string,

  //延迟退房/预定保留权益内容
  timeContent: string
}

export type MemberRightDetailVO = {
  //早餐权益类型 0早餐数量 1按入住人数
  breakfastType: number,

  //权益类别id
  categoryId: number,

  //欢迎水果/MiniBar增值商品权益 0每次入住送1份  1入住每天送1份
  fruitType: number,

  //房费折扣/积分权益/早餐数量内容
  numContent: string,

  //优惠券权益内容
  rightCouponVO: RightCouponVO,

  //权益说明
  rightExplain: string,

  //康乐权益内容
  rightHealthVO: RightHealthVO,

  //权益id
  rightId: string,

  //权益名称
  rightName: string,

  //季节礼遇权益 0年/次 1半年/次 2季度/次
  seasonType: number,

  //sindarPlus服务 1可选1个 2可选2个 3可选3个
  sindarType: number,

  //消费赠券（待设计）/生日礼物（待设计）/季节礼遇（待设计）
  stringContent: string,

  //延迟退房/预定保留权益内容
  timeContent: string
}

export type MemberRightUpdateDTO = {
  //早餐权益类型 0早餐数量 1按入住人数
  breakfastType: number,

  //权益类别id
  categoryId?: number,

  //欢迎水果/MiniBar增值商品权益 0每次入住送1份  1入住每天送1份
  fruitType: number,

  //房费折扣/积分权益/早餐数量内容
  numContent: string,

  //优惠券权益内容
  rightCouponDTO: RightCouponUpdateDTO,

  //权益说明
  rightExplain: string,

  //康乐权益内容
  rightHealthDTO: RightHealthDTO,

  //权益id
  rightId?: string,

  //权益名称
  rightName?: string,

  //季节礼遇权益 0年/次 1半年/次 2季度/次
  seasonType: number,

  //sindarPlus服务 1可选1个 2可选2个 3可选3个
  sindarType: number,

  //消费赠券（待设计）/生日礼物（待设计）/季节礼遇（待设计）
  stringContent: string,

  //延迟退房/预定保留权益内容
  timeContent: string
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

export type ResponseVOListMemberRightVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MemberRightVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberRightDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberRightDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RightCouponDTO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠券数量
  couponCount: number,

  //优惠劵类型：1:满减券，2:折扣券，3:免单券
  couponType: number,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //优惠劵领取当日起N天可用
  effectValue: number,

  //满减券金额/折扣券折扣---优惠劵内容
  fullReduceDiscount: number
}

export type RightCouponUpdateDTO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠券数量
  couponCount: number,

  //优惠劵Id
  couponId: string,

  //优惠劵类型：1:满减券，2:折扣券，3:免单券
  couponType: number,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //优惠劵领取当日起N天可用
  effectValue: number,

  //满减券金额/折扣券折扣---优惠劵内容
  fullReduceDiscount: number
}

export type RightCouponVO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠券数量
  couponCount: number,

  //优惠劵Id
  couponId: string,

  //优惠劵类型：1:满减券，2:折扣券，3:免单券
  couponType: number,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //优惠劵领取当日起N天可用
  effectValue: number,

  //满减券金额/折扣券折扣---优惠劵内容
  fullReduceDiscount: number
}

export type RightHealthDTO = {
  //康乐内容
  content: string,

  //使用时长：整数0~10
  timeLong: number
}

export type RightHealthVO = {
  //康乐内容
  content: string,

  //使用时长：整数0~10
  timeLong: number
}

export type UpdateMemberRightStatusDTO = {
  //权益类别id
  categoryId?: number,

  //权益id
  rightId?: string,

  //权益类别状态 0停用 1启用
  status?: number
}

export type BaseResponse = {}
