import {
  GET_RESERVATIONS,
  GET_RESERVATIONS_ERROR,
  GET_RESERVATIONS_LOADING,
} from "../actions";

const initialState = {
  reservations: [],
  isLoading: true,
  isError: false,
};
const getReservations = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    case GET_RESERVATIONS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_RESERVATIONS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getReservations;
