import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import giftData from "../reducers/giftCard";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import getReservations from "../reducers/getReservations";
import signInToken from "../reducers/login.js";
import userChat from "../reducers/userChat";
import tournaments from "../reducers/getTournaments";
import userPreference from "../reducers/userPreference";
import userData from "../reducers/userData";
import users from "../reducers/usersReducer.js";
import postTournament from "../reducers/postTournament";
import registerUser from "../reducers/registerUser";
import getMe from "../reducers/meReducer";
import adminSignInToken from "../reducers/adminLogin";
import emailVerification from "../reducers/emailVerification";
import getProjectImgs from "../reducers/getProjectImgs";
import getTournamentsResults from "../reducers/getTournamentsResults";
import getTournamentsFixtures from "../reducers/getTournamentsFixtures";
import getOneTournamentParticipant from "../reducers/getOneTournamentParticipant";
import editOneTournamentParticipant from "../reducers/editOneTournamentParticipant";
import getTournamentsStructures from "../reducers/getTournamentsStructures";
import putMe from "../reducers/putMe";
import getReservationsComments from "../reducers/getReservationsComments";
const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1a2g3le",
    }),
  ],
};

const bigReducer = combineReducers({
  giftData: giftData,
  accessToken: signInToken,
  userChat: userChat,
  tournaments: tournaments,
  preference: userPreference,
  userData: userData,
  users: users,
  tournament: postTournament,
  registerUser: registerUser,
  me: getMe,
  adminToken: adminSignInToken,
  emailVerification: emailVerification,
  projectImgs: getProjectImgs,
  results: getTournamentsResults,
  fixtures: getTournamentsFixtures,
  participant: getOneTournamentParticipant,
  editParticipant: editOneTournamentParticipant,
  structures: getTournamentsStructures,
  reservations: getReservations,
  putMe: putMe,
  reservationsComments: getReservationsComments,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
