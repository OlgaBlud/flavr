import Atmosphere from "@/assets/icons/Atmosphere";
import Food from "@/assets/icons/Food";
import Service from "@/assets/icons/Service";
import Star from "@/assets/icons/Star";
import RatingCard from "@/components/ui/RatingCard";
import { Restaurant } from "@/mock-data/restaurants";
import { Href, useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RestaurantListItemProps {
  restaurant: Restaurant;
}

export default function RestaurantListItem({
  restaurant,
}: RestaurantListItemProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/home/${restaurant.id}?source=list` as Href);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} width={12} height={12} color="#F9D013" />);
      } else {
        stars.push(<Star key={i} width={12} height={12} color="#E0E0E0" />);
      }
    }
    return stars;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      {/* Image on the left */}
      <ImageBackground
        source={restaurant.image}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <RatingCard
          rating={restaurant.rating}
          friendsRating={restaurant.friendsRating}
        />
      </ImageBackground>

      {/* Content on the right */}
      <View style={styles.content}>
        {/* Restaurant Name */}
        <Text style={styles.name} numberOfLines={1}>
          {restaurant.name}
        </Text>

        {/* Ratings Row - only show if ratings exist */}
        {(restaurant.atmosphere || restaurant.service || restaurant.food) && (
          <View style={styles.ratingsRow}>
            {/* Atmosphere */}
            {restaurant.atmosphere && (
              <View style={styles.ratingItem}>
                <View style={styles.ratingHeader}>
                  <Atmosphere width={20} height={20} color="#FF9500" />
                  <Text style={styles.ratingValue}>
                    {restaurant.atmosphere}
                  </Text>
                </View>
                <Text style={styles.ratingLabel}>Atmosphere</Text>
                <View style={styles.stars}>
                  {renderStars(restaurant.atmosphere)}
                </View>
              </View>
            )}

            {/* Service */}
            {restaurant.service && (
              <View style={styles.ratingItem}>
                <View style={styles.ratingHeader}>
                  <Service width={20} height={20} color="#FF9500" />
                  <Text style={styles.ratingValue}>{restaurant.service}</Text>
                </View>
                <Text style={styles.ratingLabel}>Service</Text>
                <View style={styles.stars}>
                  {renderStars(restaurant.service)}
                </View>
              </View>
            )}

            {/* Food */}
            {restaurant.food && (
              <View style={styles.ratingItem}>
                <View style={styles.ratingHeader}>
                  <Food width={20} height={20} color="#FF9500" />
                  <Text style={styles.ratingValue}>{restaurant.food}</Text>
                </View>
                <Text style={styles.ratingLabel}>Food</Text>
                <View style={styles.stars}>{renderStars(restaurant.food)}</View>
              </View>
            )}
          </View>
        )}

        {/* Tags */}
        <View style={styles.tagsRow}>
          {restaurant.tags?.map((tag, index) => (
            <React.Fragment key={index}>
              <Text style={styles.tag}>{tag}</Text>
              {index < restaurant.tags!.length - 1 && (
                <Text style={styles.tagDivider}> • </Text>
              )}
            </React.Fragment>
          ))}
        </View>

        {/* Reviews */}
        <TouchableOpacity style={styles.reviewsButton}>
          <Text style={styles.reviewsText}>Reviews ({restaurant.reviews})</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginVertical: 16,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "rgba(129, 85, 61, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  imageBackground: {
    width: 111,
    height: 159,
    justifyContent: "flex-end",
    padding: 8,
  },
  image: {
    borderRadius: 0,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#141414",
    fontFamily: "PoppinsSemiBold",
    marginBottom: 8,
  },
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 8,
  },
  ratingItem: {
    flex: 1,
  },
  ratingHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1D1B20",
    fontFamily: "PoppinsSemiBold",
  },
  ratingLabel: {
    fontSize: 10,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  stars: {
    flexDirection: "row",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 8,
  },
  tag: {
    fontSize: 12,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  tagDivider: {
    fontSize: 12,
    color: "#F56005",
    fontFamily: "PoppinsRegular",
  },
  reviewsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewsText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#F56005",
    fontFamily: "PoppinsMedium",
  },
  chevron: {
    fontSize: 14,
    color: "#F56005",
  },
});
