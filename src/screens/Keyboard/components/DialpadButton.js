import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from './Button';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { getColorTheme } from "../../../theme/theme";
import { useSelector } from "react-redux";
const DialpadButton = ({
  disabled,
  title,
  subtitle,
  onPress,
  number,
  setNumber
}) => {
  const theme = useSelector((state) => state.theme.value);
  const colors = getColorTheme(theme);
  // return
  // <Button
  //   disabled={disabled}
  //   size={wp('18%')}
  //   number={number}
  //   setNumber={setNumber}
  //   onPress={onPress}
  //   title={title}
  //   testID={`dialpad_button_${title}`}>
  //   <Text style={[styles.title, { color: colors.labelColor }]}>{title}</Text>
  //   {/* <Text style={[styles.subtitle,{color:colors.labelColor}]}>{subtitle}</Text> */}
  // </Button>
  return (
    <Button
      disabled={disabled}
      size={wp('18%')}
      number={number}
      setNumber={setNumber}
      onPress={onPress}
      title={title}
      testID={`dialpad_button_${title}`}>
      <Text style={[styles.title, { color: colors.labelColor }]}>{title}</Text>
      {/* <Text style={[styles.subtitle,{color:colors.labelColor}]}>{subtitle}</Text> */}
    </Button>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'BricolageGrotesque-Medium',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    fontFamily: 'Sora-Light',
  },
});

export default DialpadButton;
