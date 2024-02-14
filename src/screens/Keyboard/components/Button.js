import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Button = ({
  accessibilityLabel,
  children,
  disabled,
  onPress,
  size,
  testID,
  setNumber,
  number,
  title
}) => {
  const containerStyle = React.useMemo(
    () => ({
      ...styles.container,
      ...{
        height: size,
        width: size,
        opacity: disabled ? 0.2 : 1,
      },
    }),
    [size, disabled],
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={()=>{setNumber((prevNumber) => prevNumber + title.toString());}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <View style={containerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:.3,
    borderColor:'grey',
    borderRadius:50,
    // marginVertical:5
  },
});

export default Button;
