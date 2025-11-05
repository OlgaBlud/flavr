import OverviewContent from "@/components/OverviewContent";
import ReviewContent from "@/components/ReviewContent";
import TabButton from "@/components/TabButton";
import { icons } from "@/constants";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Overview");
  // const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
          <Image source={icons.arrowIcon} />
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
          <Image source={icons.saveIcon} />
        </TouchableOpacity>
      </View>
      {/* main content */}
      <View style={styles.mainContent}>
        {/* <View style={{ padding: 16 }}> */}
        {activeTab === "Overview" && <OverviewContent />}
        {activeTab === "Review" && <ReviewContent />}
        {/* </View> */}
      </View>
    </SafeAreaView>
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
