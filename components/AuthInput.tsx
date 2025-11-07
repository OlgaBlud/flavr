import React from "react";
import { Platform, Text, TextInput, View } from "react-native";

interface FormInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string | null;
  onBlur?: () => void;
}

export default function AuthInput({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error = null,
  onBlur,
}: FormInputProps) {
  return (
    <View
      className="bg-white rounded-lg"
      style={{
        shadowColor: "#81553D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 20,
        elevation: 4, // Android
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#828282"
        className={`text-[#121212] text-[14px] font-inter px-4 ${
          Platform.OS === "ios" ? " py-5" : " py-4"
        }`}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
      />
      {error && (
        <Text className="color-orange-500 font-poppins-medium text-[12px]">
          {error}
        </Text>
      )}
    </View>
  );
}
