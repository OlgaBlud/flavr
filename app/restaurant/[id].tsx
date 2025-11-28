import ArrowLeft from "@/assets/icons/ArrowLeft";
import Save from "@/assets/icons/Save";
import OverviewContent from "@/components/restaurant/OverviewContent";
import ReviewContent from "@/components/restaurant/ReviewContent";
import TabButton from "@/components/ui/TabButton";
import { getRestaurantById } from "@/mock-data/restaurants";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RestaurantDetailsScreen() {
  const { width } = Dimensions.get("window");
  const [activeTab, setActiveTab] = useState("Overview");
  const router = useRouter();
  const { id, source } = useLocalSearchParams();

  // Load restaurant data by id
  const restaurantId = typeof id === "string" ? parseInt(id) : Number(id);
  const restaurant = getRestaurantById(restaurantId);

  if (!restaurant) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 ">
      <ImageBackground
        style={{
          position: "absolute",
          top: -120,
          width: width,
          height: width,
        }}
        source={restaurant.image}
        resizeMode="cover"
      ></ImageBackground>
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* top bar */}
        <View style={styles.topBar} className="mt-2">
          <BlurView className="rounded-full overflow-hidden">
            <TouchableOpacity
              style={styles.btnWrap}
              onPress={() => {
                if (source === "map") {
                  router.push("/home");
                } else {
                  router.back();
                }
              }}
            >
              <ArrowLeft width={20} height={20} color="white" />
            </TouchableOpacity>
          </BlurView>
          <BlurView className="rounded-full overflow-hidden">
            <View style={styles.reviewWrap}>
              <TabButton
                title="Overview"
                isActive={activeTab === "Overview"}
                onPress={() => setActiveTab("Overview")}
              />
              <TabButton
                title={`Reviews (${restaurant.reviews})`}
                isActive={activeTab === "Review"}
                onPress={() => setActiveTab("Review")}
              />
            </View>
          </BlurView>
          <BlurView className="rounded-full overflow-hidden">
            <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
              <Save width={20} height={20} color="white" />
            </TouchableOpacity>
          </BlurView>
        </View>
        {/* content */}
        <View className="flex-1 mt-8">
          {activeTab === "Overview" ? (
            <OverviewContent restaurant={restaurant} />
          ) : (
            <ReviewContent restaurantId={restaurantId} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  btnWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.33)",
    shadowColor: "rgba(174, 173, 173, 0.15)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 27,
    elevation: 8,
  },
  reviewWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: "rgba(255, 255, 255, 0.33)",
    borderRadius: 24,
    shadowColor: "rgba(174, 173, 173, 0.15)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 27,
    elevation: 8,
  },
});
