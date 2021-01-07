/**
 *
 *确认订单
 *
 **/
const affirmUsingPOST = (params: AffirmOrderDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *取消预定
 *
 **/
const cancelReservationUsingPOST = (
  params: CancelReservationDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *入住
 *
 **/
const checkInUsingPOST = (params: CheckInDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *确认退款
 *
 **/
const confirmRefundUsingPOST = (
  params: OrderConfirmRefundDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *续住
 *
 **/
const durationRoomUsingPOST = (
  params: DurationRoomDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *快速入住
 *
 **/
const fastCheckInUsingPOST = (params: FastCheckInDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *办理预定
 *
 **/
const reservationFastUsingPOST = (
  params: FastReservationDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改车牌号
 *
 **/
const modifyCarNumUsingPOST = (
  params: ModifyCarNumDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改订单备注
 *
 **/
const modifyRemarkUsingPOST = (
  params: ModifyOrderRemarkDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *确认未到
 *
 **/
const notArriveUsingPOST = (params: NotArriveDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *办理预定/入住前查询房费
 *
 **/
const queryCheckInRoomAmountUsingGET = (params: {
  endDate: string,
  mobile?: string,
  roomTypeId: number,
  startDate: string
}): Promise<ResponseVOCheckInRoomAmountVO> => {
  return new Promise(() => {})
}

/**
 *
 *分页查询会员住宿订单列表
 *
 **/
const queryMemberRecordPageUsingGET = (params: {
  memberId?: string,
  page?: number,
  size?: number
}): Promise<ResponseVOPageVOMemberRecordOrderVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单详情
 *
 **/
const queryOrderDetailUsingGET_1 = (params: {
  orderNo: string,
  storeId: number
}): Promise<ResponseVOOrderViewDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单列表
 *
 **/
const queryPageUsingGET_6 = (params: {
  endTime?: string,
  orderSource?: number,
  orderState?: number,
  page?: number,
  searchText?: string,
  size?: number,
  startTime?: string,
  storeId: number
}): Promise<ResponseVOPageVOOrderVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取订单房费信息
 *
 **/
const queryRoomAmountUsingGET = (
  orderNo: string
): Promise<ResponseVOOrderRoomAmountVO> => {
  return new Promise(() => {})
}

/**
 *
 *换房
 *
 **/
const replaceRoomUsingPOST = (params: ReplaceRoomDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *退房
 *
 **/
const returnRoomUsingPOST = (params: SettleOrderDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *退房应付/应退金额
 *
 **/
const returnRoomAmountUsingPOST = (
  params: ReturnRoomAmountDTO
): Promise<ResponseVOReturnRoomAmountVO> => {
  return new Promise(() => {})
}

/**
 *
 *分账
 *
 **/
const settleApplyUsingPOST = (params: SettleApplyDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  affirmUsingPOST,

  cancelReservationUsingPOST,

  checkInUsingPOST,

  confirmRefundUsingPOST,

  durationRoomUsingPOST,

  fastCheckInUsingPOST,

  reservationFastUsingPOST,

  modifyCarNumUsingPOST,

  modifyRemarkUsingPOST,

  notArriveUsingPOST,

  queryCheckInRoomAmountUsingGET,

  queryMemberRecordPageUsingGET,

  queryOrderDetailUsingGET_1,

  queryPageUsingGET_6,

  queryRoomAmountUsingGET,

  replaceRoomUsingPOST,

  returnRoomUsingPOST,

  returnRoomAmountUsingPOST,

  settleApplyUsingPOST
}

export type AffirmOrderDTO = {
  //订单号
  orderNo?: string,

  //备注信息
  remark?: string
}

export type CancelReservationDTO = {
  //取消原因
  cancelReason: string,

  //订单号
  orderNo: string,

  //备注信息
  remark: string
}

export type CheckInDTO = {
  //车牌号
  carNum: string,

  //房客信息
  checkInPersonList?: Array<CheckInPersonDTO>,

  //客人消费
  consumptionList: Array<ConsumptionDTO>,

  //订单编号
  orderNo?: string,

  //客人付款
  paymentList: Array<PaymentDTO>,

  //房间id
  roomNoId?: number
}

export type CheckInPersonDTO = {
  //证件号码
  idNo?: string,

  //证件类型
  idType?: number,

  //入住人手机号
  mobile?: string,

  //入住人姓名
  name?: string
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

export type CheckInRoomAmountVO = {
  //早餐费
  breakfastAmount: number,

  //早餐数量
  breakfastCount: number,

  //是否包含早餐：0:不包含 1:包含
  breakfastFlag: number,

  //入住天数
  checkInDays: number,

  //房费
  roomAmount: number,

  //费用明细
  roomAmountDetail: Array<RoomAmountDetailVO>
}

export type ConsumptionDTO = {
  //消费金额
  consumptionAmount: number,

  //消费  0:减免 1:正常
  consumptionType: number,

  //消费类型id
  consumptionTypeId: number,

  //备注
  remark: string
}

export type DurationRoomDTO = {
  //续住截止日期
  endDate?: string,

  //订单编号
  orderNo?: string
}

export type FastCheckInDTO = {
  //车牌号
  carNum: string,

  //房客信息
  checkInPersonList?: Array<CheckInPersonDTO>,

  //客人消费
  consumptionList: Array<ConsumptionDTO>,

  //离开日期
  endDate?: string,

  //预定人的手机号
  mobile?: string,

  //预定人姓名
  name?: string,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //客人付款
  paymentList: Array<PaymentDTO>,

  //订单备注
  remark: string,

  //房号Id
  roomNoId?: number
}

export type FastReservationDTO = {
  //车牌号
  carNum: string,

  //房客信息
  checkInPersonList: Array<CheckInPersonDTO>,

  //客人消费
  consumptionList: Array<ConsumptionDTO>,

  //离开日期
  endDate?: string,

  //预定人的手机号
  mobile?: string,

  //预定人姓名
  name?: string,

  //订单来源 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //客人付款
  paymentList: Array<PaymentDTO>,

  //订单备注
  remark: string,

  //房型Id
  roomTypeId?: number,

  //入住日期
  starDate?: string
}

export type MemberRecordOrderVO = {
  //实际入住时间
  checkInTime: string,

  //预定日期（下单日期）
  createTime: string,

  //离店时间
  leaveDate: string,

  //订单金额
  orderAmount: number,

  //订单编号
  orderNo: string,

  //预定渠道 1:直销门户 2:定智旅行家  3:携程  4:自来客 5:电话客服  6:微信小程序
  orderSource: number,

  //订单状态 0:未确认（未支付）1:已支付(未入住--线上预定) 2:申请退款 3:退款中 4:已退款 5:未入住(线下预定)6:已入住 7:挂账退房 8:结账退房 9:已取消 10:未到 11:退款失败 12:完成订单
  orderState: number,

  //门店ID
  storeId: number,

  //门店名称
  storeName: string
}

export type ModifyCarNumDTO = {
  //车牌号
  carNum?: string,

  //订单号
  orderNo?: string
}

export type ModifyOrderRemarkDTO = {
  //订单号
  orderNo?: string,

  //备注
  remark?: string
}

export type NotArriveDTO = {
  //订单号
  orderNo?: string
}

export type OrderConfirmRefundDTO = {
  //是否确认退款：0:同意退款 1:拒绝退款
  confirmRefundType?: number,

  //订单编号
  orderNo?: string,

  //拒绝原因
  rejectRefundReason: string
}

export type OrderReplaceRoomDetailVO = {
  //换房结束日期
  endDate: string,

  //订单编号
  orderNo: string,

  //换房天数
  replaceDays: number,

  //换房房号
  replaceRoomNo: string,

  //换房房号id
  replaceRoomNoId: number,

  //换房房型id
  replaceRoomTypeId: number,

  //换房房型名称
  replaceRoomTypeName: string,

  //1：正常  2:免费换房
  replaceType: number,

  //房号
  roomNo: string,

  //房号id
  roomNoId: number,

  //房型id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //换房开始日期
  startDate: string
}

export type OrderRoomAmountVO = {
  //总消费
  consumptionAmount: number,

  //订单应付房费
  orderRoomAmount: number,

  //已付款
  paymentAmount: number
}

export type OrderRoomPriceVO = {
  //当前日期
  currentDate: string,

  //星期几
  currentWeek: string,

  //折扣前房间价格
  originRoomPrice: number,

  //房间价格
  roomPrice: number
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

export type OrderVO = {
  //实际支付金额
  actualPayAmount: number,

  //是否确认 (订单应到未到/应退未退时需要)
  affirmFlag: number,

  //确认人id
  affirmId: number,

  //确认人
  affirmName: string,

  //确认备注
  affirmRemark: string,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPersonVO>,

  //入住时间
  checkInTime: string,

  //所属集团
  companyId: number,

  //优惠券抵扣金额
  couponAmount: number,

  //是否使用优惠券 0:未使用 1:使用了
  couponFlag: number,

  //优惠券编号
  couponNo: string,

  //订单创建人Id(针对于门店入住)
  createId: number,

  // 订单创建人姓名 (针对于门店入住)
  createName: string,

  //下单时间
  createTime: string,

  //离开时间
  leaveDate: string,

  //会员的Id
  memberId: string,

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

  //积分抵扣金额
  pointAmount: number,

  //是否使用了积分：0否 1是
  pointFlag: number,

  //预入住时间
  preCheckInDate: string,

  //退房时间
  returnRoomTime: string,

  //房号
  roomNo: string,

  //房号id
  roomNoId: number,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //展示：欠费、预抵、预离
  showList: Array<string>,

  //所属门店
  storeId: number
}

export type OrderViewDetailVO = {
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

  //车牌号
  carNum: string,

  //押金
  cashPledge: number,

  //是否有押金 0:没有 1：有
  cashPledgeFlag: number,

  //入住时长(天)
  checkInDays: number,

  //入住人信息列表
  checkInPeopleList: Array<CheckInPersonVO>,

  //入住时间
  checkInTime: string,

  //所属集团
  companyId: number,

  //优惠券抵扣金额
  couponAmount: number,

  //是否使用优惠券 0:未使用 1:使用了
  couponFlag: number,

  //优惠券编号
  couponNo: string,

  //订单创建人Id(针对于门店入住)
  createId: number,

  // 订单创建人姓名 (针对于门店入住)
  createName: string,

  //下单时间
  createTime: string,

  //离开时间
  leaveDate: string,

  //会员的Id
  memberId: string,

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

  //换房信息
  orderReplaceRoomDetailList: Array<OrderReplaceRoomDetailVO>,

  //查看房费:日期-周几-房价
  orderRoomPriceList: Array<OrderRoomPriceVO>,

  //用户备注
  orderServeList: Array<OrderServeVO>,

  //订单来源
  orderSource: number,

  //订单状态 0:未确认（未支付） 1:已支付(未入住) 2:申请退款 3:退款中 4:已退款  5:未入住 6:已入住 7:挂账退房  8:结账退房 9:已取消
  orderState: number,

  //折扣前房费
  originRoomAmount: number,

  //积分抵扣金额
  pointAmount: number,

  //是否使用了积分：0否 1是
  pointFlag: number,

  //入预住时间
  preCheckInDate: string,

  //备注信息
  remark: string,

  //退房时间
  returnRoomTime: string,

  //房费
  roomAmount: number,

  //房号
  roomNo: string,

  //房号id
  roomNoId: number,

  //预定的房型Id
  roomTypeId: number,

  //房型名称
  roomTypeName: string,

  //所属门店
  storeId: number
}

export type PageVOMemberRecordOrderVO = {
  //数据
  content: Array<MemberRecordOrderVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVOOrderVO = {
  //数据
  content: Array<OrderVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PaymentDTO = {
  //支付类型 0退款 1收款
  payType: number,

  //支付/退款金额
  paymentAmount?: number,

  //支付科目Id
  paymentTypeId?: number,

  //备注
  remark: string
}

export type ReplaceRoomDTO = {
  //订单编号
  orderNo?: string,

  //换房方式 0:免费换房 1:付费换房
  replaceType?: number,

  //房号id
  roomNoId?: number
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

export type ResponseVOCheckInRoomAmountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CheckInRoomAmountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOOrderRoomAmountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: OrderRoomAmountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOOrderViewDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: OrderViewDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOMemberRecordOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOMemberRecordOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOReturnRoomAmountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: ReturnRoomAmountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ReturnRoomAmountDTO = {
  //客人消费明细
  consumptionList: Array<ConsumptionDTO>,

  //订单号
  orderNo?: string
}

export type ReturnRoomAmountVO = {
  //消费总金额
  consumptionAmount: number,

  //已支付金额
  paymentAmount: number,

  //结算金额
  settlementAmount: number,

  //结算类型 0:退款 1:收款
  settlementType: number
}

export type RoomAmountDetailVO = {
  //日期
  checkInDate: string,

  //折扣房费
  discountAmount: number,

  //房费
  roomAmount: number
}

export type SettleApplyDTO = {
  //订单编号
  orderNo?: string
}

export type SettleOrderDTO = {
  //消费信息
  consumptionList: Array<ConsumptionDTO>,

  //订单编号
  orderNo?: string,

  //付款信息
  paymentList: Array<PaymentDTO>,

  //退房备注
  remark: string,

  //退房类型 1:结账退房 2:挂账退房
  returnType: number
}

export type BaseResponse = {}
