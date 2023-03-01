import {
  GET_TOURNAMENTS_RESULTS,
  GET_TOURNAMENTS_RESULTS_ERROR,
  GET_TOURNAMENTS_RESULTS_LOADING,
} from "../actions";

const initialState = {
  results: [],
  isLoading: GET_TOURNAMENTS_RESULTS_LOADING,
  isError: GET_TOURNAMENTS_RESULTS_ERROR,
};
const getTournamentsResults = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_TOURNAMENTS_RESULTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_TOURNAMENTS_RESULTS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getTournamentsResults;
