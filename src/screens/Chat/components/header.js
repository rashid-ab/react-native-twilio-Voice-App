import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from '../styles';
const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          
        </TouchableOpacity>
        <Text style={styles.headeTitle}>
          {props.route.params.item.phone_number?props.route.params.item.phone_number:props.route.params.item.from}
        </Text>
        {/* <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/make-call.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity> */}
      </View>
  )
}

export default Header
