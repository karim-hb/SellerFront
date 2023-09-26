import * as types from "../constant/user.constant";
export default function setUserDataReducer(
  state: any = { userInfo: {} },
  action: any
) {
  switch (action.type) {
    case types.CREATE_NEW_ACCOUNT_LOADING: {
      return {
        loading: true,
        userInfo: {},
      };
    }
    case types.LOGIN_USER_LOADING: {
      return {
        loading: true,
        userInfo: {},
      };
    }
    case types.CREATE_NEW_ACCOUNT_SUCCESS: {
      return { loading: false, userInfo: action.payload };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        userInfo: { ...state.userData, ...action.payload },
        loading: false,
      };
    }
    case types.CREATE_NEW_ACCOUNT_FAILD: {
      return {
        error: true,
      };
    }
    case types.LOGIN_USER_FAILD: {
      return {
        error: true,
      };
    }
    case types.LOGOUT_USER: {
      return {
        userData: {},
      };
    }

    default:
      return state;
  }
}
