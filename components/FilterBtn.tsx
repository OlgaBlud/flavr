import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";

type FilterButtonProps = {
  title: string;
  active?: boolean;
  onPress?: () => void;
  fullWidth?: boolean;
  style?: ViewStyle;
};

export default function FilterButton({
  title,
  active = false,
  onPress,
  fullWidth = false,
  style,
}: FilterButtonProps) {
  return (
    <LinearGradient
      colors={
        active
          ? ["#FF9500", "#F45905"]
          : ["rgba(244, 89, 5, 0.13)", "rgba(244, 89, 5, 0.13)"]
      }
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{
        borderRadius: fullWidth ? 24 : 20,
        padding: 1.5,
        flex: fullWidth ? 1 : undefined,
      }}
    >
      <Pressable
        onPress={onPress}
        style={{
          flex: fullWidth ? 1 : undefined,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: fullWidth ? 24 : 20,
          backgroundColor: "white",
          ...style,
        }}
      >
        <Text
          style={{
            color: active ? "#F56005" : "#828282",
            fontFamily: "Poppins-Medium",
            fontSize: 12,
          }}
        >
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
