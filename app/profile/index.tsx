import ProfileTopBar from "@/components/ProfileTopBar";
import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
  const router = useRouter();
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="flex-1  bg-white p-6">
      <ProfileTopBar />
      <Text>Profile Screen</Text>
      {/* Back button */}

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ fontSize: 18 }}>← Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="px-6 py-3 bg-orange-500 rounded-xl"
        onPress={() => router.push("/profile/edit-profile")}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Edit profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default ProfileScreen;
