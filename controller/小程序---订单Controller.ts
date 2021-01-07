/**
 *
 *用户申请退款
 *
 **/
const applyRefundUsingPOST = (
  params: FrontApplyRefundDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *取消
 *
 **/
const cancelUsingGET = (params: {
  cancelReason: string,
  orderNo: string
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *支付订单
 *
 **/
const payUsingPOST = (params: PayOrderDTO): Promise<ResponseVOJSONObject> => {
  return new Promise(() => {})
}

/**
 *
 *当前用户是否存在入住
 *
 **/
const queryCheckInUsingGET = (
  storeId?: number
): Promise<ResponseVOUserOrderVO> => {
  return new Promise(() => {})
}

/**
 *
 *用户预定优惠劵自动选择
 *
 **/
const queryCouponUsingGET = (params: {
  endDate: string,
  roomTypeId: number,
  startDate: string
}): Promise<ResponseVOFrontCouponVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单详情
 *
 **/
const queryDetailUsingGET_10 = (
  orderNo: string
): Promise<ResponseVOFrontOrderDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *用户支付成功展示会员入住服务权益
 *
 **/
const queryMemberServeUsingGET = (): Promise<ResponseVOFrontMemberServeVO> => {
  return new Promise(() => {})
}

/**
 *
 *用户订单列表
 *
 **/
const queryPageUsingGET_3 = (params: {
  page?: number,
  size?: number,
  type: number
}): Promise<ResponseVOPageVOFrontOrderVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单支付详情
 *
 **/
const queryPayDetailUsingGET = (params: {
  couponNo?: string,
  endDate: string,
  roomTypeId: number,
  startDate: string
}): Promise<ResponseVOFrontOrderPayDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *提交订单
 *
 **/
const submitUsingPOST = (
  params: OrderSubmitDTO
): Promise<ResponseVOSubmitOrderVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单支付成功--添加会员的入住服务
 *
 **/
const updateOrderMemberServeUsingPOST = (
  params: FrontOrderMemberServeDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  applyRefundUsingPOST,

  cancelUsingGET,

  payUsingPOST,

  queryCheckInUsingGET,

  queryCouponUsingGET,

  queryDetailUsingGET_10,

  queryMemberServeUsingGET,

  queryPageUsingGET_3,

  queryPayDetailUsingGET,

  submitUsingPOST,

  updateOrderMemberServeUsingPOST
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

export type FrontApplyRefundDTO = {
  //订单编号
  orderNo?: string,

  //退款原因
  refundReason?: string
}

export type FrontCouponVO = {
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

  //订单总金额
  orderAmount: number,

  //支付金额
  payPrice: number,

  //总房价
  roomAmount: number,

  //规则说明
  ruleDescription: string,

  //状态类型：1.已领取 2.已使用 3.已过期
  status: number
}

export type FrontMemberCheckInServeVO = {
  //服务内容
  memberServeContent: string,

  //服务ID
  memberServeId: number,

  //服务名称
  memberServeName: string
}

export type FrontMemberServeVO = {
  //会员等级
  level: number,

  //会员等级id
  levelId: string,

  //会员等级名称
  levelName: string,

  //服务内容
  memberServeList: Array<FrontMemberCheckInServeVO>,

  //权益id
  rightId: string,

  //权益名称
  rightName: string,

  //会员入住服务 1可选1个 2可选2个 3可选3个
  sindarType: number
}

export type FrontOrderDetailVO = {
  //实际支付金额
  actualPayAmount: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:没有 1：有
  breakfastFlag: number,

  //早餐单价
  breakfastPrice: number,

  //订单取消原因
  cancelReason: string,

  //押金
  cashPledge: number,

  //是否有押金 0:没有 1：有
  cashPledgeFlag: number,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPersonVO>,

  //实际入住时间
  checkInTime: string,

  //优惠券抵扣金额
  couponAmount: number,

  //是否使用优惠券 0:未使用 1:使用了
  couponFlag: number,

  //优惠券编号
  couponNo: string,

  //下单时间
  createTime: string,

  //离开时间
  leaveDate: string,

  //会员的Id
  memberId: string,

  //会员服务内容
  memberServeList: Array<MemberServeVO>,

  //待支付剩余时间
  minutes: number,

  //预定人的手机号
  mobile: string,

  //预定人姓名
  name: string,

  //openId
  openId: string,

  //订单金额
  orderAmount: number,

  //发票信息
  orderInvoiceVO: OrderInvoiceVO,

  //订单编号
  orderNo: string,

  //服务内容
  orderServeList: Array<OrderServeVO>,

  //订单来源:1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态 0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //积分抵扣金额
  pointAmount: number,

  //是否使用了积分：0否 1是
  pointFlag: number,

  //预入住时间
  preCheckInDate: string,

  //房费
  roomAmount: number,

  //房费
  roomPayList: Array<RoomPayDetailVO>,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //营地id
  storeId: number,

  //营地名称
  storeName: string
}

export type FrontOrderMemberServeDTO = {
  //会员入住服务id
  memberServeIdList?: Array<number>,

  //订单编号
  orderNo?: string
}

export type FrontOrderPayDetailVO = {
  //入住时长(天)
  checkInDays: number,

  //优惠券抵扣金额
  couponAmount: number,

  //会员权益折扣金额
  discountAmount: number,

  //订单支付金额
  orderPayAmount: number,

  //订单总金额
  orderTotalAmount: number,

  //房费
  roomPayList: Array<RoomPayDetailVO>,

  //营地id
  storeId: number
}

export type FrontOrderVO = {
  //实际支付金额
  actualPayAmount: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐 0:没有 1：有
  breakfastFlag: number,

  //早餐单价
  breakfastPrice: number,

  //押金
  cashPledge: number,

  //是否有押金 0:没有 1：有
  cashPledgeFlag: number,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPersonVO>,

  //实际入住时间
  checkInTime: string,

  //优惠券抵扣金额
  couponAmount: number,

  //是否使用优惠券 0:未使用 1:使用了
  couponFlag: number,

  //优惠券编号
  couponNo: string,

  //下单时间
  createTime: string,

  //离开时间
  leaveDate: string,

  //会员的Id
  memberId: string,

  //待支付剩余时间
  minutes: number,

  //预定人的手机号
  mobile: string,

  //预定人姓名
  name: string,

  //openId
  openId: string,

  //订单金额
  orderAmount: number,

  //订单编号
  orderNo: string,

  //订单来源
  orderSource: number,

  //订单状态 0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //订单状态
  orderStateName: string,

  //预入住时间
  preCheckInDate: string,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //门店id
  storeId: number,

  //门店名称
  storeName: string
}

export type MemberServeVO = {
  //会员服务内容
  memberServeContent: string,

  //会员服务id
  memberServeId: number,

  //会员服务名称
  memberServeName: string
}

export type OrderInvoiceVO = {
  //银行账号
  bankAccount: string,

  //银行名称
  bankName: string,

  //公司注册地址
  companyAddress: string,

  //公司联系方式
  companyMobile: string,

  //发票方式：1电子、2纸质
  invoiceMethod: number,

  //抬头名称-公司
  invoiceTitleName: string,

  //发票抬头类型：1个人、2公司
  invoiceTitleType: number,

  //发票类型：1普通发票 2增值税专用发票
  invoiceType: number,

  //开票主键
  orderInvoiceId: string,

  //个人邮箱
  personalEmail: string,

  //个人手机号
  personalMobile: string,

  //纳税人识别号
  taxCompanyNo: string
}

export type OrderServeDTO = {
  //备注
  remark: string,

  //服务内容
  serveName: Array<string>,

  //服务类型 0:其他 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征
  serveType: number
}

export type OrderServeVO = {
  //是否默认选中 0:不选中 1:选中
  checked: number,

  //服务Id
  serveId: number,

  //服务图片
  serveImg: string,

  //服务名称
  serveName: string,

  // 服务类型 1:入住茶饮 2:客房布置 3:一次性洗漱用品 4:特别关照顾客 5:客房特征 6:取消订单原因
  serveType: number
}

export type OrderSubmitDTO = {
  //优惠券编码
  couponNo: string,

  //离开日期
  endDate?: string,

  //预定人的手机号
  mobile?: string,

  //预定人姓名
  name?: string,

  //发票编码
  orderInvoiceId: string,

  //客房服务
  orderServeList: Array<OrderServeDTO>,

  //使用积分
  points: number,

  //房型Id
  roomTypeId?: number,

  //入住日期
  starDate?: string
}

export type PageVOFrontOrderVO = {
  //数据
  content: Array<FrontOrderVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PayOrderDTO = {
  //订单编号
  orderNo?: string
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

export type ResponseVOFrontCouponVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: FrontCouponVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOFrontMemberServeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: FrontMemberServeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOFrontOrderDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: FrontOrderDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOFrontOrderPayDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: FrontOrderPayDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOJSONObject = {
  //接口错误码
  code: number,

  //接口返回数据
  data: object,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOFrontOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOFrontOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOSubmitOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: SubmitOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOUserOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: UserOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomPayDetailVO = {
  //日期
  checkInDate: string,

  //房间费用
  salePrice: number
}

export type SubmitOrderVO = {
  //订单编号
  orderNo: string
}

export type UserOrderVO = {
  //入住时间
  checkInDate: string,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPersonVO>,

  //离开时间
  leaveDate: string,

  //预定人姓名
  name: string,

  //订单编号
  orderNo: string,

  //房号
  roomNo: string,

  //房号id
  roomNoId: number,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //用户名
  userName: string
}

export type BaseResponse = {}
