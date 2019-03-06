// src/reducers/cart-reducer.js

import  { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART }  from '../actions/actions-type';

// 初始化数据
const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ],
  username: 'hudada'
}

// 该模块管理 shoppingCart 里的数据
export default function(state=initialState, action) {
  switch (action.type) {
    // 添加到购物车
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload] // 只更新了cart数据
      }
    }

    // 更新购物车
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }

    // 删除购物车商品
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }

    default:
      return state;
  }
}