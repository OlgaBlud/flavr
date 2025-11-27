import Star from "@/assets/icons/Star";
import WishlistFriends from "@/assets/icons/WishlistFriends";
import WishlistRating from "@/assets/icons/WishlistRating";
import { BlurView } from "expo-blur";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

interface RatingCardProps {
  rating?: number | null;
  friendsRating?: number | null;
}

export default function RatingCard({ rating, friendsRating }: RatingCardProps) {
  if (rating == null) return null;

  return (
    <BlurView
      intensity={Platform.OS === "ios" ? 17 : 17}
      tint="light"
      style={styles.ratingCard}
    >
      {friendsRating != null ? (
        <View style={styles.twoColumns}>
          <View style={styles.column}>
            <WishlistRating width={16} height={16} color="white" />
            <Text style={styles.columnLabel}>Overall</Text>
            <Text style={styles.columnValue}>{rating}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.column}>
            <WishlistFriends width={16} height={16} color="white" />
            <Text style={styles.columnLabel}>Friends</Text>
            <Text style={styles.columnValue}>{friendsRating}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.singleLayout}>
          <View style={styles.ratingHeader}>
            <WishlistRating width={16} height={16} color="white" />
            <Text style={styles.overallRatingLabel}>Overall Rating</Text>
          </View>
          <View style={styles.ratingStars}>
            <Text style={styles.ratingNumber}>{rating}</Text>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} width={13} height={13} color="#F9D013" />
            ))}
          </View>
        </View>
      )}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  ratingCard: {
    borderRadius: 4,
    overflow: "hidden",
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: "rgba(255, 255, 255, 0.32)",
  },
  // Two columns layout
  twoColumns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  column: {
    flex: 1,
    alignItems: "center",
    gap: 1,
  },
  columnLabel: {
    color: "#FFFFFF",
    fontSize: 8,
    fontFamily: "InterRegular",
    fontWeight: "400",
    lineHeight: 10.56,
  },
  columnValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "InterMedium",
    fontWeight: "500",
    lineHeight: 18.48,
    letterSpacing: -0.36,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  // Single layout
    singleLayout: {
    alignItems: "center",
    gap: 1,
  },
  ratingHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  overallRatingLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "InterRegular",
    fontWeight: "400",
    lineHeight: 13.2,
  },
  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingNumber: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "InterMedium",
    fontWeight: "500",
    lineHeight: 18.48,
    letterSpacing: -0.36,
    marginRight: 4,
  },
});
