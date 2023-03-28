import { ACTIVE_NAV } from "../actions";

const initialState = {
  nav: "home",
};
const activeNav = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_NAV:
      return {
        ...state,
        nav: action.payload,
      };

    default:
      return state;
  }
};
export default activeNav;
