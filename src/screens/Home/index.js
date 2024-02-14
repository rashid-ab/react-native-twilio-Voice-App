import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { getColorTheme } from "../../theme/theme";
import { useSelector } from "react-redux";
import Header from "./componenets/header";
import Contacts from "../Contacts";
import { styles } from "./styles";
const Home = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const contacts = useSelector((state) => state.contacts.contacts);
  const twilioToken = useSelector((state) => state.auth.user.twilioAccessToken);
  const colors = getColorTheme(theme);
  // const isTokenExpired = (token) => {
  //   try {
  //     const decoded = jwt_decode(token);
  //     if (decoded.exp * 1000 < Date.now()) { // multiplying by 1000 to convert seconds to milliseconds
  //       console.log('tokenExpired',decoded); // Token is expired
  //     } else {
  //       console.log('tokenNotExpired',decoded);// Token is not expired
  //     }
  //   } catch (error) {
  //     console.log('tokenNotErrored',error);
  //      // Token is invalid or cannot be decoded
  //   }
  // };
  // useEffect(()=>{
  //   isTokenExpired(twilioToken)
  // },[])
  return (
    <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
      <Header colors={colors} />
      <View style={styles.contactsContainer}>
        <ScrollView>
          <Contacts path="Home" />
        </ScrollView>
      </View>
      {contacts.length > 0 ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Contacts")}
          style={{ flex: 0.1 }}
        >
          <Text
            style={[styles.viewAllContactsStyle, { color: colors.themeColor }]}
          >
            view all contact
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Home;
