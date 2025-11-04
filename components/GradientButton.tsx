import { GradientButtonProps } from "@/type";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export function GradientButton({ text, icon, onPress }: GradientButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF9500", "#F45905"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.gradientText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientButton: {
    borderRadius: 556,
    paddingVertical: 16,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8, // расстояние между иконкой и текстом
    flex: 1,
  },
  gradientText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
