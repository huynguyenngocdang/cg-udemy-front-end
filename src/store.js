// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './slice'

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './slice';
import productReducer from "./features/productSlice";

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
    { debug: false }
  ),
};

const persisredCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: persisredCartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
