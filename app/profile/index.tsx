import ProfileInnerTabs from "@/components/profile/ProfileInnerTabs";
import ProfileMainBtns from "@/components/profile/ProfileMainBtns";
import ProfileTopBar from "@/components/profile/ProfileTopBar";
import StoryCollectionAddBtn from "@/components/profile/StoryCollectionAddBtn";
import StoryCollections from "@/components/profile/StoryCollections";
import { storyCollections } from "@/mock-data/storyCollections";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1  bg-[#FDFBF9] p-6" edges={["top"]}>
      {/* profile top bar */}
      <ProfileTopBar />

      {/* profile buttons */}
      <ProfileMainBtns />

      {/* story collections */}
      <View className="py-[24px] flex-row items-center ">
        <StoryCollectionAddBtn />
        <StoryCollections storyCollections={storyCollections} />
      </View>
      {/* profile tabs */}
      <ProfileInnerTabs />
    </SafeAreaView>
  );
}
export default ProfileScreen;
