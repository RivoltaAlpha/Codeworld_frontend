import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersAPI } from "../features/users/usersAPI";
import { registrationAPI } from "../features/register/register";
import { loginApi } from "../features/login/loginAPI";
import { projectsApi } from "../features/projects/projectsAPI"
import UserAuthReducer from "../features/login/loginSlice";
import tasksApi from "../features/tasks/tasksAPI";
import userReducer from "../features/users/userSlice";
import projectReducer from "../features/projects/projectSlice"


const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    usersAPI.reducerPath,
    registrationAPI.reducerPath,
    loginApi.reducerPath,
  ],
  whitelist: [loginApi.reducerPath],
};

const rootReducer = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,
  [registrationAPI.reducerPath]: registrationAPI.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  userAuth: UserAuthReducer,
  user: userReducer,
  project: projectReducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    }).concat(
      usersAPI.middleware,
      registrationAPI.middleware,
      loginApi.middleware,
      tasksApi.middleware,
      projectsApi.middleware,
      // Add other middleware here
    ),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };