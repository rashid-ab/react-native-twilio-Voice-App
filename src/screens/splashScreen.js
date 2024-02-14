import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {heightDP, widthDP} from '../components/Responsive';
import CopyRights from '../components/copyRights';
import {useDispatch, useSelector} from 'react-redux';
import {getColorTheme} from '../theme/theme';
import {removeUser} from '../store/slice/auth';
export default function SplashScreen({navigation}) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log('autheeeeee', auth);
  // console.log(states.theme.value);

  const colors = getColorTheme('dark');
  const [progress, setProgress] = useState(0.1);
  useEffect(() => {
    dispatch(removeUser());
    const progressRange = setInterval(() => {
      setProgress(prev => {
        return prev + 0.3;
      });
    }, 900);
    setTimeout(() => {
      if (auth.user.token) {
        navigation.replace('App');
      } else {
        navigation.replace('Auth');
      }
    }, 3000);
    return () => {
      clearInterval(progressRange);
    };
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <View style={styles.mainContiner}>
        <Image
          style={{
            alignSelf: 'center',
            width: widthDP(225),
            height: heightDP(195),
          }}
          source={require('../../assets/icon.png')}
        />
        <Text
          style={{
            fontSize: widthDP(40),
            color: colors.labelColor,
            fontFamily: 'BricolageGrotesque-Light',
            alignSelf: 'center',
          }}>
          Brackets
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: widthDP(40),
              fontFamily: 'BricolageGrotesque-Light',
              color: colors.labelColor,
            }}>
            VoIP
          </Text>
        </Text>
        <Progress.Bar
          progress={progress}
          width={widthDP(270)}
          style={styles.progressStyle}
          color="#6039BB"
        />
      </View>
      <View style={styles.footer}>
        <CopyRights />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  progressStyle: {
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#ebebeb',
    height: 4,
    borderWidth: 0,
  },
  mainContiner: {
    flex: 0.95,
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.05,
  },
});
