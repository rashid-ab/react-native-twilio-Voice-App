import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { contacts } from "../store/slice/contacts";
import SplashScreen from "../screens/splashScreen";
import Auth from "./auth";
import App from "./app";
import { useDispatch, useSelector } from "react-redux";
import { themes } from "../store/slice/theme";
import Contacts from "react-native-contacts";
import NavigationService from "./NavigationService";
const Stack = createNativeStackNavigator();
import io from "socket.io-client";
import { BASE_URL } from "../shared/exporter";
import { socketIns } from "../store/slice/socket";
// import { Voice } from "@twilio/voice-react-native-sdk";
const Navigations = () => {
  const contactList = useSelector((state) => state.contacts);
  const theme = useColorScheme();
  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const socketConnection = async () => {
    const socket = io(BASE_URL, {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      transports: ["websocket"],
      auth: {
        token: `${userInfo?.token}`,
      },
    });
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED SUCCESSFULLY");
    });
    dispatch(socketIns(socket));
  };
  useEffect(() => {
    // console.log("checkcheckcheck", check);
    if (userInfo?.token) {
      // console.log('checkcheck',userInfo.twilioAccessToken)
      // const check=voice.register(userInfo.twilioAccessToken)
      // console.log('checkcheck',check)
      socketConnection();
    }
  }, [userInfo?.token]);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts.",
      buttonPositive: "Please accept bare mortal",
    })
      .then((res) => {
        console.log("Permission: ", res);
        Contacts.getAll()
          .then((contact) => {
            // work with contacts
            console.log("contact", contact);
            dispatch(contacts(contact));
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((error) => {
        console.error("Permission error: ", error);
      });
    dispatch(themes(theme));
  }, [theme]);
  return (
    <NavigationContainer
      ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen
          name="App"
          component={App}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
