import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { scaleFontSize } from "../assets/styles/scaling";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);

  // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: scaleFontSize(18),
    fontWeight: "bold",
    color: "white",
  },
});
