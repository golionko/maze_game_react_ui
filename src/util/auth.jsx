import {remote, getAccessToken} from './remote';

export const getCurrentUser = () => getAccessToken()
    ? remote().get('/user/me')
    : Promise.reject("No access token set.");

export const login = (loginRequest) => remote().post('auth/signin',loginRequest)
