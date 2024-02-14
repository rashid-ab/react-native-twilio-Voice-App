import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AddContact from '../screens/AddContact'
import Contacts from '../screens/Contacts'
import TabNavigator from './TabNavigator';
import ChangePassword from '../screens/ChangePassword';
import Call from '../screens/Call';
import Chat from '../screens/Chat';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
            <Stack.Navigator screenOptions={{
              headerShown: false
            }} initialRouteName='TabNavigator'>
              <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="AddContact"
                component={AddContact}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="Call"
                component={Call}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="ChatMessages"
                component={Chat}
                options={{ animation: 'slide_from_bottom' }}
              >
              </Stack.Screen>
            </Stack.Navigator>
  )
}

export default App


