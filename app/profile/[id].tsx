import ArrowLeft from "@/assets/icons/ArrowLeft";
import MessageIcon from "@/assets/icons/MessageIcon";
import ProfileInnerTabs from "@/components/profile/ProfileInnerTabs";
import StoryCollections from "@/components/profile/StoryCollections";
import { GradientButton } from "@/components/ui/GradientButton";
import { SolidButton } from "@/components/ui/SolidButton";
import { storyCollections } from "@/mock-data/storyCollections";
import { getUserById } from "@/mock-data/test-friends";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FriendProfileScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Get friend data from mock data
  const friend = getUserById(id as string);

  if (!friend) {
    return (
      <SafeAreaView className="flex-1 bg-[#FDFBF9]" edges={["top"]}>
        <View className="flex-1 justify-center items-center">
          <Text>User not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleFollowPress = () => {
    // TODO: Implement follow logic
    console.log("Follow pressed");
  };

  const handleMessagePress = () => {
    // Navigate to chat with this friend
    router.push(`/messages/${id}` as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDFBF9]" edges={["top"]}>
      <ScrollView className="flex-1 px-6">
        {/* Profile Top Bar - similar to ProfileTopBar */}
        <View className="py-2">
          <View className="flex-row items-center pb-4 gap-2">
            <TouchableOpacity onPress={() => router.back()} className="mr-2">
              <ArrowLeft width={24} height={24} color="#7F7F7F" />
            </TouchableOpacity>
            <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main">
              {friend.name}
            </Text>
          </View>
          <View className="flex-row items-center">
            {/* avatar wrap */}
            <View className="w-[78px] h-[78px] mr-[24px] justify-center items-center">
              <Image
                className="w-[78px] h-[78px] rounded-full"
                source={{ uri: friend.avatar }}
              />
            </View>
            {/* statistic wrap */}
            <View className="flex-1 justify-between flex-row">
              <View className="justify-center">
                <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
                  {friend.followers >= 1000 ? `${Math.floor(friend.followers / 1000)}k` : friend.followers}
                </Text>
                <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
                  Followers
                </Text>
              </View>
              <View>
                <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
                  {friend.following >= 1000 ? `${Math.floor(friend.following / 1000)}k` : friend.following}
                </Text>
                <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
                  Following
                </Text>
              </View>
              <View>
                <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
                  {friend.places}
                </Text>
                <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
                  Places
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Profile Buttons - Follow and Message instead of Update Profile */}
        <View className="flex-row gap-3 mt-4">
          <View className="flex-1">
            <GradientButton 
              text="Follow" 
              onPress={handleFollowPress}
            />
          </View>
          <View className="flex-1">
            <SolidButton 
              text="Message"
              onPress={handleMessagePress}
              icon={<MessageIcon width={16} height={16} color="#F45A06" />}
            />
          </View>
        </View>

        {/* story collections - without Add button */}
        <View className="py-[24px]">
          <StoryCollections storyCollections={storyCollections} />
        </View>

        {/* profile tabs */}
        <ProfileInnerTabs />
      </ScrollView>
    </SafeAreaView>
  );
}
