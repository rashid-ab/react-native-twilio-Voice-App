import {StyleSheet} from 'react-native';
import {heightDP, widthDP} from '../../components/Responsive';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  header: {
    flex: 0.4,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  avaterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    opacity: 0.6,
    borderRadius: 30,
  },
  loginButton: {
    color: 'red',
    fontFamily: 'BricolageGrotesque_24pt-SemiBold',
    fontSize: widthDP(20),
  },
  userName: {
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: widthDP(25),
  },
  avatar_container: {
    justifyContent: 'space-around',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  userNumber: {
    fontFamily: 'Sora-Light',
  },
  accountSetting: {
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: widthDP(30),
  },
  changePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changePasswordText: {
    fontFamily: 'Sora-Regular',
    fontSize: widthDP(20),
    color: 'black',
  },
  remaining: {
    flex: 0.45,
    padding: 15,
  },
  checkboxContainer: {
    borderBottomColor: '#F0EEF2',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  purchaseNewNumberText: {
    textDecorationLine: 'underline',
    fontSize: widthDP(20),
    paddingVertical: 10,
  },
  buyTokens: {
    color: '#FFBF40',
    textDecorationLine: 'underline',
    fontSize: widthDP(20),
    paddingVertical: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.05,
  },
});
