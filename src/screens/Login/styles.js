import {StyleSheet} from 'react-native';
import {widthDP} from '../../components/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flex: 0.4,
  },
  loginText: {
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: widthDP(40),
    paddingVertical: 10,
    paddingBottom: 20,
  },
  credentialsText: {
    opacity: 0.4,
    fontFamily: 'Sora-Light',
    fontSize: widthDP(15),
  },
  formContainer: {
    flex: 0.6,
  },
  formGroup: {
    paddingHorizontal: 40,
  },
  label: {
    fontSize: widthDP(22),
    // fontWeight: '700',
    fontFamily: 'Sora-SemiBold',
  },
  formTextInput: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 10,
    borderRadius: 3,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sumbitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 40,
    borderRadius: 3,
    marginVertical: 15,
  },
  forgetPasswordText: {
    fontSize: widthDP(20),
    alignSelf: 'center',
    fontFamily: 'Sora-Regular',
  },
  formikError: {
    fontSize: widthDP(15),
    color: '#FF0D10',
    fontFamily: 'Sora-Regular',
  },
  textInput: {
    height: 50,
    width: '90%',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.05,
  },
});
