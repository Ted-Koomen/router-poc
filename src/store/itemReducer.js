import * as types from './itemActionTypes'
import initialState from './initialState'

export default function itemsReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_ITEMS:
      return Object.assign([], state, {items: action.payload})
    case types.LOAD_FOUND_ITEM:
    return Object.assign({}, state, {foundItem: action.payload})
    default:
      return state
  }
}