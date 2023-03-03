import {
  EDIT_ONE_TOURNAMENT_PARTICIPANT,
  EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR,
  EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING,
} from "../actions";

const initialState = {
  participant: "",
  isLoading: true,
  isError: false,
};
const editOneTournamentParticipant = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ONE_TOURNAMENT_PARTICIPANT:
      return {
        ...state,
        participant: action.payload,
      };
    case EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default editOneTournamentParticipant;
