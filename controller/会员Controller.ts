/**
 *
 *验证短信验证码
 *
 **/
const bindMobileUsingPOST = (
  params: ValidateSmsCodeDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取图形验证码
 *
 **/
const getCaptchaCodeUsingGET_1 = (): Promise<ResponseVOCaptchaVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取短信验证码
 *
 **/
const getSmsCodeUsingGET_1 = (params: {
  captchaAnswer: string,
  captchaToken: string,
  mobile: string
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取微信手机号
 *
 **/
const getWechatMobileUsingPOST = (
  params: GetWechatMobileDTO
): Promise<ResponseVOGetWechatMobileVO> => {
  return new Promise(() => {})
}

/**
 *
 *搜索会员
 *
 **/
const queryMemberUsingGET = (
  searchText?: string
): Promise<ResponseVOMemberInfoVO> => {
  return new Promise(() => {})
}

/**
 *
 *会员列表
 *
 **/
const queryPageUsingGET_5 = (params: {
  endTime?: string,
  page?: number,
  registerSource?: number,
  size?: number,
  startTime?: string
}): Promise<ResponseVOPageVOMemberVO> => {
  return new Promise(() => {})
}

/**
 *
 *更新会员信息
 *
 **/
const updateMemberInfoUsingPOST = (
  params: MemberUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  bindMobileUsingPOST,

  getCaptchaCodeUsingGET_1,

  getSmsCodeUsingGET_1,

  getWechatMobileUsingPOST,

  queryMemberUsingGET,

  queryPageUsingGET_5,

  updateMemberInfoUsingPOST
}

export type CaptchaVO = {
  //图形验证码图片
  captchaImage: string,

  //图形验证码token
  captchaToken: string
}

export type GetWechatMobileDTO = {
  //jsCode
  code?: string,

  //加密数据
  encryptedData?: string,

  //iv
  iv?: string
}

export type GetWechatMobileVO = {
  //手机号
  mobile: string
}

export type MemberBaseInfoVO = {
  //身份证地址
  address: string,

  //年龄
  age: number,

  //生日
  birthday: string,

  //身份证地址市
  city: string,

  //星座
  constellation: string,

  //注册时间
  createTime: string,

  //身份证地址区/县
  district: string,

  //邮箱
  email: string,

  //证件号码
  idNo: string,

  //证件类型:1身份证 2军人证 3护照 4港澳通行证 5回乡证 6台胞证
  idType: number,

  //常驻城市市
  locationCity: string,

  //常驻城市区/县
  locationDistrict: string,

  //常驻城市省
  locationProvince: string,

  //会员Id
  memberId: string,

  //手机号
  mobile: string,

  //客户姓名
  name: string,

  //累计订单数量
  orderCount: number,

  //身份证地址省
  province: string,

  //注册来源 1直销门户 2定制旅行家 3携程 4自来客 5电话客服 6微信小程序
  registerSource: number,

  //备注
  remark: string,

  //性别 0保密 1男 2女
  sex: number,

  //累计消费金额
  totalAmount: number
}

export type MemberInfoVO = {
  //会员基本信息
  baseInfoVO: MemberBaseInfoVO,

  //会员等级信息
  memberLevelInfoVO: MemberLevelInfoVO,

  //会员使用权益记录
  memberRightRecordVOList: Array<MemberRightRecordVO>
}

export type MemberLevelInfoVO = {
  //可用优惠券张数
  couponCount: number,

  //会员有效结束日期
  endDate: string,

  //会员是否永久0否，1是
  foreverFlag: number,

  //可用幸福值
  happyValue: number,

  //会员等级icon
  levelIcon: string,

  //会员等级Id
  levelId: string,

  //会员等级名称
  levelName: string,

  //会员等级背景色
  logo: string,

  //可用会员积分
  points: number
}

export type MemberRightRecordVO = {
  //创建时间
  createTime: string,

  //备注
  remark: string,

  //记录内容
  rightContent: string,

  //权益名称
  rightName: string
}

export type MemberUpdateDTO = {
  //详细地址
  address: string,

  //年龄
  age: number,

  //生日
  birthday: string,

  //市
  city: string,

  //星座
  constellation: string,

  //区/县
  district: string,

  //邮箱
  email: string,

  //证件号码
  idNo: string,

  //证件类型 1身份证 2军人证 3护照 4港澳通行证 5回乡证 6台胞证
  idType: number,

  //常驻城市市
  locationCity: string,

  //常驻城市区/县
  locationDistrict: string,

  //常驻城市省
  locationProvince: string,

  //会员id
  memberId: string,

  //手机号
  mobile: string,

  //客户姓名
  name: string,

  //省
  province: string,

  //备注
  remark: string,

  //性别 0保密 1男 2女
  sex: number
}

export type MemberVO = {
  //创建时间
  createTime: string,

  //手机号
  mobile: string,

  //客户姓名
  name: string,

  //订单数量
  orderCount: number,

  //注册来源
  registerSource: number
}

export type PageVOMemberVO = {
  //数据
  content: Array<MemberVO>,

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

export type ResponseVOCaptchaVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CaptchaVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOGetWechatMobileVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: GetWechatMobileVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOMemberInfoVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: MemberInfoVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOMemberVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOMemberVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ValidateSmsCodeDTO = {
  //用户头像
  headImage: string,

  //手机号
  mobile?: string,

  //用户昵称
  nickname: string,

  //短信验证码
  smsCode?: string
}

export type BaseResponse = {}
