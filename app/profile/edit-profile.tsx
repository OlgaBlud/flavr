import ArrowLeft from "@/assets/icons/component-icons/ArrowLeft";
import { GradientButton } from "@/components/GradientButton";
import { logoutAppwrite } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfile() {
  const router = useRouter();

  const { user, setUser, setIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    console.log("Logout initiated");
    try {
      await logoutAppwrite();
      // console.log("logoutAppwrite");
      setUser(null);
      setIsAuthenticated(false);
      // console.log("User after logout:", useAuthStore.getState().user);
      // console.log(
      //   "isAuthenticated after logout:",
      //   useAuthStore.getState().isAuthenticated
      // );
      router.replace("/sign-in");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  if (!user) {
    return (
      <View>
        <Text>No user logged in</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6 items-center justify-center">
      <View className="w-[60%] mb-10">
        <GradientButton
          text="Back"
          icon={<ArrowLeft width={16} height={16} />}
          onPress={() => router.back()}
        />
      </View>

      <Text style={{ fontSize: 26, marginTop: 20 }}>Edit your profile</Text>

      <TextInput
        defaultValue={user?.name}
        style={{
          marginTop: 20,
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
        }}
      />

      <TouchableOpacity
        className="mt-6 bg-orange-500 rounded-xl py-3"
        onPress={() => {
          // TODO: save data
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          Save
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>Welcome, {user?.name}</Text>
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}
