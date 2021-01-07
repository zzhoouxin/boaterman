/**
 *
 *检测账号是否是首次登录
 *
 **/
const checkFirstLoginUsingGET = (
  userName: string
): Promise<ResponseVOCheckFirstLoginVO> => {
  return new Promise(() => {})
}

/**
 *
 *新增集团账户
 *
 **/
const createForCrsUsingPOST = (
  params: CreateAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除账户
 *
 **/
const deleteUsingDELETE = (params: DeleteAccountDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取图形验证码
 *
 **/
const getCaptchaCodeUsingGET = (): Promise<ResponseVOCaptchaVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取忘记密码短信验证码
 *
 **/
const getForgetSmsCodeUsingGET = (params: {
  captchaAnswer: string,
  captchaToken: string,
  mobile: string
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取短信验证码
 *
 **/
const getSmsCodeUsingGET = (params: {
  captchaAnswer: string,
  captchaToken: string,
  mobile: string
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取解除绑定短信验证码
 *
 **/
const getUnbindSmsCodeUsingGET = (params: {
  captchaAnswer: string,
  captchaToken: string,
  mobile: string
}): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改账户
 *
 **/
const modifyUsingPOST = (params: ModifyAccountDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改管理员手机号
 *
 **/
const modifyMobileUsingPOST = (
  params: ModifyMobileDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *忘记密码/修改密码
 *
 **/
const modifyPasswordUsingPOST = (
  params: ModifyPasswordDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改账户状态
 *
 **/
const modifyStatusUsingPOST = (
  params: ModifyAccountStatusDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *账户详情
 *
 **/
const queryDetailUsingGET = (
  accountId?: string
): Promise<ResponseVOAccountVO> => {
  return new Promise(() => {})
}

/**
 *
 *注册账户
 *
 **/
const registerUsingPOST = (params: RegisterAccountDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改账户
 *
 **/
const modifyUsingPOST_3 = (
  params: CrsModifyAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *重置密码
 *
 **/
const resetPasswordUsingPOST = (
  params: CrsResetPwdAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  checkFirstLoginUsingGET,

  createForCrsUsingPOST,

  deleteUsingDELETE,

  getCaptchaCodeUsingGET,

  getForgetSmsCodeUsingGET,

  getSmsCodeUsingGET,

  getUnbindSmsCodeUsingGET,

  modifyUsingPOST,

  modifyMobileUsingPOST,

  modifyPasswordUsingPOST,

  modifyStatusUsingPOST,

  queryDetailUsingGET,

  registerUsingPOST,

  modifyUsingPOST_3,

  resetPasswordUsingPOST
}

export type AccountVO = {
  //账户id
  accountId: number,

  //注册时间(CRS列表用)
  createTime: string,

  //手机号
  mobile: string,

  //姓名
  name: string,

  //性别 1:女 2:男
  sex: number,

  //管理的门店
  storeList: Array<StoreVO>
}

export type CaptchaVO = {
  //图形验证码图片
  captchaImage: string,

  //图形验证码token
  captchaToken: string
}

export type CheckFirstLoginVO = {
  //检查结果 ture:是首次登录 false:非首次登录
  checkResult: boolean
}

export type CreateAccountDTO = {
  //手机号
  mobile?: string,

  //姓名
  name?: string,

  //角色Id不能为空呢
  roleIds?: Array<number>,

  //性别 1:女 2:男
  sex?: number
}

export type CrsModifyAccountDTO = {
  //账号Id
  accountId?: number,

  //姓名
  name?: string,

  //性别 1:女 2:男
  sex?: number
}

export type CrsResetPwdAccountDTO = {
  //账号Id
  accountId?: number
}

export type DeleteAccountDTO = {
  //账户id
  accountId?: number
}

export type ModifyAccountDTO = {
  //账号Id
  accountId?: number,

  //姓名
  name?: string,

  //角色Id不能为空呢
  roleIds?: Array<number>,

  //性别 1:女 2:男
  sex?: number
}

export type ModifyAccountStatusDTO = {
  //账号Id
  accountId?: number,

  //状态  0:冻结 1:正常
  status?: number
}

export type ModifyMobileDTO = {
  //手机号验证码
  mobileSmsCode?: string,

  //管理员姓名
  name?: string,

  //新手机号
  newMobile?: string,

  //新手机号验证码
  newMobileSmsCode?: string,

  //新密码
  newPassword?: string
}

export type ModifyPasswordDTO = {
  //手机号
  mobile?: string,

  //新密码
  newPassword?: string,

  //验证码
  smsCode?: string
}

export type RegisterAccountDTO = {
  //手机号
  mobile?: string,

  //姓名
  name?: string,

  //密码
  password?: string,

  //短信验证码
  smsCode?: string
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

export type ResponseVOAccountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: AccountVO,

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

export type ResponseVOCheckFirstLoginVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CheckFirstLoginVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StoreVO = {
  //门店logo
  logo: string,

  //状态：0正常、1停用
  status: number,

  //门店id
  storeId: number,

  //门店名称
  storeName: string
}

export type BaseResponse = {}
