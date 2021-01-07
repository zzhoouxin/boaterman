/**
 *
 *添加组件
 *
 **/
const speechSpeechComponentAdd = (
  params: speechComponentAddRequest
): Promise<treeResponse> => {
  return new Promise(() => {})
}

/**
 *
 *修改组件
 *
 **/
const speechSpeechComponentEdit = (
  params: speechComponentEditRequest
): Promise<treeResponse> => {
  return new Promise(() => {})
}

/**
 *
 *删除组件
 *
 **/
const speechDeleteSpeechComponent = (
  componentUuid?: string
): Promise<treeResponse> => {
  return new Promise(() => {})
}

export default {
  speechSpeechComponentAdd,

  speechSpeechComponentEdit,

  speechDeleteSpeechComponent
}

export type speechComponentAddRequest = {
  //组件名称
  name?: string,

  //话术id
  speechId?: string,

  //父组件uuid
  parentUuid: string,

  //组件uuid
  componentUuid?: string,

  //
  list: Array<string>
}

export type speechComponentEditRequest = {
  //组件名称
  name?: string,

  //组件id
  componentUuid?: string,

  //
  list: Array<string>
}

export type treeResponse = {
  //组件UUID
  componentUuid?: string,

  //组件名称
  name?: string,

  //修改状态
  editStatus?: string,

  //使用状态
  useStatus?: string,

  //排序
  sortIndex?: string,

  //排序
  sortIndexABS?: string,

  //子组件
  subComponents: Array<treeResponse>,

  //
  list: Array<string>,

  //
  list2: Array<zhouxinUser>
}

export type zhouxinUser = {
  //这个返回 ID
  zhouxinId?: string,

  //这个返回 用户姓名
  zhouxinName?: string,

  //这个返回 用户性别
  zhouxinSex?: string,

  //这个返回 年龄
  zhouxinAge?: number,

  //
  list: Array<zhangling>
}

export type zhangling = {
  //这个返回 ID
  zhouxinId?: string,

  //这个返回 用户姓名
  zhouxinName?: string,

  //这个返回 用户性别
  zhouxinSex?: string,

  //这个返回 年龄
  zhouxinAge?: number,

  //
  list: Array<laowang>
}

export type laowang = {
  //这个返回 ID
  zhouxinId?: string,

  //这个返回 用户姓名
  zhouxinName?: string,

  //这个返回 用户性别
  zhouxinSex?: string,

  //这个返回 年龄
  zhouxinAge?: number,

  //
  list: Array<juncao>
}

export type juncao = {
  //这个返回 ID
  zhouxinId?: string,

  //这个返回 用户姓名
  zhouxinName?: string,

  //这个返回 用户性别
  zhouxinSex?: string,

  //这个返回 年龄
  zhouxinAge?: number,

  //
  list: Array<laowang>,

  //
  list22: Array<zhangling>,

  //
  list333: Array<zhouxinUser>,

  //
  list4444: juncao1
}

export type juncao1 = {
  //这个返回 ID
  zhouxinId?: string,

  //这个返回 用户姓名
  zhouxinName?: string,

  //这个返回 用户性别
  zhouxinSex?: string,

  //这个返回 年龄
  zhouxinAge?: number
}

export type BaseResponse = {}
