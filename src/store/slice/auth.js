import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL, ENDPOINTS, HTTP_CLIENT} from '../../shared/exporter';
import axios from 'axios';
import NavigationService from '../../navigators/NavigationService';

export const loginReq = createAsyncThunk('loginReq', async params => {
  console.log('res',params)
  let result = await HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
  console.log('res2',result)
  return result;
});
export const authSlice = createSlice({
  name: 'Auth',
  initialState: { user: '', isLoading: false},
  reducers: {
    user: (state, {payload}) => {
      
      state.user = payload;
    },
    removeUser(state) {
      state.user = '';
      state.isLoading = false
      NavigationService.reset('Auth')
    },
  },
  extraReducers: builder => {
    builder.addCase(loginReq.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.isLoading = false;
      // navToApp()
    });
    builder.addCase(loginReq.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginReq.rejected, (state, action) => {
      state.isLoading = false;

    });
  },
});
export const {token, user, removeToken, removeUser} = authSlice.actions;
export default authSlice.reducer;
