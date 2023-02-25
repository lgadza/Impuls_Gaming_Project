import {
  GET_PROJECT_IMAGES,
  GET_PROJECT_IMAGES_ERROR,
  GET_PROJECT_IMAGES_LOADING,
} from "../actions";

const initialState = {
  projectImgs: [],
  isLoading: GET_PROJECT_IMAGES_LOADING,
  isError: GET_PROJECT_IMAGES_ERROR,
};
const getProjectImgs = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_IMAGES:
      return {
        ...state,
        projectImgs: action.payload,
      };
    case GET_PROJECT_IMAGES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_PROJECT_IMAGES_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default getProjectImgs;
