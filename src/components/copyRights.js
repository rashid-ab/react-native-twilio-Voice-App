import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux'
import { getColorTheme } from '../theme/theme';
const CopyRights = () => {
  const theme = useSelector(state=>state.theme.value) 
  const colors = getColorTheme(theme)
  return <Text style={[styles.copyRight,{color:colors.copyRightColor}]}>Copyright © 2023. Brackets</Text>
};
const styles = StyleSheet.create({
  copyRight: {
    // alignSelf: 'center',
    // position: 'absolute',
    // bottom: 10,
    opacity: 0.3,
    fontFamily:'BricolageGrotesque-Medium'
  },
});
export default CopyRights;
