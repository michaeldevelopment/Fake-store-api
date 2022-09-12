import { productsInitialState } from "../initialState";

function productsReducer(prevState = productsInitialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case "loadProducts":
      return {
        ...prevState,
        products: payload,
      };
    default:
      return prevState;
  }
}

export default productsReducer;
