import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { Button, Text, View } from "react-native";

export default function DealsScreen() {
  const { user, handleLogout } = useGlobalContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user?.name || "Guest"}</Text>
      <Button title="Logout" color="red" onPress={handleLogout} />
    </View>
  );
}
