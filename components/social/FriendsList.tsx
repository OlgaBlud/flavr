import ArrowLeft from "@/assets/icons/ArrowLeft";
import { mockUsers } from "@/mock-data/test-friends";
import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const borderColors = ["#FFB648", "#F45905",  "#FBB994", "#AA4A15"];

const getRandomBorderColor = (index: number) => {
  return borderColors[index % borderColors.length];
};

export default function FriendsList() {
  const { user } = useAuthStore();
  const router = useRouter();

  const handleUserPress = () => {
    // Navigate to my profile
    router.push("/profile" as any);
  };

  const handleFriendPress = (friendId: string) => {
    router.push(`/profile/${friendId}` as any);
  };

  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft width={16} height={24} color="#7F7F7F" />
        </TouchableOpacity>
        <Text className="text-base font-[PoppinsSemiBold] leading-snug" style={{ fontWeight: '600' }}>
          Friends
        </Text>
        <View style={{ width: 12 }} />
      </View>

      {/* Friends List */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-4 gap-4 items-end"
        className="flex-grow-0"
      >
        {/* Current User */}
        {user && (
          <View className="items-center">
            <TouchableOpacity onPress={handleUserPress}>
              <Image
                source={{ uri: user.avatar }}
                className="rounded-full"
                style={{ width: 58, height: 58 }}
              />
            </TouchableOpacity>
            <Text className="text-xs mt-2 text-center w-16" numberOfLines={1}>
              You
            </Text>
          </View>
        )}

        {/* Mock Friends */}
        {mockUsers.map((friend, index) => (
          <View key={friend.id} className="items-center">
            <TouchableOpacity onPress={() => handleFriendPress(friend.id)}>
              <View 
                className="rounded-full border-2" 
                style={{ width: 58, height: 58, padding: 2, borderColor: getRandomBorderColor(index), justifyContent: 'center', alignItems: 'center' }}
              >
                <Image
                  source={{ uri: friend.avatar }}
                  className="rounded-full"
                  style={{ width: 50, height: 50 }}
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xs mt-2 text-center w-16" numberOfLines={1}>
              {friend.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
