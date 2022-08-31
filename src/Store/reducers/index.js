import { combineReducers } from "redux";
import loaderReducer from "./loader";
import productsReducer from "./products";

export default combineReducers({ loaderReducer, productsReducer });
