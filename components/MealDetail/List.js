import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(12),
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
