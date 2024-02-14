import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {useSelector} from 'react-redux';
import {getColorTheme} from '../theme/theme';
import CallButton from '../components/CallButton';
import {heightDP, widthDP} from '../components/Responsive';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import Profile from '../screens/Profile';
import Calls from '../screens/Calls';
import Chat from '../screens/Chat/Messages';
import Keyboard from '../screens/Keyboard';
const Tabs = createBottomTabNavigator();
const TabNavigator = ({navigation}) => {
  const theme = useSelector(state => state.theme.value);
  const colors = getColorTheme(theme);
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: heightDP(70),
            backgroundColor: colors.tabBarBackgroundColor,
            position: 'absolute',
            borderTopWidth: 0.27,
            elevation: 0,
            zIndex:0,
            borderTopColor: colors.commonTabBarBorderColor,
          },
          // tabBarBackground: () => (
          //     <BlurView overlayColor='' blurAmount={15} style={styles.blurStyle} />
          // )
        }}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <>
                <FontAwesome5
                  name="home"
                  size={widthDP(22)}
                  color={focused ? '#6039BB' : '#A9A6B1'}
                />
                <Text
                  style={{
                    color: focused ? '#6039BB' : '#A9A6B1',
                    fontSize: widthDP(12),
                    fontFamily: 'Sora-Light',
                  }}>
                  Home
                </Text>
              </>
            ),
          }}></Tabs.Screen>
        <Tabs.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <>
                <Zocial
                  name="call"
                  size={widthDP(22)}
                  color={focused ? '#6039BB' : '#A9A6B1'}
                />
                <Text
                  style={{
                    color: focused ? '#6039BB' : '#A9A6B1',
                    fontSize: widthDP(12),
                    fontFamily: 'Sora-Light',
                  }}>
                  Calls
                </Text>
              </>
            ),
          }}></Tabs.Screen>
        <Tabs.Screen
          name={'Keyboard'}
          component={Keyboard}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({focused}) => console.log('focused',focused),
            tabBarButton: props => <CallButton navigation={navigation} focused={props.accessibilityState.selected}/>
             ,
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <>
                <AntDesign
                  name="wechat"
                  size={widthDP(22)}
                  color={focused ? '#6039BB' : '#A9A6B1'}
                />
                <Text
                  style={{
                    color: focused ? '#6039BB' : '#A9A6B1',
                    fontSize: widthDP(12),
                    fontFamily: 'Sora-Light',
                  }}>
                  Chat
                </Text>
              </>
            ),
          }}></Tabs.Screen>
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <>
                <FontAwesome5
                  name="user-alt"
                  size={widthDP(22)}
                  color={focused ? '#6039BB' : '#A9A6B1'}
                />
                <Text
                  style={{
                    color: focused ? '#6039BB' : '#A9A6B1',
                    fontSize: widthDP(12),
                    fontFamily: 'Sora-Light',
                  }}>
                  Profile
                </Text>
              </>
            ),
          }}></Tabs.Screen>
      </Tabs.Navigator>
    </>
  );
};
export default TabNavigator;
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
