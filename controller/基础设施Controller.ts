/**
 *
 *查看房型配套设施
 *
 **/
const findRoomTypeFacilityUsingGET = (): Promise<ResponseVOListFacilityVO> => {
  return new Promise(() => {})
}

/**
 *
 *查看门店设施
 *
 **/
const queryStoreFacilityUsingGET = (): Promise<ResponseVOListFacilityVO> => {
  return new Promise(() => {})
}

export default {
  findRoomTypeFacilityUsingGET,

  queryStoreFacilityUsingGET
}

export type FacilityVO = {
  //设施Id
  facilityId: number,

  //设施名称
  facilityName: string,

  //设施类型
  facilityType: number,

  //设施类型名称
  facilityTypeName: string,

  //图片路径
  imageUrl: string
}

export type ResponseVOListFacilityVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<FacilityVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
