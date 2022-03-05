import { createStore } from "redux";
import reducer from "./reducer/combineReducers";

const store = createStore(reducer);

export default store;