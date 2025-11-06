import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  icon?: any;
  text: string;
  onPress?: () => void;
};

const LoginBtn = ({ icon, text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full flex-row items-center gap-4 self-stretch bg-white rounded-lg p-[15px]"
      style={{
        shadowColor: "#81553D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 4, // для Android
      }}
    >
      {icon && (
        <Image source={icon} className="w-6 h-6 mr-2" resizeMode="contain" />
      )}
      <Text className="text-text-main font-inter-semibold text-[16px] leading-[22.4px]">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginBtn;

// gap: 15px;

// /* Shadow 01 */
// box-shadow: 0 4px 20px 0 rgba(129, 85, 61, 0.08);
