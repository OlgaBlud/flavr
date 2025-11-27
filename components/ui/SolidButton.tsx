import { SolidButtonProps } from "@/type";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function SolidButton({ text, icon, onPress }: SolidButtonProps) {
  const isReactElement = React.isValidElement(icon);
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.solidButton}>
      {icon && (
        isReactElement ? (
          <View style={[styles.icon, { alignItems: "center", justifyContent: "center" }]}>{icon}</View>
        ) : (
          <Image source={icon} style={styles.icon} />
        )
      )}
      <Text style={styles.solidText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  solidButton: {
    borderRadius: 56,
    height: 38,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(129, 85, 61, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  solidText: {
    color: "#F56005",
    textAlign: "center",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
