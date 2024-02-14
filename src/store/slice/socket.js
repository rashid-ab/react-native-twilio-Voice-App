import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const socketSlice = createSlice({
  name: 'Socket',
  initialState: { socketIns: ''},
  reducers: {
    socketIns: (state, {payload}) => {
        console.log('socketIn',payload)
      state.socketIns = payload;
    },
    removeSocket(state) {
      state.socketIns = '';
    },
  },
});
export const {socketIns} = socketSlice.actions;
export default socketSlice.reducer;
