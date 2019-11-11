import ActionTypes from '../consts/ActionTypes';

const defaultState = {
    isLoading: false,
    logged: false,
    errMsg: '',
    user: {}
  };

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_LAODING: {
            return {
                ...state,
                isLoading: true,
                errMsg: '',
                logged: false,
                user : {}
              };
        }
        case ActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                logged: true,
                isLoading: false,
                user: action.user
              };
        }
        case ActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                logged: false,
                errMsg: action.errMsg,
                user : {}
              };
        }
        case ActionTypes.LOGOUT: {
            return {
                ...state,
                isLoading: false,
                logged: false,
                errMsg: '',
                user: {}
              };
        }

        default:
            return state;

    }
}

export default loginReducer;

