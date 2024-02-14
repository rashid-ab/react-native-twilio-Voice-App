import { Text, View } from 'react-native'
import React from 'react'
import Contacts from '../Contacts'
import { styles } from './styles'

const Calls = () => {
  return (
    <View style={styles.container}>
      <Contacts path={'Calls'}/>
    </View>
  )
}

export default Calls
