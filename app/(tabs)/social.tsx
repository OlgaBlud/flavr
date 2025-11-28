import FriendsList from "@/components/social/FriendsList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SocialScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <FriendsList />
    </SafeAreaView>
  );
}
