import {
  EMAIL_VERIFICATION_ERROR,
  EMAIL_VERIFICATION_LOADING,
  EMAIL_VERIFICATION,
} from "../actions";

const initialState = {
  response: "",
  isLoading: true,
  isError: false,
};
const emailVerification = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_VERIFICATION:
      return {
        ...state,
        response: action.payload,
      };
    case EMAIL_VERIFICATION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case EMAIL_VERIFICATION_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default emailVerification;
