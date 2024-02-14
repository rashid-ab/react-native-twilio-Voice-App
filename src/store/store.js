import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers';
const persistConfig = {
  key: 'root', // Key for storing data in AsyncStorage
  storage: AsyncStorage, // AsyncStorage for data storage
  whitelist: ['theme','auth','contatcs'], // List of reducers to persist
  stateReconciler: autoMergeLevel2, // State reconciliation strategy
};

// Create a persisted reducer with Redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export {store, persistor};
