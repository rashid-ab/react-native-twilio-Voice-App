import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import CheckBox from 'react-native-check-box';
import {widthDP} from '../../../components/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PurchasedNumbers = ({colors,number}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity style={styles.checkboxContainer}>
      <CheckBox
        style={{flex: 1, paddingVertical: 10, borderRadius: 50}}
        onClick={() => setIsChecked(!isChecked)}
        checkedCheckBoxColor={colors.themeColor}
        checkBoxColor={colors.labelColor}
        isChecked={true}
        rightText={number}
        rightTextStyle={{fontSize: widthDP(20), color: colors.labelColor,fontFamily:'Sora-Light'}}
        //   leftText={'CheckBox'}
      />
      <MaterialIcons
        name={'keyboard-arrow-right'}
        size={widthDP(30)}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default PurchasedNumbers;