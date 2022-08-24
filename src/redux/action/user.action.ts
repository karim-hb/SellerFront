import { post, responseValidator } from "../../script/api";
import useLocalStorage from "../../script/useLocalStorage";
import { API } from "../../seller.api";
import * as types from "../constant/user.constant";
export const createNewAccountAction = (data: any) => (dispatch: Function) => {
  dispatch({
    type: types.CREATE_NEW_ACCOUNT_LOADING,
  });
  post(API.auth.create_user, data).then((res: any) => {
    if (responseValidator(res) && res.data) {
      post(API.auth.genrate_token, data).then((response: any) => {
        if (responseValidator(response) && response.data) {
          localStorage.setItem("_s", JSON.stringify(response.data.token));
          dispatch({
            type: types.CREATE_NEW_ACCOUNT_SUCCESS,
            payload: {
              username: data.name,
              email: data.email,
            },
          });
        } else {
          dispatch({
            type: types.CREATE_NEW_ACCOUNT_FAILD,
          });
        }
      });
    } else {
      dispatch({
        type: types.CREATE_NEW_ACCOUNT_FAILD,
      });
    }
  });
};
export const loginAction = (data: any) => (dispatch: Function) => {
  dispatch({
    type: types.LOGIN_USER_LOADING,
  });
  post(API.auth.genrate_token, data).then((response: any) => {
    if (responseValidator(response) && response.data) {
      localStorage.setItem("_s", JSON.stringify(response.data.token));

      dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: {
          email: data.email,
        },
      });
    } else {
      dispatch({
        type: types.LOGIN_USER_FAILD,
      });
    }
  });
};
export const logoutAction = (data: any) => (dispatch: Function) => {
  localStorage.removeItem("_s");
  dispatch({
    type: types.LOGOUT_USER,
  });
};
