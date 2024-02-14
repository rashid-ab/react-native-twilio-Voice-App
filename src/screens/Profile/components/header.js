import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {widthDP} from '../../../components/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../store/slice/auth';
const Header = ({colors,navigation,theme,user}) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={theme=='dark'?require('../../../../assets/profile_header_dark.png'):require('../../../../assets/profile_header_light.jpg')}
      style={styles.header}>
      <View style={styles.avaterContainer}>
        <Image
          source={user.profilePicture?{uri:user.profilePicture.url}:require("../../../../assets/avatars.png")}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => dispatch(removeUser())}>
          <Text style={styles.loginButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.userName, {color:colors.labelColor}]}>{user.firstName} {user.lastName}</Text>
        <Text style={[styles.userNumber,{color:colors.labelColor}]}>{user.phoneNumber}</Text>
      </View>
      <Text style={[styles.accountSetting, {color:colors.labelColor}]}>
        Account Setting
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')} style={styles.changePasswordContainer}>
        <Text style={[styles.changePasswordText,{color:colors.labelColor}]}>Change Password</Text>
        <MaterialIcons
          name={'keyboard-arrow-right'}
          size={widthDP(30)}
          color={colors.labelColor}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Header;
