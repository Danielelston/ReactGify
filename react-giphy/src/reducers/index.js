// import { VisibilityFilters } from './actions'

const initialState = {
  test: []
}

function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
 
  return state
}

export default rootReducer