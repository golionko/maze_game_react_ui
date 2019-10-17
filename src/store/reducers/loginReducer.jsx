import ActionTypes from '../consts/ActionTypes'
import _ from "lodash";

const defaultState = {
    logged : false
  };

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            console.log("LOGIN" , state.logged)
            let newState = _.cloneDeep(state);
            newState.logged = true;
            return newState;
        }

        case ActionTypes.LOGOUT: {
            console.log("LOGOUT" , state.logged)
            let newState = _.cloneDeep(state);
            newState.logged = false;
            return newState;
        }

        default:
            return state;

    }
}

export default loginReducer;

