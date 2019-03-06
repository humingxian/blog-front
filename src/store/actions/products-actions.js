import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './actions-type'

export function addProducts(name, age) {
  return {
    type: ADD_PRODUCT,
    payload: {
      name,
      age
    }
  }
}

export function updateProducts(name, age) {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      name,
      age
    }
  }
}

export function deleteProducts(name) {
  return {
    type: DELETE_PRODUCT,
    payload: {
      name
    }
  }
}