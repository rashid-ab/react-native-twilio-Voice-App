import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slice/auth';
import themeSlice from './slice/theme';
import contactsSlice  from './slice/contacts';
import socketSlice  from './slice/socket';
import threadSlice  from './slice/thread';
const rootReducer = combineReducers({
  auth: authSlice,
  thread: threadSlice,
  socket: socketSlice,
  theme: themeSlice,
  contacts: contactsSlice,
});
export default rootReducer;
