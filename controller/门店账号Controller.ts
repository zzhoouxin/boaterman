/**
 *
 *新增门店账户
 *
 **/
const createUsingPOST = (
  params: CreateStoreAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除门店账户
 *
 **/
const deleteUsingDELETE_8 = (
  params: DeleteStoreAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改门店账户
 *
 **/
const modifyUsingPOST_10 = (
  params: ModifyStoreAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取门店账号列表
 *
 **/
const queryListUsingGET_26 = (
  storeId: number
): Promise<ResponseVOListAccountListVO> => {
  return new Promise(() => {})
}

/**
 *
 *获取门店账号列表
 *
 **/
const queryPageUsingGET_10 = (params: {
  argument?: string,
  page?: number,
  roleId?: number,
  size?: number,
  storeId: number
}): Promise<ResponseVOPageVOStoreAccountVO> => {
  return new Promise(() => {})
}

export default {
  createUsingPOST,

  deleteUsingDELETE_8,

  modifyUsingPOST_10,

  queryListUsingGET_26,

  queryPageUsingGET_10
}

export type AccountListVO = {
  //账户id
  accountId: number,

  //手机号
  mobile: string,

  //姓名
  name: string,

  //性别 1女 2:男
  sex: number
}

export type CreateStoreAccountDTO = {
  //手机号
  mobile?: string,

  //姓名
  name?: string,

  //角色Id
  roleIdList?: Array<number>,

  //性别 1:女 2:男
  sex?: number,

  //门店
  storeId?: number
}

export type DeleteStoreAccountDTO = {
  //账户id
  accountId?: number,

  //门店Id
  storeId?: number
}

export type ModifyStoreAccountDTO = {
  //账号id
  accountId?: number,

  //姓名
  name?: string,

  //角色Id
  roleIdList?: Array<number>,

  //性别 1:女 2:男
  sex?: number,

  //门店
  storeId?: number
}

export type PageVOStoreAccountVO = {
  //数据
  content: Array<StoreAccountVO>,

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

export type ResponseVOListAccountListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<AccountListVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVOStoreAccountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVOStoreAccountVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StoreAccountVO = {
  //账户id
  accountId: number,

  //注册时间(CRS列表用)
  createTime: string,

  //手机号
  mobile: string,

  //姓名
  name: string,

  //角色id
  roleIdList: Array<number>,

  //性别 1:女 2:男
  sex: number
}

export type BaseResponse = {}
