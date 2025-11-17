import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text } from "react-native";

type FilterButtonProps = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

export default function FilterButton({
  title,
  active = false,
  onPress,
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
      style={{ borderRadius: 20, padding: 1.5 }}
    >
      <Pressable
        onPress={onPress}
        className={`px-4 py-1 flex-1 rounded-[20px] bg-white`}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          className={`font-poppins text-[12px]`}
          style={{ color: active ? "#F56005" : "#828282" }}
        >
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
