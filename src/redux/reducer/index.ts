import { combineReducers } from "redux";
import setUserDataReducer from "./user.reducer";
const reducers = {
  userLogin: setUserDataReducer,
};
export default combineReducers(reducers);
