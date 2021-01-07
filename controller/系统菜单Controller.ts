/**
 *
 *查询所有模块（除了PMS）菜单
 *
 **/
const findAllMenuListUsingGET = (): Promise<ResponseVOListAllModuleMenuVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询模块所有菜单
 *
 **/
const findModuleMenuListUsingGET = (
  moduleId: number
): Promise<ResponseVOListMenuVO> => {
  return new Promise(() => {})
}

/**
 *
 *查询我能访问门店菜单
 *
 **/
const findStoreMenuListUsingGET = (
  storeId: number
): Promise<ResponseVOListMenuVO> => {
  return new Promise(() => {})
}

export default {
  findAllMenuListUsingGET,

  findModuleMenuListUsingGET,

  findStoreMenuListUsingGET
}

export type AllMenuVO = {
  //是否显示（1显示 0隐藏）
  isShow: number,

  //二级菜单
  menuChildrenList: Array<AllMenuVO>,

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

  //目标
  menuTarget: string,

  //菜单类型（1菜单 2权限）
  menuType: number,

  //系统模块id
  moduleId: number,

  //系统模块名称
  moduleName: string,

  //父节点ID 0为顶级节点
  parentId: number,

  //菜单权重
  sort: number,

  //状态（0正常 1删除 2停用）
  status: number
}

export type AllModuleMenuVO = {
  //二级菜单
  menuChildrenList: Array<AllMenuVO>,

  //系统模块id
  moduleId: number,

  //系统模块名称
  moduleName: string
}

export type MenuVO = {
  //是否显示（1显示 0隐藏）
  isShow: number,

  //二级菜单
  menuChildrenList: Array<MenuVO>,

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

  //目标
  menuTarget: string,

  //菜单类型（1菜单 2权限）
  menuType: number,

  //父节点ID 0为顶级节点
  parentId: number,

  //菜单权重
  sort: number,

  //状态（0正常 1删除 2停用）
  status: number
}

export type ResponseVOListAllModuleMenuVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<AllModuleMenuVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type ResponseVOListMenuVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<MenuVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
