import {
  LOG_IN_DATA,
  LOG_IN_DATA_ERROR,
  LOG_IN_DATA_LOADING,
} from "../actions";

const initialState = {
  data: undefined,
  isLoading: true,
  isError: false,
};
const loginData = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case LOG_IN_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOG_IN_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default loginData;
