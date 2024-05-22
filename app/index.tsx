import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "blue",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
      ></View>
    </SafeAreaView>
  );
}
