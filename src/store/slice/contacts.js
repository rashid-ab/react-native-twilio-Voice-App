import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: { contacts: [], isLoading: false},
  reducers: {
    contacts: (state, {payload}) => {
      state.contacts = payload.slice().sort((a, b) => a.displayName.localeCompare(b.displayName));
    },
    removeContact(state) {
    //   state.user = '';
    //   state.isLoading = false
    },
  },
//   extraReducers: builder => {
//     builder.addCase(loginReq.fulfilled, (state, action) => {
//       state.user = action.payload.data;
//       state.isLoading = false;
//       // navToApp()
//     });
//     builder.addCase(loginReq.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(loginReq.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//   },
});
export const {contacts} = contactsSlice.actions;
export default contactsSlice.reducer;
