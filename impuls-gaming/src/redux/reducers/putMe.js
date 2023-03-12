import { PUT_ME, PUT_ME_ERROR, PUT_ME_LOADING } from "../actions";

const initialState = {
  me: undefined,
  isLoading: true,
  isError: false,
};
const putMe = (state = initialState, action) => {
  switch (action.type) {
    case PUT_ME:
      return {
        ...state,
        me: action.payload,
      };
    case PUT_ME_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case PUT_ME_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default putMe;
