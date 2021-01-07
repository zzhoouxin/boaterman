/**
 *
 *已审核用户
 *
 **/
const queryAuditAccountUsingGET = (params: {
  page?: number,
  size?: number
}): Promise<ResponseVOPageVOAccountViewVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取资质审核列表
 *
 **/
const queryCompanyAuditPageUsingGET = (params: {
  argument?: string,
  page?: number,
  size?: number,
  status?: number
}): Promise<ResponseVOPageVOCompanyAuditVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看资质详情
 *
 **/
const queryDetailUsingGET_1 = (
  companyId: number
): Promise<ResponseVOCompanyAuditDetailVO> => {
  return new Promise(() => {})
}

/**
 *
 *已审核企业列表
 *
 **/
const queryListUsingGET = (): Promise<ResponseVOListCompanySelectedVO> => {
  return new Promise(() => {})
}

/**
 *
 *新注册的用户
 *
 **/
const queryNewAccountUsingGET = (params: {
  page?: number,
  size?: number
}): Promise<ResponseVOPageVOAccountViewVO> => {
  return new Promise(() => {})
}

/**
 *
 *更改状态
 *
 **/
const updateStatusUsingPOST = (
  params: CompanyAuditDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  queryAuditAccountUsingGET,

  queryCompanyAuditPageUsingGET,

  queryDetailUsingGET_1,

  queryListUsingGET,

  queryNewAccountUsingGET,

  updateStatusUsingPOST
}

export type AccountViewVO = {
  //账户id
  accountId: number,

  //注册时间
  createTime: string,

  //手机号
  mobile: string,

  //姓名
  name: string,

  //性别 1:女 2:男
  sex: number
}

export type CompanyAuditDTO = {
  //审核的集团id
  companyId: number,

  //失败/冻结原因
  reason: string,

  //审核状态 1:审核成功/解冻 2:失败 3:冻结
  status: number
}

export type CompanyAuditDetailVO = {
  //审核消息
  auditMsg: string,

  //审核状态 0:审核中 1:审核通过 2:审核未通过
  auditStatus: number,

  //营业执照号
  businessLicense: string,

  //营业执照图片
  businessLicenseImg: string,

  //集团Id
  companyId: number,

  //集团名称
  companyName: string,

  //委托书
  entrustImg: Array<string>,

  //身份证正/反面图片
  idCardImg: Array<string>,

  //身份证号
  idCardNum: string,

  //法人
  legalPerson: string
}

export type CompanyAuditVO = {
  //审核时间
  auditTime: string,

  //营业执照号
  businessLicense: string,

  //集团Id
  companyId: number,

  //集团名称
  companyName: string,

  //审核失败/停用原因
  reason: string,

  //0:审核中 1:审核通过 2:审核未通过 3:冻结
  status: number,

  //提交人id
  updateId: number,

  //提交人姓名
  updateName: string,

  //提交时间
  updateTime: string
}

export type CompanySelectedVO = {
  //集团Id
  companyId: number,

  //集团名称
  companyName: string
}

export type PageVOAccountViewVO = {
  //数据
  content: Array<AccountViewVO>,

  //当前页码
  pageIndex: number,

  //每页多少条
  pageSize: number,

  //总条数
  totalSize: number
}

export type PageVOCompanyAuditVO = {
  //数据
  content: Array<CompanyAuditVO>,

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

export type ResponseVOCompanyAuditDetailVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CompanyAuditDetailVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListCompanySelectedVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CompanySelectedVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOAccountViewVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOAccountViewVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOCompanyAuditVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOCompanyAuditVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
