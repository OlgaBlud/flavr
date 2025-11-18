import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

function ProfileScreen() {
  const router = useRouter();
  const { user } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text>My Profile Screen</Text>
      {/* Back button */}

      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-4"
      >
        <Text style={{ fontSize: 18 }}>← Back</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: user?.avatar }}
        style={{ width: 120, height: 120, borderRadius: 80 }}
      />

      <Text style={{ fontSize: 24, marginVertical: 16 }}>{user?.name}</Text>

      <TouchableOpacity
        className="px-6 py-3 bg-orange-500 rounded-xl"
        onPress={() => router.push("/profile/edit-profile")}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Edit profile</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ProfileScreen;
