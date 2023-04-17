
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoSlice from "../../shared/store/todoSlice"
import storage from "redux-persist/es/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import sessionSlice from "@/entities/session/sessionSlice";
import userSlice from "@/shared/store/userSlice";

export const rootReducer = combineReducers({
    todos: todoSlice,
    session: sessionSlice,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['session']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const setupStore  = () => {
    return configureStore({
        reducer: pReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            });
        },
    })
}

export const store = setupStore()

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
