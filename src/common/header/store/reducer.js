const defaultState = {
  focused:false
}
const HeaderReducer = (state = defaultState , action)=>{

  if(action.type === 'search_focuse'){
    return {
      focused :true
    }
  }
  if(action.type === 'search_blur'){
    return {
      focused :false
    }
  }
  return state
}

export default HeaderReducer