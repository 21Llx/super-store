const BUYGOODS = 'BUYGOODS'

const order = []

export default (state = order, action) => {
  switch (action.type) {
    case BUYGOODS:
      if(Array.isArray(action.goods)){
        action.goods.forEach(v=>{
          state.unshift(v)
        })
        return state
      }
      action.goods.total = 1
      state.unshift(action.goods)
      return state
    default:
      return state
  }
}