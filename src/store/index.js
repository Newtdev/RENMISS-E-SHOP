import {configureStore} from '@reduxjs/toolkit';
import {RenmissApi} from '../features/services/api';
import createShopSlice from '../features/createshop';

export const store = configureStore({
  // reducers
  reducer: {
    // API
    [RenmissApi.reducerPath]: RenmissApi.reducer,
    createShopSlice,
  },
  // middlewares
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(RenmissApi.middleware),
  ignoredState: true,
  // devTools
  devTools: true,
});
