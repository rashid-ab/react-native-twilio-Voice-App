import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
// const theme = useColorScheme();
// console.log('thememememe',theme);
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {value: 'light'},
  reducers: {
    themes: (state, {payload}) => {
      state.value = payload;
    },
    // dark: (state, {payload}) => {
    //   state.value = payload;
    // },
  },
});
export const {themes} = themeSlice.actions;
export default themeSlice.reducer;
