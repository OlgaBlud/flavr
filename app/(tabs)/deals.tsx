import { logoutAppwrite } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DealsScreen() {
  const { user, setUser, setIsAuthenticated } = useAuthStore();
  const router = useRouter();

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user?.name}</Text>
      <Button title="Logout" color="red" onPress={handleLogout} />
    </View>
  );
}
