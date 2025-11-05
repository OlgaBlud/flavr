import { icons } from "@/constants";
import { popularPlacesMock } from "@/mock-data/popularPlaces";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GradientButton } from "./GradientButton";
import PopularPlaceCard from "./PopularPlaceCard";
import { SolidButton } from "./SolidButton";
import StatItem from "./StatItem";
import TagsScroll from "./TagsScroll";

function OverviewContent() {
  return (
    <ScrollView
      className="p-4"
      // contentContainerStyle={{
      //   paddingLeft: insets.left,
      //   paddingRight: insets.right,
      // }}
      // contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* // main info */}
      <View style={styles.restMainWrap}>
        <View style={{ gap: 8 }}>
          <View style={styles.restDescrWrap}>
            <Text style={styles.restTypeText}>$$</Text>
            <View style={styles.orangeDot}></View>
            <Text style={styles.restTypeText}>American restaurant</Text>
          </View>
          <Text style={styles.restName}>Wiley&#39;s downtown bistro</Text>
          <View style={styles.infoWrap}>
            <Image style={styles.scheduleIcon} source={icons.clockIcon} />
            <Text style={styles.scheduleText}>Open until 20:30 PM</Text>
          </View>
        </View>
        <View style={styles.infoWrap}>
          <Image source={icons.orangeStarIcon} />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </View>
      {/* // statistic */}
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
        <StatItem icon={icons.atmosphereIcon} number={4.8} label="Atmosphere" />
        <StatItem icon={icons.serviceIcon} number={4.3} label="Service" />
        <StatItem icon={icons.foodIcon} number={4.9} label="Food" />
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
          icon={icons.phoneIcon}
          onPress={() => {}}
        />
        <SolidButton
          text="Navigate"
          icon={icons.navigateIcon}
          onPress={() => {}}
        />
      </View>
      {/* popular */}
      <View>
        <Text style={styles.title}>Popular places</Text>

        <View>
          <FlatList
            horizontal
            data={popularPlacesMock}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PopularPlaceCard {...item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default OverviewContent;

const styles = StyleSheet.create({
  restMainWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // description
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

  ratingText: {
    // 4.8
    color: "#121212",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    fontWeight: "600",
    lineHeight: 22.4,
    wordWrap: "break-word",
  },

  // name
  restName: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 28,
    wordWrap: "break-word",
  },

  infoWrap: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  //  shedule
  scheduleIcon: {
    width: 16,
    height: 16,
  },
  scheduleText: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    lineHeight: 18.48,
    wordWrap: "break-word",
  },

  //  titles
  title: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "InterSemiBold",
    fontWeight: "600",
    lineHeight: 22.4,
    wordWrap: "break-word",
    marginBottom: 16,
  },
});
