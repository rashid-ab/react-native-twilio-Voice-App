import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Component = () => {
  return (
    <View style={{flex:1}}>
      <Text>Component</Text>
    </View>
  )
}

// export default Component


AppRegistry.registerComponent('custom-component', () => Component);