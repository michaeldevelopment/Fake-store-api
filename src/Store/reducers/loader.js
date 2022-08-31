import initialState from "../initialState";

function loaderReducer(prevState = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case "showLoader":
    case "hideLoader":
      return {
        ...prevState,
        isLoading: payload,
      };
    default:
      return prevState;
  }
}

export default loaderReducer;
