export const addCollect = (detail)=>{
  return{
    type: 'ADD_COLLECT',
    detail
  }
}

export const cancelCollect = (id)=>{
  return{
    type: 'CANCEl_COLLECT',
    id
  }
}