/**
 *
 *新增优惠劵信息--用户自主领取/定向投放
 *
 **/
const addUsingPOST_1 = (params: CouponAddDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询优惠劵信息
 *
 **/
const queryDetailUsingGET_4 = (
  couponId?: string
): Promise<ResponseVOCouponVO> => {
  return new Promise(() => {})
}

/**
 *
 *统计优惠劵信息
 *
 **/
const queryListByCouponUsingGET = (params: {
  couponId?: string,
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

/**
 *
 *查询优惠劵列表
 *
 **/
const queryListUsingGET_3 = (params: {
  couponModeType?: number,
  couponType?: number,
  page?: number,
  searchText?: string,
  size?: number,
  status?: number
}): Promise<ResponseVOPageVOCouponListVO> => {
  return new Promise(() => {})
}

/**
 *
 *启用/禁用优惠劵信息
 *
 **/
const uptownUsingPOST = (params: CouponUptownDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_1,

  queryDetailUsingGET_4,

  queryListByCouponUsingGET,

  queryListUsingGET_3,

  uptownUsingPOST
}

export type CouponAddDTO = {
  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵发放总量:
  couponCount: number,

  //优惠劵发放总量类型：1.无限制  2.限制
  couponCountType: number,

  //优惠劵模式：1:总部卷，2:门店卷，3:共有卷(%) 4:共有卷(元)  默认1
  couponModeType: number,

  //优惠劵名称
  couponName: string,

  //选择用户条件
  couponSearchDTO: CouponSearchDTO,

  //优惠劵类型：1:满减卷，2:折扣卷，3:免单卷 默认1
  couponType: number,

  //优惠劵生效结束时间
  effectEndDate: string,

  //优惠劵生效开始时间
  effectStartDate: string,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //领取当日起N天内可用
  effectValue: number,

  //满减卷金额/折扣卷折扣
  fullReduceDiscount: number,

  //限制领取数量
  limitCount: number,

  //限制领取数量类型:1.无限制  2.限制数量
  limitType: number,

  //可用周期
  periodList: Array<string>,

  //领取结束时间
  receiveEndDate: string,

  //领取开始时间
  receiveStartDate: string,

  //优惠劵领取时间类型：1.无限制  2.自定义
  receiveType: number,

  //规则说明
  ruleDescription: string,

  //适用门店 1:全部门店  2:部分门店 默认1
  storeFlag: number,

  //投放类型：1.用户自主领取  2.平台定向投放
  type: number
}

export type CouponListVO = {
  //所属企业id
  companyId: number,

  //总部承担（%/元）
  companyModeValue: number,

  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵数量:
  couponCount: number,

  //优惠劵数量类型：1.无限制  2.限制
  couponCountType: number,

  //优惠劵ID
  couponId: string,

  //筛选会员人群条件
  couponMemberSearch: CouponMemberSearch,

  //优惠劵模式：1:总部劵，2:门店劵，3:共有劵(%) 4:共有劵(元)
  couponModeType: number,

  //优惠劵名称
  couponName: string,

  //类别：1.优惠劵  2.会员权益劵  3.活动劵
  couponStyle: number,

  //优惠劵类型：1:满减劵，2:折扣劵，3:免单劵
  couponType: number,

  //创建时间
  createTime: string,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //生效时间
  effectValue: string,

  //满减劵金额/折扣劵折扣--优惠劵内容
  fullReduceDiscount: number,

  //限制领取数量
  limitCount: number,

  //限制领取数量类型:1.无限制  2.限制数量
  limitType: number,

  //可用周期
  periodList: Array<string>,

  //领取数量
  receiveCount: number,

  //领取结束时间
  receiveEndDate: string,

  //领取开始时间
  receiveStartDate: string,

  //优惠劵领取时间类型：1.无限制  2.自定义
  receiveType: number,

  //规则说明
  ruleDescription: string,

  //状态：0:启用  1:禁用
  status: number,

  //适用门店 1:全部门店  2:部分门店
  storeFlag: number,

  //适用门店列表
  storeList: Array<number>,

  // 门店承担（%/元）
  storeModeValue: number,

  //投放类型：1.用户领取  2.定向投放
  type: number,

  //使用数量
  useCount: number
}

export type CouponMemberSearch = {
  //
  memberLevelIdList: Array<string>,

  //
  memberText: string
}

export type CouponSearchDTO = {
  //
  memberLevelIdList: Array<string>,

  //
  memberText: string
}

export type CouponUptownDTO = {
  //优惠劵编码
  couponId: string,

  //状态：0:启用  1:禁用
  status: number
}

export type CouponVO = {
  //所属企业id
  companyId: number,

  //总部承担（%/元）
  companyModeValue: number,

  //优惠劵使用条件金额
  couponConditionPrice: number,

  //优惠劵使用条件：1.无限制  2.客房金额  3.订单总金额
  couponConditionType: number,

  //优惠劵数量:
  couponCount: number,

  //优惠劵数量类型：1.无限制  2.限制
  couponCountType: number,

  //优惠劵编码
  couponId: string,

  //筛选会员人群条件
  couponMemberSearch: CouponMemberSearch,

  //优惠劵模式：1:总部劵，2:门店劵，3:共有劵(%) 4:共有劵(元)
  couponModeType: number,

  //优惠劵名称
  couponName: string,

  //类别：1.优惠劵  2.会员权益劵  3.活动劵
  couponStyle: number,

  //优惠劵类型：1:满减劵，2:折扣劵，3:免单劵
  couponType: number,

  //创建时间
  createTime: string,

  //生效结束时间
  effectEndDate: string,

  //生效开始时间
  effectStartDate: string,

  //优惠劵生效类型：1.无限制 2.生效时间 3.领取当日起N天内可用
  effectType: number,

  //优惠劵领取当日起N天可用
  effectValue: number,

  //满减劵金额/折扣劵折扣--优惠劵内容
  fullReduceDiscount: number,

  //限制领取数量
  limitCount: number,

  //限制领取数量类型:1.无限制  2.限制数量
  limitType: number,

  //可用周期
  periodList: Array<string>,

  //领取结束时间
  receiveEndDate: string,

  //领取开始时间
  receiveStartDate: string,

  //优惠劵领取时间类型：1.无限制  2.自定义
  receiveType: number,

  //规则说明
  ruleDescription: string,

  //状态：0:启用  1:禁用
  status: number,

  //适用门店 1:全部门店  2:部分门店
  storeFlag: number,

  //适用门店列表
  storeList: Array<number>,

  // 门店承担（%/元）
  storeModeValue: number,

  //投放类型：1.用户自主领取  2.平台定向投放
  type: number
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

export type PageVOCouponListVO = {
  //数据
  content: Array<CouponListVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
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

export type ResponseVOCouponVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CouponVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCouponListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCouponListVO,

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
