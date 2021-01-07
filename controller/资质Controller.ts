/**
 *
 *修改/提交资质信息
 *
 **/
const modifyUsingPOST_1 = (params: ModifyCompanyDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *资质信息
 *
 **/
const queryDetailUsingGET_2 = (): Promise<ResponseVO> => {
  return new Promise(() => {})
}

export default {
  modifyUsingPOST_1,

  queryDetailUsingGET_2
}

export type ModifyCompanyDTO = {
  //营业执照号
  businessLicense?: string,

  //营业执图片
  businessLicenseImg?: string,

  //集团名称
  companyName?: string,

  //授权书
  entrustImg: Array<string>,

  //身份证正反面图片
  idCardImg?: Array<string>,

  //身份证号
  idCardNum?: string,

  //法人
  legalPerson?: string
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

export type BaseResponse = {}
