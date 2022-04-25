declare module '*.jpg';

type ratingType =  {
  rate: number,
  count: number
}

export interface productInterface {
  id: number
  title: string
  price: number
  description: string 
  category: string
  image: string
  rating: ratingType
}

type productsTypeFetch = productInterface[] 

export interface initialStateReducer {
  products: productInterface[]
}


// export interface contextInterface extends productsInterface {
//   getProducts: (products: productsTypeFetch) => void
// }

export interface propsProductCart {
  title: string,
  image: string,
  id: number,
}

interface actionType {
  type: string,
}

interface actionLoadProducts extends actionType {
  type: "loadProducts",
  payload: productsTypeFetch 
}

export type dispatchActionTypes = actionLoadProducts 


