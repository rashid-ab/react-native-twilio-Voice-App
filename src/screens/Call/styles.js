import {StyleSheet} from 'react-native';
import {heightDP, widthDP} from '../../components/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: widthDP(90),
    height: heightDP(90),
  },
  name: {
    fontFamily: 'BricolageGrotesque_24pt-SemiBold',
    fontSize: widthDP(30),
    paddingVertical: 20,
  },
  number: {
    fontSize: widthDP(20),
    fontFamily: 'Sora-Light',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    paddingVertical: 30,
  },
  buttons: {
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
