import {StyleSheet} from 'react-native';
import {heightDP, widthDP} from '../../components/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.35,
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
    fontSize: widthDP(22),
  },
  avatar_container: {
    justifyContent: 'space-around',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  avatarAndIntro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userNumber: {
    fontFamily: 'Sora-Light',
    fontSize: widthDP(18),
  },
  nameAndNumberContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    // height: heightDP(50),
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height:heightDP(300)
  },
  card: {
    width: '47%',
    height: heightDP(150),
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberStyle: {
    fontSize: widthDP(20),
    fontFamily: 'BricolageGrotesque_24pt-SemiBold',
  },
  missedCallsTextStyle: {
    fontSize: widthDP(25),
    fontFamily: 'BricolageGrotesque_24pt-SemiBold',
  },
  contactsContainer: {
    flex: 0.45,
  },
  viewAllContactsStyle: {
    textDecorationLine: 'underline',
    fontSize: widthDP(20),
    alignSelf: 'center',
    marginTop: 20,
  },
  
});
