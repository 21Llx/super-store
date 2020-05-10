export const joinCart = (detail)=>{
  return{
    type: 'JOIN_CART',
    detail
  }
}
export const addCart = (id)=>{
  return{
    type: 'ADD_CART',
    id
  }
}

export const subCart = (id)=>{
  return{
    type: 'SUB_CART',
    id
  }
}

export const chooseCart = (id)=>{
  return{
    type: 'CHOOSE_CART',
    id
  }
}

export const payCart = (carts)=>{
  return{
    type: 'PAY_CART',
    carts
  }
}