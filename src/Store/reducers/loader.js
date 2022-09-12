import { loaderInitialState } from "../initialState";

function loaderReducer(prevState = loaderInitialState, actions) {
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
