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
  componentUuid?: string
}

export type speechComponentEditRequest = {
  //组件名称
  name?: string,

  //组件id
  componentUuid?: string
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
