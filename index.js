/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
const Component = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Component</Text>
    </View>
  );
};

// export default Component

AppRegistry.registerComponent("custom-component", () => Component);
AppRegistry.registerComponent(appName, () => App);
