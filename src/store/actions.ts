import {productsTypeFetch, dispatchActionTypes } from "../types"

export const loadProducts = (products: productsTypeFetch):dispatchActionTypes => ({type: "loadProducts", payload: products})
