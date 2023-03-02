import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

let token;

//market
export const RenmissApi = createApi({
  reducerPath: 'renmiss',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://renmiss-api.herokuapp.com/api/v1',
    prepareHeaders: (headers, {getState}) => {
      // const token = getState().loginReducer.accessToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    createShop: builder.mutation({
      query: info => {
        return {
          url: '/market/add-item',
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: info,
        };
      },
    }),
  }),
});

export default RenmissApi;
