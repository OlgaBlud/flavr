import DealsList from "@/components/deals/DealsList";
import { Deal } from "@/mock-data/deals";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DealsScreen() {
  const handleDealPress = (deal: Deal) => {
    Alert.alert(
      deal.restaurantName,
      `${deal.title}\n\n${deal.subtitle}`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <DealsList onDealPress={handleDealPress} />
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
