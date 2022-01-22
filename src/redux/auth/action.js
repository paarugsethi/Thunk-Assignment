import { authConstants } from "./actionTypes";

// ACTION CREATORS
export const loginSuccess = (token) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};
