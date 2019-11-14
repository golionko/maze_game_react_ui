import { AvatarActionTypes } from "../consts/ActionTypes";

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

export const getAvatarData = userId => dispatch => {
  dispatch(avatarDataLoading());
  dispatch(
    avatarDataSuccess({
      id: 1,
      name: "Mr Reaper",
      level: 1,
      strength: 3,
      dexterity: 5,
      luck: 7,
      constitution: 5,
      xp: 25,
      maxXp: 135,
      energy: 23,
      maxEnergy: 100,
      hp: 67,
      maxHp: 98
    })
  );
};
