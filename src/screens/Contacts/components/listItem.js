import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import { styles } from "../styles";
import { useSelector } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getColorTheme } from "../../../theme/theme";
import { widthDP } from "../../../components/Responsive";
import CallButton from "../../../../assets/callButton.svg";
import MessageButton from "../../../../assets/messageButton.svg";
import MissedIcon from "../../../../assets/missedIcon.svg";
import IncomingIcon from "../../../../assets/incomingIcon.svg";
import OutgoingIcon from "../../../../assets/outgoingIcon.svg";
import moment from "moment";
const ListItem = ({ item, index, isSelected, onPress, path }) => {
  const [numberShow, setNumberShow] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const colors = getColorTheme(theme);
  console.log('phoneNumbers',item.phoneNumbers)
  const onPressIndex = () => {
    setNumberShow(!numberShow)
    // if (isSelected == index) {
    //   onPress(null);
    // } else onPress(index);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onPressIndex()}
      style={[styles.itemContainer,{borderBottomWidth: theme=='dark'?0.28:2,}]}
    >
      {item.image ? (
        <Image
          style={styles.avatar}
          source={require("../../../../assets/avatars.png")}
        />
      ) : (
        <View style={styles.avatar}>
          <FontAwesome5 name={"user"} size={widthDP(20)} color="#6039BB" />
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.contactName,
            {
              color: colors.labelColor,
              display: item.displayName ? "flex" : "none",
              fontWeight: numberShow ? "bold" : "500",
            },
          ]}
        >
          {item.displayName}
        </Text>
        {numberShow || !item.displayName ? (
          <View style={styles.numberContainer}>
            <Text
              style={
                ([styles.userNumber],
                {
                  color: item.displayName ? colors.commonGreyColor : colors.labelColor,
                  fontWeight: numberShow ? "bold" : "500",
                })
              }
            >
              {item.phoneNumbers.length>0?item.phoneNumbers[0].number:''}
            </Text>
            {numberShow ? (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                  <MessageButton />
                </TouchableOpacity>
                <TouchableOpacity>
                  <CallButton />
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </View>
        ) : (
          <></>
        )}
        {path == "Calls" ? (
          <View style={styles.callTypeContainer}>
            <MissedIcon />
            <Text> </Text>
            <IncomingIcon />
            <Text> </Text>
            <OutgoingIcon />
            <Text> </Text>
            <Text style={{ color: colors.commonGreyColor }}>
              {moment(Date()).fromNow()}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default memo(ListItem);
