import { Chat, mockChats } from "@/mock-data/messages";

import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  const renderItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
      <Image
        source={{ uri: item.avatar }}
        className="w-12 h-12 rounded-full mr-4"
      />
      <View className="flex-1">
        <Text className="font-bold text-lg">{item.name}</Text>
        <Text className="text-gray-500">{item.lastMessage}</Text>
      </View>
      <View className="items-end">
        <Text className="text-gray-400">{item.lastMessageTime}</Text>
        {item.unreadCount > 0 && (
          <View className="bg-orange-400 rounded-full w-6 h-6 justify-center items-center mt-1">
            <Text className="text-white font-bold">{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-[#FDFBF9]">
      <FlatList
        data={mockChats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
