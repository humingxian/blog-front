
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/actions-type'

const products = {
  productsList: [
    {
      name: 'hudada',
      age: 18
    }
  ]
}

// 该模块管理 shoppingCart 里的数据
export default function(state = products, action) {

  switch(action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        productsList: [...state.productsList, action.payload]
      }
    }

    case UPDATE_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.map(item => {return item.name === action.payload.name ? action.payload : item})
      }
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.filter(item => {return item.name !== action.payload.name})
      }
    }

    default: 
      return state

  }
}