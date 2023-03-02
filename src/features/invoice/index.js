import {createSlice} from '@reduxjs/toolkit';

const invoiceSlice = createSlice({
  name: 'create',
  initialState: {
    tabId: 1,
    purchase: false,
    isLoading: false,
  },
  reducers: {
    activeID: (state, action) => {
      state.tabId = action.payload;
    },
    purchaseActive: state => {
      state.purchase = true;
    },
    cancelPurchase: state => {
      state.purchase = false;
    },
    // purchaseItem: (state, active) => {
    //   state.isLoading = false;
    // },
    notLoading: (state, active) => {
      state.isLoading = false;
    },
    purchaseItem: (state, active) => {
      state.isLoading = true;
      state.purchase = false;
    },
  },
});
export default invoiceSlice.reducer;

export const {activeID} = invoiceSlice.actions;
export const {purchaseActive} = invoiceSlice.actions;
export const {cancelPurchase} = invoiceSlice.actions;
export const {purchaseItem} = invoiceSlice.actions;
export const {notLoading} = invoiceSlice.actions;
// export const {showLoader} = invoiceSlice.actions;

// export default authSlice.reducer

export const getActiveID = state => state.invoiceSlice.tabId;
export const purchaseInvoice = state => state.invoiceSlice.purchase;
export const request = state => state.invoiceSlice.isLoading;
// export const selectCurrentToken = (state) => state.auth.token
