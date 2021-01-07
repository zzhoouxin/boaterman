/**
 *
 *添加消费科目类型
 *
 **/
const addUsingPOST = (
  params: ConsumptionTypeInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *编辑消费科目类型
 *
 **/
const modifyUsingPOST_2 = (
  params: ConsumptionTypeUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *是否展示消费科目类型
 *
 **/
const modifyShowUsingPOST = (
  params: ConsumptionTypeUpdateShowDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询消费科目类型--下拉框
 *
 **/
const queryListUsingGET_2 = (): Promise<ResponseVOListConsumptionTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询消费科目类型--下拉框(不过滤不展示的)
 *
 **/
const queryListMoreUsingGET = (): Promise<ResponseVOListConsumptionTypeVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询消费科目类型分页
 *
 **/
const queryPageUsingGET = (params: {
  consumptionTypeName?: string,
  page?: number,
  size?: number
}): Promise<ResponseVOPageVOConsumptionTypeVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST,

  modifyUsingPOST_2,

  modifyShowUsingPOST,

  queryListUsingGET_2,

  queryListMoreUsingGET,

  queryPageUsingGET
}

export type ConsumptionTypeInsertDTO = {
  //消费科目名称
  consumptionTypeName?: string,

  //父级id
  parentId?: number
}

export type ConsumptionTypeUpdateDTO = {
  //消费科目id
  consumptionTypeId?: number,

  //消费科目名称
  consumptionTypeName?: string,

  //父级id
  parentId?: number
}

export type ConsumptionTypeUpdateShowDTO = {
  //消费科目id
  consumptionTypeId?: number,

  //是否显示: 0显示、1不显示
  showFlag?: number
}

export type ConsumptionTypeVO = {
  //消费科目id
  consumptionTypeId: number,

  //消费科目名称
  consumptionTypeName: string,

  //是否编辑：0:否  1:是
  editFlag: number,

  //父级id
  parentId: number,

  //前是否展示：0展示  1不展示
  showFlag: number
}

export type PageVOConsumptionTypeVO = {
  //数据
  content: Array<ConsumptionTypeVO>,

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

export type ResponseVOListConsumptionTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<ConsumptionTypeVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOConsumptionTypeVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOConsumptionTypeVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
