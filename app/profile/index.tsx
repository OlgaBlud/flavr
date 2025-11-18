import UpdateProfileIcon from "@/assets/icons/component-icons/UpdateProfileIcon";
import FilterButton from "@/components/FilterBtn";
import { GradientButton } from "@/components/GradientButton";
import ProfileTopBar from "@/components/ProfileTopBar";
import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
  const router = useRouter();
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="flex-1  bg-white p-6">
      <ProfileTopBar />
      {/* profile buttons */}
      <View className="flex-row gap-[8px] pt-[8px]">
        <View className="flex-1">
          <GradientButton
            text="Update Profile"
            icon={<UpdateProfileIcon width={16} height={16} color={"white"} />}
            onPress={() => router.push("/profile/edit-profile")}
          />
        </View>
        <View className="flex-1">
          <FilterButton
            title="Messages"
            active={true}
            fullWidth={true}
            onPress={() => router.push("/(tabs)/messages")}
          />
        </View>
      </View>
      <View className="mt-20">
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;
