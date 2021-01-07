/**
 *
 *接口信息小标题
 *
 **/
const homeIndex = (params: homeBaseRequest): Promise<homeResponse> => {
  return new Promise(() => {})
}

/**
 *
 *第二个接口啦
 *
 **/
const homeGetName = (id?: string): Promise<homeBaseRequest> => {
  return new Promise(() => {})
}

export default {
  homeIndex,

  homeGetName
}

export type homeBaseRequest = {
  //这是1个随便什么ID
  id?: "0" | "1",

  //用户姓名
  name?: "male" | "female",

  //这是什么年龄
  age: number
}

export type homeResponse = {
  //id
  id?: number,

  //用户姓名
  name?: string,

  //用户性别
  sex?: "male" | "female",

  //年龄
  age?: number,

  //
  info: zhouxinUser,

  //
  infoList: Array<zhouxinUser>
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
  list: Array<zhouxinUser>
}

export type BaseResponse = {}
