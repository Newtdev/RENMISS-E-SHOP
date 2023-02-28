import {createSlice} from '@reduxjs/toolkit';

const createShopSlice = createSlice({
  name: 'create',
  initialState: {
    createShop: {
      name: '',
      description: '',
      phone: '',
      emails: '',
      address: '',
    },
  },
  reducers: {
    createShopInfo: (state, action) => {
      console.log(action.payload.name);
      state.createShop = {[action.payload.name]: action.payload.value};
    },
  },
});
export default createShopSlice.reducer;

export const {createShopInfo} = createShopSlice.actions;

// export default authSlice.reducer

export const selectNewShop = state => state.createShopSlice.createShop;
// export const selectCurrentToken = (state) => state.auth.token
