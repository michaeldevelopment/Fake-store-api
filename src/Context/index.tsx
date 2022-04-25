import React, { createContext, useContext, useMemo, useReducer } from "react";

import { dispatchActionTypes, initialStateReducer } from "../types";

import initialState from "../store/initialState";
import reducer from "../store/reducer";

const contextReducerInterface = {
  state: initialState,
  dispatch: () => null,
};

export const productsContext = createContext<{
  state: initialStateReducer;
  dispatch: React.Dispatch<dispatchActionTypes>;
}>(contextReducerInterface);

export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <>
      <productsContext.Provider value={value}>
        {children}
      </productsContext.Provider>
    </>
  );
};

export const useSelector = () => {
  const { state } = useContext(productsContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(productsContext);
  return dispatch;
};
