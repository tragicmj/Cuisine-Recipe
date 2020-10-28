import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator"


const CategoriesMealScreen = (props,{navigation}) => {
  const catId = props.navigation.route.params("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Categories Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meals Detail!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      ></Button>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
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
