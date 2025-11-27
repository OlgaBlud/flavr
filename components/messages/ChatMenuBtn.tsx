import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ChatMenuButtonProps = {
  text: string;
  onPress: () => void;
  icon?: React.ReactNode;
  textColor?: string;
};

const ChatMenuBtn = ({
  text,
  onPress,
  icon,
  textColor = "#121212",
}: ChatMenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center py-2 ">
      {icon && <View className="mr-2">{icon}</View>}
      <Text
        className="font-poppins-medium text-[12px]"
        style={{ color: textColor }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatMenuBtn;
