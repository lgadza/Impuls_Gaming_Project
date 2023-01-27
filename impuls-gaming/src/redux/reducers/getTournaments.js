import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
} from "../actions";

const initialState = {
  tournaments: [],
  isLoading: GET_TOURNAMENTS_LOADING,
  isError: GET_TOURNAMENTS_ERROR,
};
const newTournament = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: [...state.tournaments, action.payload],
      };
    case GET_TOURNAMENTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_TOURNAMENTS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default newTournament;
