import * as types from './itemActionTypes'
import items from './items'

export const loadItems = () => {
  return (dispatch) => {
   dispatch({
     type: types.LOAD_ITEMS,
     payload: items
   })
  }
}


export const findItem = (id) => {
  return items.find(item => {
    return item.id === parseInt(id)
  })
}


export const loadFoundItem = id => {
  return dispatch => {
    dispatch({
      type: types.LOAD_FOUND_ITEM,
      payload: findItem(id)
    })
  }
}

