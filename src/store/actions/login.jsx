import { LoginActionTypes } from "../consts/ActionTypes";
import { login, getCurrentUser } from "../../util/auth";
import { setAccessToken } from "../../util/remote";

export const loginLoading = () => ({
  type: LoginActionTypes.LOGIN_LAODING
});

export const loginSuccess = user => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  user: user
});

export const loginFailure = () => ({
  type: LoginActionTypes.LOGIN_FAILURE
});

export const logout = () => ({
  type: LoginActionTypes.LOGOUT
});


export const performUserLogin = loginRequest => dispatch => {
  dispatch(loginLoading());
  login(loginRequest)
    .then(response => {
      setAccessToken(response.data.accessToken);
      getCurrentUser().then(response =>
        dispatch(loginSuccess(response.data))
      );
    })
    .catch(err => dispatch(loginFailure(err)));
};
