import { LoginActionTypes } from "../consts/ActionTypes";

const defaultState = {
  isLoading: false,
  logged: false,
  errMsg: "",
  user: {}
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_LAODING: {
      return {
        ...state,
        isLoading: true,
        errMsg: "",
        logged: false,
        user: {}
      };
    }
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        logged: true,
        isLoading: false,
        user: action.user
      };
    }
    case LoginActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        logged: false,
        errMsg: action.errMsg,
        user: {}
      };
    }
    case LoginActionTypes.LOGOUT: {
      return {
        ...state,
        isLoading: false,
        logged: false,
        errMsg: "",
        user: {}
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
