import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meal Screen!</Text>
      <Button
        title="Go to Meals Detail!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealScreen;
