import Star from "@/assets/icons/component-icons/Star";
import WishlistRating from "@/assets/icons/component-icons/WishlistRating";
import { WishlistPlace } from "@/store/wishlist.store";
import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface WishlistItemProps {
  place: WishlistPlace;
  onPress?: () => void;
}

export default function WishlistItem({ place, onPress }: WishlistItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={place.image}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <Text style={styles.name}>{place.name}</Text>

        <View style={styles.ratingsContainer}>
          {/* Overall Rating */}
          {place.rating != null && (
            <View style={styles.ratingCard}>
              <WishlistRating width={12} height={12} color="white" />
              <Text style={styles.ratingLabel}>Overall</Text>
              <View style={styles.ratingValue}>
                <Text style={styles.ratingText}>{place.rating}</Text>
                <Star width={10} height={10} color="#F9D013" />
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    margin: 4,
    borderRadius: 16,
    overflow: "hidden",
    height: 140,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  image: {
    borderRadius: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "PoppinsSemiBold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  ratingsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  ratingCard: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    padding: 4,
    minWidth: 50,
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 8,
    color: "#FFFFFF",
    fontFamily: "PoppinsRegular",
    marginTop: 2,
    marginBottom: 2,
  },
  ratingValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "PoppinsSemiBold",
  },
});
