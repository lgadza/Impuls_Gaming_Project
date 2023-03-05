import {
  GET_TOURNAMENTS_STRUCTURES,
  GET_TOURNAMENTS_STRUCTURES_ERROR,
  GET_TOURNAMENTS_STRUCTURES_LOADING,
} from "../actions";

const initialState = {
  structures: [],
  isLoading: true,
  isError: false,
};
const getTournamentsStructures = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS_STRUCTURES:
      return {
        ...state,
        structures: action.payload,
      };
    case GET_TOURNAMENTS_STRUCTURES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_TOURNAMENTS_STRUCTURES_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getTournamentsStructures;
