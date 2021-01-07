/**
 *
 *订单详情
 *
 **/
const queryOrderDetailUsingGET = (params: {
  orderNo: string,
  storeId: number
}): Promise<ResponseVOCrsOrderViewDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *订单列表
 *
 **/
const queryPageUsingGET_2 = (params: {
  endTime?: string,
  orderSource?: number,
  orderState?: number,
  page?: number,
  searchText?: string,
  size?: number,
  startTime?: string
}): Promise<ResponseVOPageVOCrsOrderVO> => {
  return new Promise(() => {})
}

export default {
  queryOrderDetailUsingGET,

  queryPageUsingGET_2
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

export type CrsOrderReplaceRoomDetailVO = {
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

export type CrsOrderRoomPriceVO = {
  //当前日期
  currentDate: string,

  //星期几
  currentWeek: string,

  //折扣前房间价格
  originRoomPrice: number,

  //房间价格
  roomPrice: number
}

export type CrsOrderVO = {
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
  storeId: number,

  //门店名称
  storeName: string
}

export type CrsOrderViewDetailVO = {
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

  //优惠券名称-CRS
  couponName: string,

  //优惠券编号
  couponNo: string,

  //订单创建人Id(针对于门店入住)
  createId: number,

  // 订单创建人姓名 (针对于门店入住)
  createName: string,

  //下单时间
  createTime: string,

  //换房信息
  crsOrderReplaceRoomDetailList: Array<CrsOrderReplaceRoomDetailVO>,

  //查看房费:日期-周几-房价
  crsOrderRoomPriceList: Array<CrsOrderRoomPriceVO>,

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

  //备注信息-CRS
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
  storeId: number,

  //门店名称
  storeName: string
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

export type PageVOCrsOrderVO = {
  //数据
  content: Array<CrsOrderVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type ResponseVOCrsOrderViewDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CrsOrderViewDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCrsOrderVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCrsOrderVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
