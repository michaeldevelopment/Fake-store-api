import initialState from "../initialState";

function productsReducer(prevState = initialState, actions) {
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
