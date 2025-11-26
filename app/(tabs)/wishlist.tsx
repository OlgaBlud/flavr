import WishlistList from "@/components/WishlistList";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <WishlistList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
});
