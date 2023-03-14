import {
  GET_RESERVATIONS_COMMENTS,
  GET_RESERVATIONS_COMMENTS_ERROR,
  GET_RESERVATIONS_COMMENTS_LOADING,
} from "../actions";

const initialState = {
  reservationsComments: [],
  isLoading: true,
  isError: false,
};
const getReservationsComments = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS_COMMENTS:
      return {
        ...state,
        reservationsComments: action.payload,
      };
    case GET_RESERVATIONS_COMMENTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_RESERVATIONS_COMMENTS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getReservationsComments;
