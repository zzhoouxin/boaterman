/**
 *
 *SpeechController
 *@Controller
 **/

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
 *获取话术组件树
 *
 **/
const speechSpeechGetComponentTree = (
  params: componentTreeRequest
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

/**
 *
 *组件排序
 *
 **/
const speechSpeechComponentSort = (
  params: speechComponentSortRequest
): Promise<treeResponse> => {
  return new Promise(() => {})
}

/**
 *
 *画布流程详情页
 *
 **/
const speechGetSpeechComponentDetail = (
  params: getSpeechComponentDetailRequest
): Promise<treeResponse> => {
  return new Promise(() => {})
}

export default {
  speechSpeechComponentAdd,

  speechSpeechComponentEdit,

  speechSpeechGetComponentTree,

  speechDeleteSpeechComponent,

  speechSpeechComponentSort,

  speechGetSpeechComponentDetail
}

export type componentTreeRequest = {
  //话术id
  speechId?: string,

  //环境
  branch?: string
}

export type speechComponentAddRequest = {
  //组件名称
  name?: string,

  //话术id
  speechId?: string,

  //父组件uuid
  parentUuid: string,

  //组件uuid
  componentUuid?: string
}

export type speechComponentEditRequest = {
  //组件名称
  name?: string,

  //组件id
  componentUuid?: string
}

export type speechComponentSortRequest = {
  //
  data: Array<sortRequestItem>
}

export type sortRequestItem = {
  //组件UUID
  componentUuid?: string,

  //排序
  sortIndex?: number,

  //话术id
  speechId?: string
}

export type getSpeechComponentDetailRequest = {
  //组件UUID
  componentUuid?: string,

  //环境
  branch?: string,

  //话术id
  speechId?: string
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
  subComponents: Array<treeResponse>
}

export type BaseResponse = {}
