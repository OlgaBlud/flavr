import ArrowLeft from "@/assets/icons/component-icons/ArrowLeft";
import { GradientButton } from "@/components/GradientButton";
import { Chat, mockChats } from "@/mock-data/messages";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ChatScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const chatId = params.id;

  // знайти чат за id
  const chat: Chat | undefined = mockChats.find((c) => c.id === chatId);

  if (!chat) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Чат не знайдено</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-4 pt-6">
      <View className="w-[60%]">
        <GradientButton
          text="Back"
          icon={<ArrowLeft width={16} height={16} />}
          onPress={() => router.back()}
        />
      </View>

      {/* Контент чату */}
      <View className="mt-6">
        <Text className="text-lg font-bold mb-2">Chat with {chat.name}</Text>
        <Text>Show all messages </Text>
        <Text>{chat.lastMessage}</Text>
      </View>
    </View>
  );
}
