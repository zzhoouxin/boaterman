/**
 *
 *新增门店角色
 *
 **/
const addStoreRoleUsingPOST = (
  params: StoreRoleInsertDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除门店角色
 *
 **/
const deleteUsingDELETE_9 = (
  params: DeleteStoreRoleDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改门店角色
 *
 **/
const modifyStoreRoleUsingPOST = (
  params: StoreRoleUpdateDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *门店角色列表
 *
 **/
const queryListUsingGET_28 = (params: {
  roleName?: string,
  storeId: number
}): Promise<ResponseVOListStoreRoleVO> => {
  return new Promise(() => {})
}

export default {
  addStoreRoleUsingPOST,

  deleteUsingDELETE_9,

  modifyStoreRoleUsingPOST,

  queryListUsingGET_28
}

export type DeleteStoreRoleDTO = {
  //角色Id
  roleId?: number,

  //门店Id
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

export type ResponseVOListStoreRoleVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<StoreRoleVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type StoreRoleInsertDTO = {
  //权限列表
  menuIdList: Array<number>,

  //备注
  remark: string,

  //角色名称
  roleName?: string,

  //所属门店Id
  storeId?: number
}

export type StoreRoleUpdateDTO = {
  //权限列表
  menuIdList: Array<number>,

  //备注
  remark: string,

  //角色主键
  roleId?: number,

  //角色名称
  roleName?: string,

  //所属门店Id
  storeId?: number
}

export type StoreRoleVO = {
  //菜单列表
  menuIdList: Array<number>,

  //备注
  remark: string,

  //角色id
  roleId: number,

  //角色
  roleName: string
}

export type BaseResponse = {}
