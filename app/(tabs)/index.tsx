import arrowIcon from "@/assets/icons/arrow-left.png";
import atmosphereIcon from "@/assets/icons/atmosphere.png";
import clockIcon from "@/assets/icons/clock.png";
import foodIcon from "@/assets/icons/food.png";
import navigateIcon from "@/assets/icons/navigation.png";
import phoneIcon from "@/assets/icons/phone.png";
import saveIcon from "@/assets/icons/save.png";
import serviceIcon from "@/assets/icons/service.png";
import orangeStarIcon from "@/assets/icons/star-orange.png";
import { GradientButton } from "@/components/GradientButton";
import ReviewContent from "@/components/ReviewContent";
import { SolidButton } from "@/components/SolidButton";
import StatItem from "@/components/StatItem";
import TabButton from "@/components/TabButton";
import TagsScroll from "@/components/TagsScroll";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.btnWrap} onPress={() => {}}>
          <Image source={arrowIcon} />
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
          <Image source={saveIcon} />
        </TouchableOpacity>
      </View>
      {/* main content */}
      <ScrollView style={styles.scrollArea}>
        {activeTab === "Overview" && (
          <>
            {/* // main info */}
            <View style={styles.restMainWrap}>
              <View style={styles.leftRestMainWrap}>
                <View style={styles.restDescrWrap}>
                  <Text style={styles.restTypeText}>$$</Text>
                  <View style={styles.orangeDot}></View>
                  <Text style={styles.restTypeText}>American restaurant</Text>
                </View>
                <Text style={styles.restName}>Wiley&#39;s downtown bistro</Text>
                <View style={styles.infoWrap}>
                  <Image style={styles.scheduleIcon} source={clockIcon} />
                  <Text style={styles.scheduleText}>Open until 20:30 PM</Text>
                </View>
              </View>
              <View style={styles.infoWrap}>
                <Image source={orangeStarIcon} />
                <Text style={styles.ratingText}>4.8</Text>
              </View>
            </View>
            {/* // statistic */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <StatItem icon={atmosphereIcon} number={4.8} label="Atmosphere" />
              <StatItem icon={serviceIcon} number={4.3} label="Service" />
              <StatItem icon={foodIcon} number={4.9} label="Food" />
            </View>
            {/* tags */}
            <View style={{ marginBottom: 16 }}>
              <Text style={styles.title}>Info</Text>
              <TagsScroll />
            </View>
            {/* buttons */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <GradientButton
                text="Call Now"
                icon={phoneIcon}
                onPress={() => {}}
              />
              <SolidButton
                text="Navigate"
                icon={navigateIcon}
                onPress={() => {}}
              />
            </View>
            {/* popular */}
            <View>
              <Text style={styles.title}>Popular places</Text>
            </View>
          </>
        )}
        {activeTab === "Review" && <ReviewContent />}
      </ScrollView>
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
  scrollArea: {
    backgroundColor: "#fff",
    marginBlockStart: 156,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    gap: 16,
  },
  restDescrWrap: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  restTypeText: {
    // American restaurant
    color: "#828282",
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    lineHeight: 18.48,
    wordWrap: "break-word",
  },
  orangeDot: {
    width: 4,
    height: 4,
    backgroundColor: "#F56005",
    borderRadius: 10,
  },

  restName: {
    // Wiley's downtown bistro
    color: "#121212",
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 28,
    wordWrap: "break-word",
  },
  scheduleText: {
    // Open until 20:30 PM
    color: "#121212",
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    lineHeight: 18.48,
    wordWrap: "break-word",
  },
  ratingText: {
    // 4.8
    color: "#121212",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "600",
    lineHeight: 22.4,
    wordWrap: "break-word",
  },

  // shedule
  infoWrap: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  scheduleIcon: {
    width: 16,
    height: 16,
  },
  leftRestMainWrap: {
    gap: 8,
  },
  restMainWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // titles
  title: {
    // Info
    color: "#121212",
    fontSize: 16,
    fontFamily: "InterSemiBold",
    fontWeight: "600",
    lineHeight: 22.4,
    wordWrap: "break-word",
    marginBottom: 16,
  },
});
