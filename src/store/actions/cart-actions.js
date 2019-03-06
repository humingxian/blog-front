import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from './actions-type'

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    // payload: { product: product, quantity: quantity, unitCost: unitCost }
    payload: { product, quantity, unitCost } // 写法同上面，es6健与值相同时可以只写一个
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}
