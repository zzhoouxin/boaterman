/**
 *
 *每天注册统计
 *
 **/
const queryListUsingGET_1 = (): Promise<ResponseVOListCompanyRegisterReportVO> => {
  return new Promise(() => {})
}

export default {
  queryListUsingGET_1
}

export type CompanyRegisterReportVO = {
  //企业注册数
  companyRegisterCount: number,

  //注册日期
  registerDate: string
}

export type ResponseVOListCompanyRegisterReportVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CompanyRegisterReportVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
