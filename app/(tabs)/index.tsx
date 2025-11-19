import ArrowLeft from "@/assets/icons/component-icons/ArrowLeft";
import Save from "@/assets/icons/component-icons/Save";
import OverviewContent from "@/components/OverviewContent";
import ReviewContent from "@/components/ReviewContent";
import TabButton from "@/components/TabButton";
import { images } from "@/constants";
import { BlurView } from "expo-blur";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { width } = Dimensions.get("window");
  const [activeTab, setActiveTab] = useState("Overview");
  // const insets = useSafeAreaInsets();
  // const { isAuthenticated } = useAuthStore();
  // if (!isAuthenticated) return <Redirect href="/(auth)/sign-in" />;

  return (
    <View className="flex-1">
      <ImageBackground
        // className="absolute top-0 w-full h-full"
        style={{
          position: "absolute",
          top: -120,
          width: width,
          height: width,
        }}
        source={images.cafe}
        resizeMode="cover"
      ></ImageBackground>
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* top bar */}
        <View style={styles.topBar} className="mt-2">
          <BlurView className="rounded-full overflow-hidden">
            <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
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
                title="Review"
                isActive={activeTab === "Review"}
                onPress={() => setActiveTab("Review")}
              />
            </View>
          </BlurView>
          <BlurView className="rounded-full overflow-hidden">
            <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
              <Save width={24} height={24} color="white" />
            </TouchableOpacity>
          </BlurView>
        </View>

        {/* end topbar -> main content */}
        <View style={styles.mainContent}>
          {/* <View className="mt-40 rounded-t-3xl "> */}
          {activeTab === "Overview" && <OverviewContent />}
          {activeTab === "Review" && <ReviewContent />}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFBFBF",
    paddingTop: 8,
  },
  topBar: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 30,
    padding: 4,
    backgroundColor: "rgba(255, 255, 255, 0.33)",
    //     backdrop-filter: blur(24px),
    // box-shadow: 0 4px 27px 0 rgba(174, 173, 173, 0.15),
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee",
  },
  btnWrap: {
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: 36,
    height: 36,
    //     backdrop-filter: blur(9px);
    // box-shadow: 0 4px 27px 0 rgba(174, 173, 173, 0.15);
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#fff",
    marginBlockStart: 156,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
