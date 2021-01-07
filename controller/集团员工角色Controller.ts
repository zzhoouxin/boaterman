/**
 *
 *新增集团角色
 *
 **/
const addUsingPOST_16 = (params: RoleInsertDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *删除角色
 *
 **/
const deleteUsingDELETE_7 = (roleId: number): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *修改集团角色
 *
 **/
const editUsingPOST = (params: RoleUpdateDTO): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *集团修改角色绑定用户
 *
 **/
const modifyAccountRoleUsingPOST = (
  params: RoleAccountDTO
): Promise<ResponseVO> => {
  return new Promise(() => {})
}

/**
 *
 *集团没有绑定该角色的用户列表
 *
 **/
const accountNotRoleListUsingGET = (
  roleId: number
): Promise<ResponseVOListRoleNotAccountVO> => {
  return new Promise(() => {})
}

/**
 *
 *集团角色列表
 *
 **/
const queryListUsingGET_23 = (
  roleName?: string
): Promise<ResponseVOListRoleVO> => {
  return new Promise(() => {})
}

/**
 *
 *根据角色查询用户列表
 *
 **/
const queryRoleUserListUsingGET = (params: {
  moduleId?: number,
  page?: number,
  roleId?: number,
  searchText?: string,
  size?: number,
  status?: number
}): Promise<ResponseVOPageVORoleAccountListVO> => {
  return new Promise(() => {})
}

export default {
  addUsingPOST_16,

  deleteUsingDELETE_7,

  editUsingPOST,

  modifyAccountRoleUsingPOST,

  accountNotRoleListUsingGET,

  queryListUsingGET_23,

  queryRoleUserListUsingGET
}

export type PageVORoleAccountListVO = {
  //数据
  content: Array<RoleAccountListVO>,

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

export type ResponseVOListRoleNotAccountVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoleNotAccountVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListRoleVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<RoleVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOPageVORoleAccountListVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: PageVORoleAccountListVO,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type RoleAccountDTO = {
  //账号列表
  accountIdList: Array<number>,

  //角色主键
  roleId?: number
}

export type RoleAccountListVO = {
  //账户id
  accountId: number,

  //创建时间
  createTime: string,

  //手机号
  mobile: string,

  //拥有的系统模块列表
  modules: Array<RoleAccountModuleVO>,

  //姓名
  name: string,

  //拥有的角色列表
  roles: Array<RoleAccountVO>,

  //性别 1女 2:男
  sex: number,

  //状态  0:冻结 1:正常
  status: number
}

export type RoleAccountModuleVO = {
  //模块名称id
  moduleId: number,

  //模块名称
  moduleName: string,

  //模块英文名称
  moduleNameEn: string
}

export type RoleAccountVO = {
  //角色id
  roleId: number,

  //角色
  roleName: string,

  //角色类型 1:集团角色 2:门店角色
  roleType: number
}

export type RoleInsertDTO = {
  //权限列表
  menuIdList: Array<number>,

  //备注
  remark: string,

  //角色名称
  roleName?: string
}

export type RoleNotAccountVO = {
  //账户ID
  accountId: number,

  //用户名
  mobile: string,

  //姓名
  name: string
}

export type RolePermissionVO = {
  //是否删除  0否 1是
  deleteFlag: number,

  //是否显示 0:隐藏 1:显示
  isShow: number,

  //颜色
  menuColor: string,

  //图标
  menuIcon: string,

  //菜单编码
  menuId: number,

  //菜单名称
  menuName: string,

  //路径
  menuPath: string,

  //要跳转的js 路径
  menuTarget: string,

  //菜单类型（1菜单 2按钮）
  menuType: number,

  //父节点ID 0为顶级节点
  parentId: number,

  //状态 0:删除 1:正常 2:停用
  status: number
}

export type RoleUpdateDTO = {
  //权限列表
  menuIdList: Array<number>,

  //备注
  remark: string,

  //角色主键
  roleId?: number,

  //角色名称
  roleName?: string
}

export type RoleVO = {
  //创建人
  createId: number,

  //创建人姓名
  createName: string,

  //备注
  remark: string,

  //角色id
  roleId: number,

  //角色
  roleName: string,

  //角色所拥有的权限列表
  rolePermissions: Array<RolePermissionVO>
}

export type BaseResponse = {}
