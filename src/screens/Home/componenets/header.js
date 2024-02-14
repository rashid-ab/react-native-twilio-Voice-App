import {
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import { styles } from "../styles";
import MissedCalls from "../../../../assets/missedCalls.svg";
import UnreadMessages from "../../../../assets/unreadMessages.svg";
import { useSelector } from "react-redux";
const Header = ({ colors }) => {
  const user = useSelector(state=>state.auth.user)
  console.log('userPrfile',user.user.profilePicture.url)
  return (
    <>
    <View style={styles.header}>
      <View style={styles.avaterContainer}>
        <View style={styles.avatarAndIntro}>
          <Image
            source={user.user.profilePicture?{uri:user.user.profilePicture.url}:require("../../../../assets/avatars.png")}
            style={styles.avatar}
          />
          <View style={styles.nameAndNumberContainer}>
            <Text style={[styles.userName, { color: colors.labelColor }]}>
              {user.user.firstName} {user.user.lastName} 
            </Text>
            <Text
              style={[styles.userNumber, { color: colors.commonGreyColor }]}
            >
              {user.user.phoneNumber}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { backgroundColor: "#FDEBEE" }]}>
          <View style={styles.numberRow}>
            <Text style={[styles.numberStyle, { color: "red" }]}>7</Text>
            <MissedCalls />
          </View>
          <View>
            <Text style={[styles.missedCallsTextStyle, { color: "red" }]}>
              Missed
            </Text>
            <Text style={[styles.missedCallsTextStyle, { color: "red" }]}>
              Calls
            </Text>
          </View>
        </View>
        <View style={[styles.card, { backgroundColor: "#E7FAFA" }]}>
          <View style={styles.numberRow}>
            <Text style={[styles.numberStyle, { color: "#19C9D1" }]}>15</Text>
            <UnreadMessages />
          </View>
          <View>
            <Text style={[styles.missedCallsTextStyle, { color: "#19C9D1" }]}>
              Unread
            </Text>
            <Text style={[styles.missedCallsTextStyle, { color: "#19C9D1" }]}>
              Messages
            </Text>
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

export default Header;
