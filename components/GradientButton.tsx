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
    <TouchableOpacity onPress={onPress}>
      <View className="rounded-full overflow-hidden">
        <LinearGradient
          colors={["#FF9500", "#F45905"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}

          // style={styles.gradientButton}
        >
          <View className=" px-[6px] py-4 flex-row items-center justify-center gap-2">
            {icon &&
              (isReactElement ? (
                <View className="w-5 h-5">{icon}</View>
              ) : (
                <Image source={icon} className="w-5 h-5" resizeMode="contain" />
              ))}
            <Text className="text-white text-[14px] font-poppins-medium text-center">
              {text}
            </Text>
          </View>
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
