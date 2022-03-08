const initialState = { products: [], currentProduct: {}, isLoading: true };

function reducers(prevState = initialState, actions) {
  switch (actions.type) {
    case "loadProducts":
      return {
        ...prevState,
        products: actions.payload,
      };
    case "showLoader":
    case "hideLoader":
      return {
        ...prevState,
        isLoading: actions.payload,
      };
    default:
      return prevState;
  }
}

export default reducers;
