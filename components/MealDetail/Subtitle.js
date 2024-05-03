import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: scaleFontSize(18),
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(12),
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(6),
    borderBottomColor: "#e2b497",
    borderBottomWidth: horizontalScale(2),
  },
});
