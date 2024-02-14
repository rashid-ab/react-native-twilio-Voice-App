import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import Feather from "react-native-vector-icons/Feather";
import { widthDP } from "../../../components/Responsive";
const ThreadHeader = ({ colors }) => {
  return (
    <View style={styles.threadHeaderContainer}>
      <TouchableOpacity
        style={[styles.searchButtonContainer, { backgroundColor: "#EFEAF8" }]}
      >
        <Feather name={"search"} size={23} color="#6039BB" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: widthDP(30),
          fontFamily: "BricolageGrotesque-Medium",
          color: colors.labelColor,
        }}
      >
        Chats
      </Text>
      <Image
        source={require("../../../../assets/avatars.png")}
        style={styles.pic}
      />
    </View>
  );
};

export default ThreadHeader;
