
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoSlice from "../../shared/store/todoSlice"
import storage from "redux-persist/es/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

export const rootReducer = combineReducers({
    todos: todoSlice
})

// const persistConfig = {
//     key: 'root',
//     storage: storage,
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

const setupStore  = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export const store = setupStore()

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
