import { combineReducers } from "redux";
import login from "./login";
import search from "./search";

const reducer = combineReducers({
  login,
  search,
});

export default reducer;
