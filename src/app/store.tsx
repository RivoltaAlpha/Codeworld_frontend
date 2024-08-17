import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { FLUSH,  REHYDRATE,   PAUSE,  PERSIST,  PURGE,  REGISTER,} from "redux-persist";
import { persistStore, persistReducer,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersAPI } from "../features/users/usersAPI";
import { registrationAPI } from "../features/register/register";
import { loginApi } from "../features/login/loginAPI";
import { projectsApi } from "../features/projects/projectsAPI"
import UserAuthReducer from "../features/login/loginSlice";
import userReducer from "../features/users/userSlice";
import projectReducer from "../features/projects/projectSlice"
import taskReducer from "../features/tasks/tasksSlice"
import { tasksAPI } from "../features/tasks/tasksAPI";


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
  [projectsApi.reducerPath]: projectsApi.reducer,
  [tasksAPI.reducerPath]: tasksAPI.reducer,
  userAuth: UserAuthReducer,
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      usersAPI.middleware,
      registrationAPI.middleware,
      loginApi.middleware,
      projectsApi.middleware,
      tasksAPI.middleware
      // Add other middleware here
    ),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };