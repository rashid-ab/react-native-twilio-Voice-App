import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { heightDP, widthDP } from "./Responsive";
import CallIcon from "../../assets/call.svg";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CallButton = ({ navigation,focused }) => {
  const CallFunc = () => {
    console.log("text", focused);
  };
  return (
    <>
      <TouchableOpacity
        onPress={()=>{focused?CallFunc():navigation.navigate('Keyboard')}}
        style={{
          // position: "absolute",
          alignItems: "center",
          bottom: 15,
          width: 70,
          height: 70,
          borderRadius: 50,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: "#6039BB",
        }}
      >
        {focused?<CallIcon width={35} height={35} />:<MaterialIcons name="dialpad" size={widthDP(30)} color={'white'} />}
      </TouchableOpacity>
    </>
  );
};
export default memo(CallButton) ;

