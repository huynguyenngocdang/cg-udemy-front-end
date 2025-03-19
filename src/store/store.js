import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {cartReducer} from '../features/cartSlice';
import courseReducer from "../features/courseSlice";

const persistConfig = {
    key: 'cart',
    storage,
    version: 1,
    migrate: createMigrate(
        [
            {
                version: 1,
                migration: (state, version) => {

                    // Add your migrations logic here
                },
            },
        ],
        {debug: false}
    ),
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        course: courseReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persist = persistStore(store);
