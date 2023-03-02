import {configureStore} from '@reduxjs/toolkit';
import {RenmissApi} from '../features/services/api';
import createShopSlice from '../features/createshop';
import invoiceSlice from '../features/invoice';

export const store = configureStore({
  // reducers
  reducer: {
    // API
    [RenmissApi.reducerPath]: RenmissApi.reducer,
    createShopSlice,
    invoiceSlice,
  },
  // middlewares
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(RenmissApi.middleware),
  ignoredState: true,
  // devTools
  devTools: true,
});
