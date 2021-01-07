/**
 *
 *修改房型房价
 *
 **/
const modifyUsingPOST_4 = (
  params: CrsUpdateRoomPriceDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *批量修改房型房价
 *
 **/
const modifyBatchUsingPOST = (
  params: CrsBatchUpdateRoomPriceDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *房型价格日历
 *
 **/
const queryRoomPriceListUsingGET = (params: {
  queryDate: string,
  roomTypeId: number,
  storeId: number
}): Promise<ResponseVOListCrsRoomPriceListVO> => {
  return new Promise(() => {})
}

export default {
  modifyUsingPOST_4,

  modifyBatchUsingPOST,

  queryRoomPriceListUsingGET
}

export type CrsBatchUpdateRoomPriceDTO = {
  //结束时间
  endTime?: string,

  //房型id
  roomTypeId?: number,

  //门市价
  salePrice?: number,

  //开始时间
  startTime?: string,

  //所属门店Id
  storeId?: number,

  //所选的具体星期几：周一~周日分别用1~7代替
  weeks: Array<number>
}

export type CrsRoomPriceListVO = {
  //可住房间数量
  freeRoomCount: number,

  //日期
  localDate: string,

  //总房间数量
  roomCount: number,

  //房型Id
  roomTypeId: number,

  //房型门市价
  salePrice: number
}

export type CrsUpdateRoomPriceDTO = {
  //所选日期
  checkInDate?: string,

  //房型id
  roomTypeId?: number,

  //门市价
  salePrice?: number,

  //所属门店Id
  storeId?: number
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

export type ResponseVOListCrsRoomPriceListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<CrsRoomPriceListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
