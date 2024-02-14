import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, { useRef, useEffect, useState, memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
function ChatModule(props) {
  const navigation = useNavigation();
  const updateRef = useRef();
  const refs = useRef();
  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [tourData, setTourData] = useState(null);

  const showUpdateForm = (tour) => {
    setTourData(tour);
    updateRef.current.show();
  };

  const renderItem = ({ item }) => {
    if (item.direction.toLowerCase() === 'inbound') {
      return (
        <View
          style={[
            styles.rightMsg,
            {
              padding: item.customized_tour ? 0 : 10,
              marginRight: item.customized_tour ? 15 : 5,
            },
          ]}>
          <View
            style={[
              styles.rightBlock,
              {
                width: item.mime_type ? 170 : 220,
                backgroundColor: item.customized_tour ? 'white' : '#D9EDE6',
                padding: item.customized_tour ? 0 : 10,
              },
            ]}>
            
            {!item?.customized_tour ? (
              <Text
                style={[
                  styles.rightTxt,
                  { paddingHorizontal: item?.customized_tour ? 10 : 0 },
                ]}>
                {item?.body}
              </Text>
            ) : (
              <></>
            )}
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
              <Text
                style={[
                  styles.timeTxt,
                  { paddingHorizontal: item?.customized_tour ? 10 : 0 },
                ]}>
                {moment(item?.created_at).local().format('hh:mm')} {item.status?item.status.toLowerCase():item.MessageStatus.toLowerCase()}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.eachMsg}>
          <Image
            source={{ uri: states?.user?.avatar }}
            style={styles.userPic}
          />
          {/* <View style={[styles.msgBlock, { width: item.mime_type ? 170 : 220 }]}> */}
          <View style={styles.msgBlock}>
            {item?.customized_tour ? (
              <TouchableOpacity style={styles.customTourContainer}>
                <View style={{ padding: 10, backgroundColor: 'white' }}>
                  <View
                    style={{
                      backgroundColor: '#D9ED82',
                      marginVertical: 5,
                      padding: 5,
                      borderRadius: 5,
                      alignItems: 'center',
                      width: '85%',
                    }}>
                    <Text style={{ fontSize: 8, color: 'black' }}>
                      {moment(item?.customized_tour.star_time)
                        .local()
                        .format('dddd, MMMM Do')}{' '}
                      |{' '}
                      {moment(item?.customized_tour.star_time)
                        .local()
                        .format('hh:mm')}{' '}
                      -{' '}
                      {moment(item?.customized_tour.end_time)
                        .local()
                        .format('hh:mm')}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      width: 150,
                      paddingVertical: 5,
                      fontWeight: 'bold',
                    }}>
                    {item?.customized_tour.currency}{' '}
                    {item?.customized_tour.price}
                    <Text style={{ fontSize: 14, color: 'grey' }}>/tour</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {item?.body ? <Text style={styles.msgTxt}>{item?.body}</Text> : ''}

            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingBottom: 5,
              }}>
              <Text style={styles.timeTxt}>
                {moment(item?.dateCreated).local().format('hh:mm')} {item.status?item.status.toLowerCase():item.MessageStatus.toLowerCase()}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };
  function handleScrollToEnd(height) {
    // if (refs.current) {
    //   refs.current.scrollToOffset({offset: height,
    //     animated: true});
    // }
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        inverted
        // contentContainerStyle={{ flexDirection: 'column-reverse' }}
        style={styles.list}
        ref={refs}
        // onContentSizeChange={handleScrollToEnd}
        // extraData={messages}
        // initialNumToRender={15}
        data={props?.data}
        keyExtractor={(item, i) => {
          return i;
        }}
        renderItem={renderItem}
        // onEndReached={()=>{alert('aaa')}}
        // onEndReached={()=>{handleScrollToEnd()}}
        onEndReached={() => {
          handleScrollToEnd(Dimensions.get('screen').height);
          // if (states.messages.length >= 15 && !props.iscomplete)
          //   props.getChatMessages();
        }}
        // onEndReachedThreshold={.2}
      />
    </View>
  );
}

export default memo(ChatModule);
