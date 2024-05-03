import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { scaleFontSize } from "../assets/styles/scaling";

export default function IconButtonIcon({ onPress, color, icon }) {
  return (
    <Pressable
      android_ripple={{ color: "#000" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} onPress={onPress} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
