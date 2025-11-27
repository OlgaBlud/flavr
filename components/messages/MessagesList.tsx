import { Chat, mockChats } from "@/mock-data/messages";
import React from "react";
import { FlatList, View } from "react-native";
import ChatItem from "./ChatItem";
import ChatMenu from "./ChatMenu";

const MessagesList = () => {
  //   const chatItem = ({ item }: { item: Chat }) => <ChatItem item={item} />;
  //   const [activeChatId, setActiveChatId] = useState<string | null>(null);
  //   const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const handleOpenMenu = (id: string, coords: { x: number; y: number }) => {
  //     setActiveChatId(id);
  //     setMenuCoords(coords);
  //     setIsMenuOpen(true);
  //   };

  //   const handleCloseMenu = () => {
  //     setIsMenuOpen(false);
  //     setActiveChatId(null);
  //   };
  return (
    <View>
      <FlatList
        data={mockChats}
        renderItem={({ item }: { item: Chat }) => <ChatItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <ChatMenu />
    </View>
  );
};

export default MessagesList;
