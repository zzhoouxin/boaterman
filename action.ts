

  /**
  *
  *添加组件 
  *
  **/
  const speechSpeechComponentAdd = (params:{id:string,age:number,height?:number} & componentTreeRequest):treeResponse=>{ const data = {} as any; return data;}

  /**
  *
  *添加组件 
  *
  **/
  const speechSpeechComponentAddaaa = (params:{zhouxinId:string,zhouxinAge:number,zhouuxinHeight?:number}):treeResponse=>{ const data = {} as any; return data;}

  /**
  *
  *添加组件 
  *
  **/
  const speechAaaaaa = (params:{zhouxinId:string} & speechComponentAddRequest&treeResponse):zhouxinResponse=>{ const data = {} as any; return data;}

  /**
  *
  *添加组件 
  *
  **/
  const speechBbbbb = (params:componentTreeRequest):treeResponse=>{ const data = {} as any; return data;}

  /**
  *
  *添加组件 
  *
  **/
  const speechBbbbbsss = ():BaseResponse=>{ const data = {} as any; return data;}



  export type componentTreeRequest = {
  
    //话术id 
    speechId?: string  
  
    //环境 
    branch?: string  
  
  }

  export type speechComponentAddRequest = {
  
    //组件名称 
    name?: string  
  
    //话术id 
    speechId?: string  
  
    //父组件uuid 
    parentUuid: string  
  
    //组件uuid 
    componentUuid?: string  
  
  }

  export type treeResponse = {
  
    //组件UUID 
    componentUuid?: string  
  
    //组件名称 
    name?: string  
  
    //修改状态 
    editStatus?: string  
  
    //使用状态 
    useStatus?: string  
  
    //排序 
    sortIndex?: string  
  
    //排序 
    sortIndexABS?: string  
  
    //子组件 
    subComponents:  Array <treeResponse>
  
  }

  export type zhouxinResponse = {
  
    //组件名称 
    name?: string  
  
  }




export type BaseResponse = {}