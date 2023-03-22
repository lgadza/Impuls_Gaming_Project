import { THEME_DATA, THEME_DATA_ERROR, THEME_DATA_LOADING } from "../actions";

const initialState = {
  theme: undefined,
  isLoading: true,
  isError: false,
};
const themeData = (state = initialState, action) => {
  switch (action.type) {
    case THEME_DATA:
      return {
        ...state,
        theme: action.payload,
      };
    case THEME_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case THEME_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default themeData;
