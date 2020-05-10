const ADD_CART = 'ADD_CART'
const SUB_CART = 'SUB_CART'
const JOIN_CART = 'JOIN_CART'
const CHOOSE_CART = 'CHOOSE_CART'
const PAY_CART = 'PAY_CART'
const cart = []

export default (state = cart, action) => {
  switch (action.type) {
    case JOIN_CART:
      console.log(action.detail)
      action.detail.total = 1
      state.unshift(action.detail)
      return state
    case ADD_CART:
      return (state.map(v => {
        if (v.id === action.id) {
          v.total++
        }
        return v
      }))
    case SUB_CART:
      return (state.map(v => {
        if (v.id === action.id) {
          if (v.total > 0) {
            v.total--
          }
        }
        return v
      }))
    case CHOOSE_CART:
      return (state.map(v => {
        if (v.id === action.id) {
          v.choose = !v.choose
        }
        return v
      }))
    case PAY_CART:
      return action.carts
    default:
      return state
  }
}
