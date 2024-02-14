import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Config from 'react-native-config';
import { useFocusEffect } from "@react-navigation/native";
import { widthDP } from "../../components/Responsive";
import ThreadModule from "./components/ThreadModule";
import { styles } from "./styles";
import { getColorTheme } from "../../theme/theme";
import ThreadHeader from "./components/threadHeader";
export default function MessagesThreads({ navigation }) {
  const theme = useSelector((state) => state.theme.value);
  const colors = getColorTheme(theme);
  const [chatList, setChatList] = useState([
    {
      phone_number: "+923222464082",
      latest_msg: "New Messages",
      latest_message_time: "2023-07-25T11:54:19+00:00",
    },
  ]);
  // const socketInstance = socketServices.initializeSocket();
  const [userId, setUserID] = useState("");
  const [userno, setUserNo] = useState("");
  const [search, setSearch] = useState("");
  const [nin, setNIN] = useState([]);
  const [data, setData] = useState([
    {
      tour_guide_id: 1,
      date_created: Date(),
      body: "Hi",
      phone_number: "03222464082",
    },
  ]);
  const [last_msg_time, setlast_msg_time] = useState("");
  const [page_size, setPageSiz] = useState(100);
  const [loadercount, setloadercount] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(false);
  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  const pickerRef = useRef();
  const changeText = (text) => {
    setSearch(text);
  };
  useEffect(() => {}, []);
  // useFocusEffect(
  //   useCallback(() => {
  //     chatlist();
  //   }, [states.voice.message.messages]),
  // );
  // const receiveMsg = (item) => {

  // }
  // const chatlist = async (searchs = '') => {
  //   setChatList([]);
  //   // const { accessToken } = await auth0.credentialsManager.getCredentials();

  //   console.log('tokenasdsada', states.user);
  //   // let url = states.voice.message.baseurl + '/sms/threads?page_size=10&nin=[]';
  //   let url =
  //     Config.DEFAULT_URL +
  //     'sms/threads?nin=' +
  //     JSON.stringify(nin) +
  //     '&page_size=' +
  //     page_size +
  //     '&last_msg_time=' +
  //     last_msg_time;
  //   console.log(url);
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${states.user.accessToken}`,
  //       },
  //     })
  //     .then(({ data: response }) => {
  //       console.log(response);
  //       dispatch({ type: 'THREADS', payload: response.threads });
  //       setLoader(false);
  //       setRefreshing(false);

  //     })
  //     .catch(async function (error) {
  //       console.log(error);
  //       setRefreshing(false);
  //       setLoader(false);
  //     });
  // };
  // const deleteThread = async () => {
  //   const newArray = chatList.filter((item, i) => i != userno);
  //   setChatList(newArray);
  //   axios
  //     .delete(Config.DEFAULT_URL + 'chat/' + userId, {
  //       headers: {
  //         Authorization: `Bearer ${states.user.accessToken}`,
  //       },
  //     })
  //     .then(({ data: response }) => {})
  //     .catch(async function (error) {
  //       if (error.response.status == 401) {
  //         showToast('error', 'Error', 'You are not Authentic User!');
  //         await AsyncStorage.removeItem('token');
  //         return navigation.replace('Login');
  //       }
  //       showToast('error', 'Error', error.response.data.message);
  //     });
  // };
  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 300);
  //   };
  // };

  // const handleChange = (text) => {
  //   return chatlist(text);
  // };

  // const optimizedFn = useCallback(debounce(handleChange), []);
  // const showDrawer = () => {
  //   dispatch({ type: 'DRAWER', payload: true });
  // };

  const onRefresh = () => {
    // setRefreshing(true);
    // chatlist();
  };
  return (
    <>
      <View
        style={[
          styles.threadContainer,
          { backgroundColor: colors.backgroundColor },
        ]}
      >
        <View style={{ flex: 0.99, paddingTop: 20 }}>
          <ThreadHeader colors={colors} />
          {loader ? (
            <ActivityIndicator
              size="large"
              color="#007AFE"
              style={{ marginTop: "40%" }}
            />
          ) : data.length == 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#007AFE", fontSize: 16 }}>
                No Data Founds
              </Text>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              {data.map((item, i) => (
                <ThreadModule
                  item={item}
                  navigation={navigation}
                  i={i}
                  colors={colors}
                  theme={theme}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </>
  );
}
