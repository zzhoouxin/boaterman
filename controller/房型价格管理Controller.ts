/**
 *
 *修改房型房价
 *
 **/
const modifyUsingPOST_8 = (params: UpdateRoomPriceDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *批量修改房型房价
 *
 **/
const modifyBatchUsingPOST_1 = (
  params: BatchUpdateRoomPriceDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *房型价格日历
 *
 **/
const queryRoomPriceListUsingGET_1 = (params: {
  queryDate: string,
  roomTypeId: number,
  storeId: number
}): Promise<ResponseVOListRoomPriceListVO> => {
  return new Promise(() => {})
}

export default {
  modifyUsingPOST_8,

  modifyBatchUsingPOST_1,

  queryRoomPriceListUsingGET_1
}

export type BatchUpdateRoomPriceDTO = {
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

export type ResponseVOListRoomPriceListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoomPriceListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoomPriceListVO = {
  //日期
  checkInDate: string,

  //可住房间数量
  freeRoomCount: number,

  //总房间数量
  roomCount: number,

  //房型Id
  roomTypeId: number,

  //房型门市价
  salePrice: number
}

export type UpdateRoomPriceDTO = {
  //所选日期
  checkInDate?: string,

  //房型id
  roomTypeId?: number,

  //门市价
  salePrice?: number,

  //所属门店Id
  storeId?: number
}

export type BaseResponse = {}
