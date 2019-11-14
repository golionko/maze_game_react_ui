import { AvatarActionTypes } from "../consts/ActionTypes";

const defaultState = {
  isLoading: false,
  errMsg: "",
  avatar: {}
};

const avatarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AvatarActionTypes.AVATAR_DATA_LAODING: {
      return {
        ...state,
        isLoading: true,
        errMsg: "",
        avatar: {}
      };
    }
    case AvatarActionTypes.AVATAR_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        avatar: action.avatar
      };
    }
    case AvatarActionTypes.AVATAR_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errMsg: action.errMsg,
        avatar: {}
      };
    }

    default:
      return state;
  }
};

export default avatarReducer;
