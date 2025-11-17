import { SolidButtonProps } from "@/type";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function SolidButton({ text, icon, onPress }: SolidButtonProps) {
  const isReactElement = React.isValidElement(icon);
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.solidButton}>
      {icon && (
        isReactElement ? (
          <View style={styles.icon}>{icon}</View>
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
    paddingVertical: 16,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flex: 1,
    backgroundColor: "#FFF8F4",
  },
  solidText: {
    color: "#F56005",
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
