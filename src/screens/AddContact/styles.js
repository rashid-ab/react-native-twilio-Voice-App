import {StyleSheet} from 'react-native';
import {widthDP} from '../../components/Responsive';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  loginText: {
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: widthDP(30),
    paddingVertical: 10,
    paddingBottom: 20,
  },
  credentialsText: {
    opacity: 0.4,
    fontFamily: 'Sora-Light',
    fontSize: widthDP(15),
  },
  formContainer: {
    //   flex: 0.6,
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
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
  cameraView:{
    position: 'absolute',
    right:10,
    bottom:10
  },
  avatarContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconView: {width: widthDP(40)},
});
