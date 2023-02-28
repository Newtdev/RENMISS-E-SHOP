import {createSlice} from '@reduxjs/toolkit';

const createShopSlice = createSlice({
  name: 'create',
  initialState: {
    isActive: false,
    isLoading: false,
  },
  reducers: {
    notActive: (state, active) => {
      state.isActive = false;
    },
    active: (state, active) => {
      state.isActive = true;
    },
    notLoading: (state, active) => {
      state.isLoading = false;
    },
    showLoader: (state, active) => {
      state.isLoading = true;
      state.isActive = false;
    },
  },
});
export default createShopSlice.reducer;

export const {createShopInfo} = createShopSlice.actions;
export const {notActive} = createShopSlice.actions;
export const {active} = createShopSlice.actions;
export const {showLoader} = createShopSlice.actions;
export const {notLoading} = createShopSlice.actions;

// export default authSlice.reducer

export const selectNewShop = state => state.createShopSlice.createShop;
export const show = state => state.createShopSlice.isActive;
export const request = state => state.createShopSlice.isLoading;
// export const selectCurrentToken = (state) => state.auth.token
