import { AvatarActionTypes } from "../consts/ActionTypes";
import { remote } from "../../util/remote";

export const avatarDataLoading = () => ({
  type: AvatarActionTypes.AVATAR_DATA_LAODING
});

export const avatarDataSuccess = avatar => ({
  type: AvatarActionTypes.AVATAR_DATA_SUCCESS,
  avatar: avatar
});

export const avatarDataFailure = () => ({
  type: AvatarActionTypes.AVATAR_DATA_FAILURE
});

export const getAvatarData = id => dispatch => {
  dispatch(avatarDataLoading());

  remote().get('/avatar/' + id)
  .then(function (response) {
    dispatch(avatarDataSuccess(response.data));
  })
  .catch(function (error) {
    dispatch(avatarDataFailure());
  });
};
