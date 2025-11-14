// import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { logoutAppwrite } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";

import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DealsScreen() {
  // const { user, handleLogout } = useGlobalContext();
  const { user, setUser, setIsAuthenticated, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAppwrite();
      console.log("logoutAppwrite");
      setUser(null);
      setIsAuthenticated(false);
      // console.log(useAuthStore.getState().isAuthenticated);
      router.replace("/(auth)/sign-in");
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
