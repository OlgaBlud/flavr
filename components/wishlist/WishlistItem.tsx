import Star from "@/assets/icons/Star";
import WishlistFriends from "@/assets/icons/WishlistFriends";
import WishlistRating from "@/assets/icons/WishlistRating";
import { WishlistPlace } from "@/store/wishlist.store";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React from "react";
import {
    ImageBackground,
    Platform,
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
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/restaurant/${place.id}`);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={place.image}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <Text style={styles.name}>{place.name}</Text>

        {/* Rating Component */}
        {place.rating != null && (
          <BlurView
            intensity={Platform.OS === "ios" ? 17 : 17}
            tint="light"
            style={styles.ratingCard}
          >
            {place.friendsRating != null ? (
              // With Friends Rating - two columns
              <View style={styles.twoColumns}>
                {/* Overall Column */}
                <View style={styles.column}>
                  <WishlistRating width={16} height={16} color="white" />
                  <Text style={styles.columnLabel}>Overall</Text>
                  <Text style={styles.columnValue}>{place.rating}</Text>
                </View>

                {/* Divider */}
                <View style={styles.divider} />

                {/* Friends Column */}
                <View style={styles.column}>
                  <WishlistFriends width={16} height={16} color="white" />
                  <Text style={styles.columnLabel}>Friends</Text>
                  <Text style={styles.columnValue}>{place.friendsRating}</Text>
                </View>
              </View>
            ) : (
              // Without Friends Rating - single layout
              <View style={styles.singleLayout}>
                <View style={styles.ratingHeader}>
                  <WishlistRating width={16} height={16} color="white" />
                  <Text style={styles.overallRatingLabel}>Overall Rating</Text>
                </View>
                <View style={styles.ratingStars}>
                  <Text style={styles.ratingNumber}>{place.rating}</Text>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} width={15} height={15} color="#F9D013" />
                  ))}
                </View>
              </View>
            )}
          </BlurView>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '32%',
    aspectRatio: 110 / 187,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 6,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  image: {
    borderRadius: 4,
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
  ratingCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.32)",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    overflow: "hidden",
  },
  // Two columns layout (with friends rating)
  twoColumns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  column: {
    alignItems: "center",
    gap: 4,
  },
  columnLabel: {
    fontSize: 10,
    color: "#FFFFFF",
    fontFamily: "PoppinsRegular",
  },
  columnValue: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: -0.36,
    color: "#FFFFFF",
    fontFamily: "PoppinsSemiBold",
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.36)",
  },
  // Single layout (without friends rating)
  singleLayout: {
    gap: 8,
  },
  ratingHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  overallRatingLabel: {
    fontSize: 10,
    lineHeight: 13.2, 
    fontWeight: "400",
    color: "#FFFFFF",
    fontFamily: "PoppinsRegular",
  },
  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingNumber: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: -0.36,
    color: "#FFFFFF",
    fontFamily: "PoppinsMedium",
    marginRight: 4,
  },
});
