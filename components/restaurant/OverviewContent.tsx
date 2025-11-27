import AddWishlist from "@/assets/icons/AddWishlist";
import Atmosphere from "@/assets/icons/Atmosphere";
import Clock from "@/assets/icons/Clock";
import Food from "@/assets/icons/Food";
import Navigation from "@/assets/icons/Navigation";
import Phone from "@/assets/icons/Phone";
import Service from "@/assets/icons/Service";
import Star from "@/assets/icons/Star";
import PopularPlaceCard from "@/components/restaurant/PopularPlaceCard";
import StatItem from "@/components/restaurant/StatItem";
import TagsScroll from "@/components/restaurant/TagsScroll";
import { GradientButton } from "@/components/ui/GradientButton";
import { SolidButton } from "@/components/ui/SolidButton";
import { Restaurant, restaurantsMock } from "@/mock-data/restaurants";
import useWishlistStore from "@/store/wishlist.store";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

interface OverviewContentProps {
  restaurant?: Restaurant;
}

function OverviewContent({ restaurant }: OverviewContentProps) {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(restaurant?.id || "1");

  const handleWishlistToggle = () => {
    if (!restaurant) return;
    toggleWishlist({
      id: restaurant.id,
      name: restaurant.name,
      image: restaurant.image,
      rating: restaurant.rating,
      reviews: restaurant.reviews,
      tags: restaurant.tags,
    });
  };
  // Use mock data if no restaurant provided (for testing)
  const currentRestaurant = restaurant || restaurantsMock[0];
  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
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
            <Text style={styles.restTypeText}>{currentRestaurant.priceRange}</Text>
            <View style={styles.orangeDot}></View>
            <Text style={styles.restTypeText}>{currentRestaurant.cuisine}</Text>
          </View>
          <Text style={styles.restName}>
            {currentRestaurant.name}
          </Text>
          <View style={styles.infoWrap}>
            <Clock width={16} height={16} color="#F56005" />
            <Text style={styles.scheduleText}>{currentRestaurant.hours}</Text>
          </View>
        </View>
        <View style={styles.infoWrap}>
          <Star width={16} height={16} color="#FFC107" />
          <Text style={styles.ratingText}>{currentRestaurant.rating}</Text>
        </View>
      </View>
      {/* // statistic */}
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
        <StatItem
          icon={<Atmosphere width={24} height={24} />}
          number={currentRestaurant.atmosphere || 4.5}
          label="Atmosphere"
        />
        <StatItem
          icon={<Service width={24} height={24} />}
          number={currentRestaurant.service || 4.5}
          label="Service"
        />
        <StatItem
          icon={<Food width={24} height={24} />}
          number={currentRestaurant.food || 4.5}
          label="Food"
        />
      </View>
      {/* tags */}
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.title}>Info</Text>
        <TagsScroll tags={currentRestaurant.tags} />
      </View>
      {/* buttons */}
      <View style={styles.buttonsRow}>
        <GradientButton
          text="Call"
          icon={<Phone width={16} height={16} color="white" />}
          onPress={() => {}}
        />
        <View style={{ flex: 1 }}>
          <SolidButton
            text="Navigate"
            icon={<Navigation width={16} height={16} />}
            onPress={() => {}}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SolidButton
            text={inWishlist ? "Remove" : "Wishlist"}
            icon={<AddWishlist width={16} height={16} />}
            onPress={handleWishlistToggle}
          />
        </View>
      </View>
      {/* popular */}
      <View>
        <Text style={styles.title}>Popular places</Text>

        <View>
          <FlatList
            horizontal
            data={restaurantsMock}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PopularPlaceCard key={`place-${item.id}`} {...item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

export default OverviewContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: "33%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FDFBF9",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FDFBF9",
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
  
  buttonsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
});
