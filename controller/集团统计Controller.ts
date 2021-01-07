/**
 *
 *查询集团统计信息
 *
 **/
const queryDetailUsingGET_3 = (
  companyId?: number
): Promise<ResponseVOCompanyReportVO> => {
  return new Promise(() => {})
}

export default {
  queryDetailUsingGET_3
}

export type CompanyReportVO = {
  //入住企业数
  companyTotalCount: number,

  //设备总数
  facilityTotalCount: number,

  //服务客户数
  memberTotalCount: number,

  //订单总数
  orderTotalCount: number,

  //门店数量
  storeList: Array<StoreLocationVO>,

  //门店数量
  storeTotalCount: number
}

export type ResponseVOCompanyReportVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: CompanyReportVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StoreLocationVO = {
  //纬度
  latitude: string,

  //经度
  longitude: string,

  //门店Id
  storeId: number,

  //门店名称
  storeName: string
}

export type BaseResponse = {}
