import Dots3X from "@/assets/icons/component-icons/Dots3X";
import { Chat } from "@/mock-data/messages";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
type ChatItemProps = {
  item: Chat;
};

const ChatItem = ({ item }: ChatItemProps) => {
  return (
    <View className="flex-row items-center pt-2 pb-4 border-b border-[#8282821A]">
      <TouchableOpacity className="flex-row items-center flex-1">
        <Image
          source={{ uri: item.avatar }}
          className="w-[40px] h-[40px] rounded-full mr-4"
        />
        <View className="flex-1 justify-center">
          <Text className="font-poppins-medium text-[12px] leading-[140%] text-text-main">
            {item.name}
          </Text>
          <Text className="font-poppins text-[14px] text-text-secondary leading-[140%]">
            {item.lastMessage}
          </Text>
        </View>
        <View className="items-end justify-center mr-4">
          <Text className="font-poppins text-[14px] text-text-secondary leading-[140%]">
            {item.lastMessageTime}
          </Text>
          {item.unreadCount > 0 && (
            <View className="bg-[#F45905] rounded-full w-6 h-6 justify-center items-center ">
              <Text className="font-inter text-white text-[12px]">
                {item.unreadCount}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className=" items-center justify-center bg-white rounded-full w-[28px] h-[28px] "
        style={{
          transform: [{ rotate: "90deg" }],
          // iOS shadow
          shadowColor: "rgba(129, 85, 61, 0.08)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 20,
          // Android shadow
          elevation: 5,
        }}
      >
        <Dots3X className="w-[14px] h-[14px]" color={"#828282"} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatItem;
