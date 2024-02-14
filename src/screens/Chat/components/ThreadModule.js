import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import moment from "moment";

const ThreadModule = ({item,i,navigation,colors,theme}) => {
    console.log('item',item);
  return (
    <TouchableOpacity
      key={i}
      onLongPress={() => {
        // pickerRef.current.show();
        setUserID(item.tour_guide_id);
        setUserNo(i);
      }}
      onPress={() => {
        navigation.navigate("ChatMessages", { item: item });
      }}
    
    style={[styles.chatThreadContainer,{borderBottomColor:colors.commonTabBarBorderColor,borderBottomWidth:theme=='light'?1: 0.3}]}
    >
      <View style={styles.picContainer}>
        <Image
          style={styles.pic}
          source={require("../../../../assets/avatars.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.profileName,{color:colors.labelColor}]}>{item.phone_number}</Text>
        <Text style={styles.message} ellipsizeMode="tail" numberOfLines={1}>
          {item.body}
        </Text>
      </View>
      <View style={styles.footer}>
        {/* <MaterialCommunityIcons name='volume-variant-off' size={24} color="grey" /> */}
        <View
          style={styles.timeContainer}
        >
          <Text style={{ fontSize: 11, color: colors.labelColor }}>
            {moment(item.date_created).local().format("hh:mm")}
          </Text>
          {/* <View style={styles.messageCounter}>
                      <Text style={{fontSize:8,color:'white'}}>100</Text>
                    </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ThreadModule;

