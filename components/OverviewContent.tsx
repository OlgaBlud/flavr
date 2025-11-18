import Atmosphere from "@/assets/icons/Atmosphere";
import Clock from "@/assets/icons/Clock";
import Food from "@/assets/icons/Food";
import Navigation from "@/assets/icons/Navigation";
import Phone from "@/assets/icons/Phone";
import Service from "@/assets/icons/Service";
import Star from "@/assets/icons/Star";
import { popularPlacesMock } from "@/mock-data/popularPlaces";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GradientButton } from "./GradientButton";
import PopularPlaceCard from "./PopularPlaceCard";
import { SolidButton } from "./SolidButton";
import StatItem from "./StatItem";
import TagsScroll from "./TagsScroll";

function OverviewContent() {
  return (
    <ScrollView
      className="p-4 flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
      // contentContainerStyle={{
      //   paddingLeft: insets.left,
      //   paddingRight: insets.right,
      // }}
      // contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* // main info */}

      <View className="flex-row items-start justify-between mb-4">
        <View className="gap-2">
          {/* restDescrWrap: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  }, */}
          <View className="flex-row items-center gap-2">
            <Text style={styles.restTypeText}>$$</Text>
            <View style={styles.orangeDot}></View>
            <Text style={styles.restTypeText}>American restaurant</Text>
          </View>
          <Text className="text-text-main text-[20px] leading-[28px] capitalize font-poppins-bold">
            Wiley&#39;s downtown bistro
          </Text>
          <View style={styles.infoWrap}>
            <Clock width={16} height={16} color="#F56005" />
            <Text style={styles.scheduleText}>Open until 20:30 PM</Text>
          </View>
        </View>
        <View style={styles.infoWrap}>
          <Star width={16} height={16} color="#FF6B00" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </View>
      {/* // statistic */}
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
        <StatItem
          icon={<Atmosphere width={22} height={21} />}
          number={4.8}
          label="Atmosphere"
        />
        <StatItem
          icon={<Service width={24} height={24} />}
          number={4.3}
          label="Service"
        />
        <StatItem
          icon={<Food width={23} height={24} />}
          number={4.9}
          label="Food"
        />
      </View>
      {/* tags */}
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.title}>Info</Text>
        <TagsScroll />
      </View>
      {/* buttons */}
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
        <View className="flex-1">
          <GradientButton
            text="Call Now"
            icon={<Phone width={16} height={16} color="white" />}
            onPress={() => {}}
          />
        </View>
        <SolidButton
          text="Navigate"
          icon={<Navigation width={16} height={16} />}
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
  // description

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
