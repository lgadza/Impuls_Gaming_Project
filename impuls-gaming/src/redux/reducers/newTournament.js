import { NEW_TOURNAMENT_DATA } from "../actions";

const initialState = {
  data: [],
};
const newTournament = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TOURNAMENT_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};
export default newTournament;
