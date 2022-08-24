import { combineReducers } from "redux";
import setUserDataReducer from "./user.reducer";
const reducers = {
  userData: setUserDataReducer,
};
export default combineReducers(reducers);
