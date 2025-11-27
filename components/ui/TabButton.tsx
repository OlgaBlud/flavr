import { isActiveButtonProps } from "@/type";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TabButton({
  title,
  isActive,
  onPress,
}: isActiveButtonProps) {
  if (isActive) {
    return (
      <LinearGradient
        colors={["#FF9500", "#F45905"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.activeBtn}
      >
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.activeText}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.defaultBtn}
    >
      <Text style={styles.defaultText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultBtn: {
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtn: {
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    fontFamily: "PoppinsBold",
    fontWeight: "700",
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
  defaultText: {
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: -0.28,
    color: "#fff",
    lineHeight: 20,
  },
});
