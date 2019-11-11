import ActionTypes from '../consts/ActionTypes';
import {login, getCurrentUser} from '../../util/auth'
import {setAccessToken} from '../../util/remote';

export const loginLoading = () => ({
  type: ActionTypes.LOGIN_LAODING
});

export const loginSuccess = (user) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  user: user
});

export const loginFailure = () => ({
  type: ActionTypes.LOGIN_FAILURE
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
});

export const performUserLogin = (loginRequest) => dispatch => {
  dispatch(loginLoading());
  login(loginRequest)
    .then(response => {
      setAccessToken(response.data.accessToken);
      getCurrentUser().then(response => dispatch(loginSuccess(response.data.username)));
    }).catch(err => dispatch(loginFailure(err)))
};

