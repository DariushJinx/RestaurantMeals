import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import React from "react";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { verticalScale } from "../assets/styles/scaling";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} // داخل هر کالمن دوتا نمایش میده
      style={styles.screen}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: verticalScale(30),
  },
});
