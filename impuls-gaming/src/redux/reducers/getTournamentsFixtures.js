import {
  GET_TOURNAMENTS_FIXTURES,
  GET_TOURNAMENTS_FIXTURES_ERROR,
  GET_TOURNAMENTS_FIXTURES_LOADING,
} from "../actions";

const initialState = {
  fixtures: [],
  isLoading: true,
  isError: false,
};
const getTournamentsFixtures = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS_FIXTURES:
      return {
        ...state,
        fixtures: action.payload,
      };
    case GET_TOURNAMENTS_FIXTURES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_TOURNAMENTS_FIXTURES_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getTournamentsFixtures;
