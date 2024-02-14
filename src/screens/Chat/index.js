import React, {
  useState,
  useEffect,
  memo,
} from 'react';
import {
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ChatModule from './components/ChatModule';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { widthDP } from '../../components/Responsive';
Chat = (props) => {
  const [iscomplete, setIsComplete] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [loader, setLoader] = useState(false);
  const states = useSelector((state) => {return state});
  const [data, setData] = useState([{
    body: messageText,
    direction: 'outbound',
    dateCreated:Date(),
    // dateCreated: time.getTime(),
    status:'sending...'
  }]);
  const dispatch = useDispatch();
  const [chatData, setChatData] = useState('');
  useEffect(() => {
    // dispatch({type:"CHATROUTE",payload:true})
    // if (props.route.params.newContact) {
    //   setLoader(false);
    //   return;
    // }
    // getChatMessages();
    // return ()=>{
    //   dispatch({type:"CHATROUTE",payload:false})
    //   dispatch({type:"NOTIFICATION",payload:false})
    // }
    
  }, []);
  // useEffect(() => {
  //   socket.on('OUTBOUND_MESSAGE_RES',receiveMessage);
  //   socket.on('INBOUND_MESSAGE',receiveMessageEvent);
  //   return ()=>{
  //     socket.off('OUTBOUND_MESSAGE_RES',receiveMessage);
  //     socket.off('INBOUND_MESSAGE',receiveMessageEvent);
  //   }
  // }, [socket]);
  // const receiveMessageEvent = (res) => {
  //   console.log('resfrominc',res);
  // if(res.from == props.route.params.item.phone_number || res.from == props.route.params.item.from){
  //   setData(prev=>{
  //       dispatch({ type: 'MESSAGES', payload: [res,...prev] });
  //       return [res,...prev]
  //   })
  // }
  // }
  // const receiveMessage = (res) => {
  //   console.log('responseFromMessage',res);
  //     // states.voice.message.messages[0].status=res.status
  //     setData(prevState=>{
  //       states.voice.message.messages.shift();
  //       prevState[0]={...prevState[0],status:res.status}
  //       console.log('Newarr',prevState);
  //       dispatch({ type: 'MESSAGES', payload: [...prevState] });
  //       return prevState
  //     })
  // }
  // const getChatMessages = async () => {
  //   let param=props.route.params.item.phone_number?props.route.params.item.phone_number:props.route.params.item.from
  //   let url = (url =
  //     Config.DEFAULT_URL +
  //     'sms/' +param);
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${states.user.accessToken}`,
  //       },
  //     })
  //     .then(({ data: response }) => {
  //       console.log('messages', response);
  //       dispatch({ type: 'MESSAGES', payload: response.messages });
  //       setData(response.messages);
  //       setLoader(false);
  //     })
  //     .catch(async function (error) {
  //       alert(error.response.data.message);
  //       setLoader(false);
  //     });
  // };

  const send = async () => {
    // if (messageText == '') {
    //   return alert('Enter message Please!');
    // }
    // let url = (url = Config.DEFAULT_URL + 'sms/');
    // const time = new Date();
    // dispatch({
    //   type: 'MESSAGES',
    //   payload: [
    //     {
    //       body: messageText,
    //       direction: 'outbound-api',
    //       dateCreated: time.getTime(),
    //       status:'sending...'
    //     },
    //     ...states.voice.message.messages,
    //   ],
    // });
    setData(prev=>{
      return [
        {
          body: messageText,
          direction: 'outbound',
          dateCreated: Date(),
          status:'sending...'
        },
        ...prev,
      ]
    })
    // setMessageText('');
    // socket.emit('OUTBOUND_MESSAGE',{ message: messageText, to: props.route.params.item.phone_number })
  };

  return loader ? (
    <ActivityIndicator
      size="large"
      color="#007AFE"
      style={{ marginTop: '40%' }}
    />
  ) : (
    <View style={styles.container}>
      
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.select({
          ios: () => 0,
          android: () => -200,
        })()}
        style={styles.keyboard}>
        <ChatModule
          data={data}
          setData={setData}
          getChatMessages={getChatMessages}
          iscomplete={iscomplete}
          admin_profile={chatData?.admin_pic}
        />
      </KeyboardAvoidingView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: Platform.OS == 'ios' ? 15 : 0,
            borderRadius: 50,
            width: '85%',
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TextInput
            editable={!loader}
            value={messageText}
            placeholderTextColor="grey"
            onChangeText={(text) => {
              {
                setMessageText(text);
              }
            }}
            style={{ width: '95%', color: 'black' }}
            placeholder="Type a message"
          />
        </View>
        <TouchableOpacity
          disabled={loader}
          onPress={() => {
            send();
          }}
          style={{
            backgroundColor: '#007AFE',
            borderRadius: 50,
            height: 45,
            width: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {loader ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            // <Image
            //   source={require('../../../assets/icons/send.png')}
            //   style={{ height: 20, width: 20 }}
            // />
            <Entypo
              name="chevron-left"
              size={widthDP(22)}
              color={focused ? '#6039BB' : '#A9A6B1'}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default memo(Chat);
