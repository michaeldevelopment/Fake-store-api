const initialState = [1, 2, 3, 4, 5];

function reducer(prevState = initialState, actions) {
  switch (actions.type) {
    case "LOAD_TODOS":
      return {
        ...prevState,
        todos: [1, 2, 3, 4, 5, 6],
      };
    default:
      return prevState;
  }
}

export default reducer;
