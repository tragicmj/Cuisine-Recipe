import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";

const FetchFonts = () => {
  return Font.loadAsync({
    "KumbhSans-Light": require("./assets/fonts/KumbhSans-Light.ttf"),
    "KumbhSans-Regular": require("./assets/fonts/KumbhSans-Regular.ttf"),
    "KumbhSans-Bold": require("./assets/fonts/KumbhSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <MealsNavigator />
    // <View style={styles.container}>
    //   <Text style={styles.txt}>
    //     Open up App.js to start working on your app
    //   </Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   txt: {
//     fontFamily: "circular-std",
//     fontSize: 16,
//   },
// });
