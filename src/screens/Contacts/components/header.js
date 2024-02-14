import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {widthDP} from '../../../components/Responsive';
const Header = ({colors, path}) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.loginText, {color: colors.labelColor}]}>
        {path=="Calls"?'Recent':'Contacts'}
      </Text>
      {!path ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {backgroundColor: '#E7FAFA', marginHorizontal: 10},
            ]}>
            <Entypo name={'plus'} size={widthDP(20)} color="#1BC8D1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: '#EFEAF8'}]}>
            <Feather name={'search'} size={widthDP(20)} color="#6039BB" />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Header;
