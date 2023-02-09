import {
  REGISTER_USER,
  REGISTER_USER_LOADING,
  REGISTER_USER_ERROR,
} from "../actions";

const initialState = {
  user: "",
  isLoading: true,
  isError: false,
};

const registerUser = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default registerUser;
