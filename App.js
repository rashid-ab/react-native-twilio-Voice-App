/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  NativeModules,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Navigations from './src/navigators';
import { Provider } from 'react-redux'
import messaging from '@react-native-firebase/messaging';
import { notificationsListener, requestUserFCMPermission } from './src/shared/utilities/Notifications';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import notifee, {
  AndroidImportance,
  AndroidBadgeIconType,
  AndroidVisibility,
  AndroidCategory,
} from "@notifee/react-native";
const App = () => {
  const requestUserPermission = async () => {

    try {

      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } catch (error) {
      console.log('eorrrooo', error)
    }
    // console.log('qqqwqwwwqwq',res)
  }
  useEffect(() => {
    requestUserPermission()
    notificationsListener();
    requestUserFCMPermission()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigations />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
