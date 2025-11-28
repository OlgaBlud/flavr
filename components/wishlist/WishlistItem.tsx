import RatingCard from "@/components/ui/RatingCard";
import { WishlistPlace } from "@/store/wishlist.store";
import { useRouter } from "expo-router";
import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
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
      router.replace(`/home/${place.id}?source=list` as any);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={{ uri: place.image }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <Text style={styles.name}>{place.name}</Text>

        <RatingCard rating={place.rating} friendsRating={place.friendsRating} />
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "32%",
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
});
