import {
  GET_ONE_TOURNAMENT_PARTICIPANT,
  GET_ONE_TOURNAMENT_PARTICIPANT_ERROR,
  GET_ONE_TOURNAMENT_PARTICIPANT_LOADING,
} from "../actions";

const initialState = {
  participant: "",
  isLoading: true,
  isError: false,
};
const getOneTournamentParticipant = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_TOURNAMENT_PARTICIPANT:
      return {
        ...state,
        participant: action.payload,
      };
    case GET_ONE_TOURNAMENT_PARTICIPANT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ONE_TOURNAMENT_PARTICIPANT_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getOneTournamentParticipant;
