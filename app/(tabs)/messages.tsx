import ArrowDown from "@/assets/icons/component-icons/ArrowDown";
import Dots3X from "@/assets/icons/component-icons/Dots3X";
import UpdateProfileIcon from "@/assets/icons/component-icons/UpdateProfileIcon";
import { Chat, mockChats } from "@/mock-data/messages";
import useAuthStore from "@/store/auth.store";
import { LinearGradient } from "expo-linear-gradient";

import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  const { user } = useAuthStore();

  // console.log("JSON", JSON.stringify(user, null, 2));
  // console.log("Avatar:", JSON.stringify(user!.avatar, null, 2));

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
      <View
        // style={{ padding: 20 }}
        className="flex-row items-center justify-between p-4"
      >
        <TouchableOpacity>
          <LinearGradient
            colors={["#FF9500", "#F45905"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",

              // iOS shadow
              shadowColor: "rgba(249, 114, 3, 0.20)",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 1,
              shadowRadius: 20,

              // Android shadow
              elevation: 10,
            }}
          >
            <UpdateProfileIcon width={16} height={16} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
        <View className="flex-row items-center gap-1">
          <Text className=" text-text-main font-inter-semibold text-[16px] leading-[140%]">
            {user!.name}
          </Text>
          <TouchableOpacity>
            <ArrowDown width={25} height={13} color={"#7F7F7F"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Dots3X width={25} height={25} color={"#828282"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="py-2 px-4">
        <Image
          source={{ uri: user!.avatar }}
          className="w-12 h-12 rounded-full"
        />
      </TouchableOpacity>

      <FlatList
        data={mockChats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
