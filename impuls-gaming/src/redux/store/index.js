import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import giftData from "../reducers/giftCard";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import loginData from "../reducers/login";
import userChat from "../reducers/userChat";
import tournaments from "../reducers/getTournaments";
import userPreference from "../reducers/userPreference";
import userData from "../reducers/userData";
import users from "../reducers/usersReducer.js";
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
  log: loginData,
  userChat: userChat,
  tournaments: tournaments,
  preference: userPreference,
  userData: userData,
  users: users,
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
