import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {getColorTheme} from '../../theme/theme';
import Header from './components/header';
import PurchasedNumbers from './components/purchasedNumbers';
import CopyRights from '../../components/copyRights';
const Profile = ({navigation}) => {
  const theme = useSelector(state => state.theme.value);
  const colors = getColorTheme(theme);
  const user = useSelector(state=>state.auth.user.user)
  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <Header colors={colors} user={user} theme={theme} navigation={navigation} />
      <View style={styles.remaining}>
        <Text style={[styles.accountSetting, {color: colors.labelColor}]}>
          Purchased Numbers
        </Text>
        <PurchasedNumbers number={user.phoneNumber} colors={colors} />
        {/* <PurchasedNumbers colors={colors} /> */}
        <Text
          style={[styles.purchaseNewNumberText, {color: colors.themeColor}]}>
          purchase a new number
        </Text>
        <Text style={styles.buyTokens}>buy tokens</Text>
      </View>
      <View style={styles.footer}>
        <CopyRights />
      </View>
    </View>
  );
};

export default Profile;
