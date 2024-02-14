import {StyleSheet} from 'react-native';
import {heightDP, widthDP} from '../../components/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginText: {
    fontFamily: 'BricolageGrotesque-Medium',
    fontSize: widthDP(30),
  },
  list: {
    flex: 0.9,
  },
  itemContainer: {
    borderBottomColor: '#F6F4F7',
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contactName: {
    fontSize: widthDP(18),
    fontFamily: 'Sora-SemiBold',
    
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEAF8',
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 50,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1
  },
  titleContainer: {
    marginLeft: 20,
    flex:1
  },
  userNumber: {
    fontFamily: 'Sora-Light',
  },
  callTypeContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
});
