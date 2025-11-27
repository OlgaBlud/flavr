import Bin from "@/assets/icons/Bin";
import Folder from "@/assets/icons/Folder";
import Mute from "@/assets/icons/Mute";
import Pin from "@/assets/icons/Pin";
import { useChatMenuStore } from "@/store/chatMenu.store";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import ChatMenuBtn from "./ChatMenuBtn";

const ChatMenu = () => {
  const { isOpen, activeChatId, close, menuPosition } = useChatMenuStore();

  if (!isOpen) return null;
  const actions = [
    {
      text: "Pin",
      icon: <Pin width={16} height={16} />,
      onPress: () => {
        (console.log("Mute", activeChatId), console.log(menuPosition));
      },
    },
    {
      text: "Move to General",
      icon: <Folder width={16} height={16} />,
      onPress: () => console.log("Pin", activeChatId),
    },
    {
      text: "Mute",
      icon: <Mute />,
      onPress: () => console.log("Archive", activeChatId),
    },
    {
      text: "Delete",
      icon: <Bin />,
      textColor: "#F56005",
      onPress: () => console.log("Delete", activeChatId),
    },
  ];

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={close}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",

        // backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <View
        className=" bg-white px-[16px] py-[12px] rounded-l-[16px] rounded-br-[16px] gap-4"
        style={{
          position: "absolute",
          top: menuPosition.y - 210,
          left: menuPosition.x - 180,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        {actions.map((action) => (
          <ChatMenuBtn
            key={action.text}
            text={action.text}
            icon={action.icon}
            textColor={action.textColor}
            onPress={() => {
              action.onPress();
              close();
            }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default ChatMenu;
