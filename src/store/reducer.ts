import initialState from "./initialState"
import {initialStateReducer, dispatchActionTypes } from "../types"

export default function reducer(prevState:initialStateReducer = initialState, action: dispatchActionTypes) {
  switch(action.type) {
    case 'loadProducts':
      return {...prevState, products: action.payload}
    default:
      return {...prevState}
  }
}
