import ProfileInnerTabs from "@/components/ProfileInnerTabs";
import ProfileMainBtns from "@/components/ProfileMainBtns";
import ProfileTopBar from "@/components/ProfileTopBar";
import StoryCollectionAddBtn from "@/components/StoryCollectionAddBtn";
import StoryCollections from "@/components/StoryCollections";
import { storyCollections } from "@/mock-data/storyCollections";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1  bg-white p-6">
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
