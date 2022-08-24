import * as types from "../constant/user.constant";
export default function setUserDataReducer(
  state: any = { userData: {} },
  action: any
) {
  switch (action.type) {
    case types.CREATE_NEW_ACCOUNT_LOADING: {
      return {
        loading: true,
        userData: {},
      };
    }
    case types.LOGIN_USER_LOADING: {
      return {
        loading: true,
        userData: {},
      };
    }
    case types.CREATE_NEW_ACCOUNT_SUCCESS: {
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
        loading: false,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
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
