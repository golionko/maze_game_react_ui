import ActionTypes from '../consts/ActionTypes';

const defaultState = {
    logged : false
  };

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            return {
                ...state,
                logged: true
              };
        }

        case ActionTypes.LOGOUT: {
            return {
                ...state,
                logged: false
              };
        }

        default:
            return state;

    }
}

export default loginReducer;

