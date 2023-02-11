import {
  GET_LOGIN_ACCESSTOKEN_ERROR,
  GET_LOGIN_ACCESSTOKEN_LOADING,
  GET_LOGIN_ACCESSTOKEN,
} from "../actions";

const initialState = {
  accessToken: "",
  isLoading: true,
  isError: false,
};
const signInToken = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_ACCESSTOKEN:
      return {
        ...state,
        data: action.payload,
      };
    case GET_LOGIN_ACCESSTOKEN_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_LOGIN_ACCESSTOKEN_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default signInToken;
