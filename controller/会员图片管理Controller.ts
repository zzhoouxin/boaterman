/**
 *
 *图片列表
 *
 **/
const queryListUsingGET_13 = (
  iconModule: number
): Promise<ResponseVOListIconImgVO> => {
  return new Promise(() => {})
}

export default {
  queryListUsingGET_13
}

export type IconImgVO = {
  //图片列表
  iconImgList: Array<string>,

  //icon类别：0酷炫 1可爱 2国潮
  iconType: number
}

export type ResponseVOListIconImgVO = {
  //接口错误码
  code: number,

  //接口返回数据
  data: Array<IconImgVO>,

  //接口消息
  message: string,

  //接口状态
  success: boolean
}

export type BaseResponse = {}
