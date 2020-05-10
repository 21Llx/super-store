const ADD_COLLECT = 'ADD_COLLECT'
const CANCEl_COLLECT = 'CANCEl_COLLECT'

const collect = []

export default (state = collect, action) => {
  switch (action.type) {
    case ADD_COLLECT:
      state.unshift(action.detail)
      return state
    case CANCEl_COLLECT:
      state.forEach((v,i)=>{
        if(v.id===action.id){
          state.splice(i,1)
        }
      })
      return state
    default:
      return state
  }
}
