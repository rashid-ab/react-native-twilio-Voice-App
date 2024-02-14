import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login'
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
            <Stack.Navigator screenOptions={{
              headerShown: false
            }} initialRouteName='Login'>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
            </Stack.Navigator>
  )
}

export default Auth


