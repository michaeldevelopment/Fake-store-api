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

type productsTypeFetch = Array<productInterface>

export interface productsInterface {
  products: productsTypeFetch
}

export interface contextInterface extends productsInterface {
  getProducts: (products: productsTypeFetch) => void
}

export interface propsProductCart {
  title: string,
  image: string,
  id: number,
}
