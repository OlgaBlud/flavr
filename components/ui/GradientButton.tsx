import { GradientButtonProps } from "@/type";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function GradientButton({
  text,
  icon,
  onPress,
  className,
}: GradientButtonProps) {
  const isReactElement = React.isValidElement(icon);

  return (
    <TouchableOpacity onPress={onPress} style={{ width: 87 }}>
      <View className="rounded-full overflow-hidden" style={{ height: 38 }}>
        <LinearGradient
          colors={["#FF9500", "#F45905"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1, paddingHorizontal: 6, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4 }}
        >
          {icon &&
            (isReactElement ? (
              <View style={{ width: 16, height: 16, alignItems: "center", justifyContent: "center" }}>{icon}</View>
            ) : (
              <Image source={icon} style={{ width: 16, height: 16 }} resizeMode="contain" />
            ))}
          <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "500", fontFamily: "PoppinsMedium", textAlign: "center", lineHeight: 16 }}>
            {text}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
// gradientButton: {
// borderRadius: 556,
// paddingVertical: 16,
// paddingHorizontal: 6,
// flexDirection: "row",
// justifyContent: "center",
// alignItems: "center",
// gap: 8,
// flex: 1,
// },
// gradientText: {
// color: "#FFF",
// textAlign: "center",
// fontFamily: "Poppins",
// fontSize: 14,
// fontWeight: "500",
// lineHeight: 20,
// },
// icon: {
//   width: 20,
//   height: 20,
//   resizeMode: "contain",
// },
// });
