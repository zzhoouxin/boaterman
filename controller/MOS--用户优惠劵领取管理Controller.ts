/**
 *
 *导出用户领取优惠劵列表
 *
 **/
const excelExportUsingGET = (params: {
  page?: number,
  receiveEndTime?: string,
  receiveStartTime?: string,
  searchText?: string,
  size?: number,
  status?: number,
  storeId?: number
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询用户领取优惠劵列表
 *
 **/
const queryListUsingGET_15 = (params: {
  page?: number,
  receiveEndTime?: string,
  receiveStartTime?: string,
  searchText?: string,
  size?: number,
  status?: number,
  storeId?: number
}): Promise<ResponseVOPageVOMemberCouponListVO> => {
  return new Promise(() => {})
}

export default {
  excelExportUsingGET,

  queryListUsingGET_15
}

export type MemberCouponListVO = {
  //所属企业id
  companyId: number,

  //总部承担（%/元）
  companyModeValue: number,

  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵ID
  couponId: string,

  //优惠劵模式：1:总部劵，2:门店劵，3:共有劵(%) 4:共有劵(元)
  couponModeType: number,

  //优惠劵名称
  couponName: string,

  //用户领取优惠劵编码
  couponNo: string,

  //类别：1.优惠劵  2.会员权益劵  3.活动劵
  couponStyle: number,

  //优惠劵类型：1:满减劵，2:折扣劵，3:免单劵
  couponType: number,

  //创建时间
  createTime: string,

  //抵扣金额
  deductAmount: number,

  //生效结束时间
  effectEndDate: string,

  //生效开始时间
  effectStartDate: string,

  //生效类型：1.无限制 2.生效时间
  effectType: number,

  //满减劵金额/折扣劵折扣
  fullReduceDiscount: number,

  //用户id
  memberId: string,

  //手机号
  mobile: string,

  //姓名
  name: string,

  //订单金额
  orderAmount: number,

  //订单号
  orderNo: string,

  //可用周期
  periodList: Array<string>,

  //领取时间
  receiveTime: string,

  //规则说明
  ruleDescription: string,

  //状态类型：1.已领取 2.已使用 3.已过期
  status: number,

  //适用门店 1:全部门店  2:部分门店
  storeFlag: number,

  //适用门店列表
  storeList: Array<number>,

  // 门店承担（%/元）
  storeModeValue: number,

  //状态变更时间
  useTime: string
}

export type PageVOMemberCouponListVO = {
  //数据
  content: Array<MemberCouponListVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
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

export type ResponseVOPageVOMemberCouponListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOMemberCouponListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
