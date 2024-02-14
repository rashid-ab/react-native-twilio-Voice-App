import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import DialpadButton from "./components/DialpadButton";
import { useSelector } from "react-redux";
import { getColorTheme } from "../../theme/theme";
import RemoveText from "../../../assets/removeText.svg";
const DIALPAD_DATA = [
  [
    ["1", ""],
    ["2", "abc"],
    ["3", "def"],
  ],
  [
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
  ],
  [
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ],
  [
    ["*", ""],
    ["0", "."],
    ["#", ""],
  ],
];
const dataList = ["as"];
const Dialpad = ({ disabled, onPress, data = DIALPAD_DATA }) => {
  const [number, setNumber] = useState("");
  const theme = useSelector((state) => state.theme.value);
  const colors = getColorTheme(theme);
  const mapCol = React.useCallback(
    ([title, subtitle], buttonIdx) => {
      const handle =
        onPress &&
        (() => {
          alert(title);
          onPress(title);
        });

      return (
        <View key={buttonIdx} style={styles.button}>
          <DialpadButton
            disabled={disabled}
            title={title}
            subtitle={subtitle}
            onPress={handle}
            setNumber={setNumber}
            number={number}
          />
        </View>
      );
    },
    [disabled, onPress]
  );

  const mapRow = React.useCallback(
    (rowData, rowIdx) => (
      <View key={rowIdx} style={styles.row}>
        {rowData.map(mapCol)}
      </View>
    ),
    [mapCol]
  );

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <View style={styles.listContainer}></View>
      <View style={styles.keyboardContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "90%" }}>
            <FlatList
              data={dataList}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text
                  style={{
                    color: colors.labelColor,
                    fontSize: 30,
                    alignSelf: "center",
                    fontFamily: "BricolageGrotesque-Medium",
                  }}
                >
                  {number}
                </Text>
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => setNumber((prevNumber) => prevNumber.slice(0, -1))}
          >
            <RemoveText />
          </TouchableOpacity>
        </View>
        {React.useMemo(() => data.map(mapRow), [data, mapRow])}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  listContainer: {
    height: "40%",
  },
  keyboardContainer: {
    height: "60%",
    // justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    marginVertical: 5,
  },
});

export default Dialpad;
