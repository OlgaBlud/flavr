import { AuthInputProps } from "@/type";
import React from "react";
import { Platform, TextInput, View } from "react-native";

function AuthInput({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: AuthInputProps) {
  return (
    <View
      className="bg-white rounded-lg"
      style={{
        shadowColor: "#81553D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 20,
        elevation: 4, // для Android
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#828282"
        className={`text-[#121212] text-[14px] font-inter px-4 ${Platform.OS === "ios" ? " py-5" : " py-4"}`}
      />
    </View>
  );
}

export default AuthInput;
