import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({ user: userReducer, posts: postsReducer });

export default reducer;