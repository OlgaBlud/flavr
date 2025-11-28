import React from "react";
import {
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Heart from "@/assets/icons/Heart";
import Like from "@/assets/icons/Like";
import Star from "@/assets/icons/Star";
import useWishlistStore from "@/store/wishlist.store";
import { popularPlaceProps } from "@/type";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import RestaurantTags from "./RestaurantTags";

export default function PopularPlaceCard({
  image,
  name,
  rating,
  reviews = 0,
  tags,
  friendsRating,
  onLike,
  liked = false,
  id,
}: popularPlaceProps) {
  const router = useRouter();
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(id));
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const handleToggleWishlist = () => {
    toggleWishlist({
      id,
      name,
      image,
      rating: rating ?? null,
      reviews: reviews ?? 0,
      tags: tags ?? [],
      friendsRating: friendsRating ?? null,
    });
    onLike?.();
  };

  const handlePress = () => {
    router.push(`/home/${id}?source=map`);
  };

  return (
    <TouchableOpacity
      className="w-[200px] mr-4"
      onPress={handlePress}
      activeOpacity={0.8}
    >
      {/* Image background */}
      <ImageBackground
        source={image}
        className="h-[92px] rounded-lg overflow-hidden justify-between p-3"
        resizeMode="cover"
      >
        {/* Like button */}
        <TouchableOpacity onPress={handleToggleWishlist} className="self-end">
          {isInWishlist ? (
            <Heart width={16} height={16} color="#F56005" />
          ) : (
            <Like width={16} height={16} color="white" />
          )}
        </TouchableOpacity>

        {/* Rating */}
        <BlurView
          intensity={Platform.OS === "ios" ? 30 : 100}
          tint={Platform.OS === "ios" ? "default" : "dark"} //  light / dark / default
          className="flex-row items-center gap-1 bg-[rgba(255,255,255,0.27)] rounded-2xl px-1 py-0.5 self-end backdrop-blur-sm overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.27)",
            shadowColor: "rgba(174, 173, 173, 0.15)",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 26.7,
            elevation: 8,
          }}
        >
          <Star width={16} height={16} color="#F9D013" />
          <Text className=" text-white text-[16px] leading-[22.4px] font-poppins-medium">
            {rating ? rating : "..."}
          </Text>
          {rating && (
            <Text className="text-white text-[10px] font-normal leading-[14px] font-poppins">
              ({reviews}+)
            </Text>
          )}
        </BlurView>
      </ImageBackground>

      {/* Info section */}
      <View className="mt-3">
        <Text className="text-[14px]  leading-[17.36px] text-text-main font-poppins-medium mb-2">
          {name}
        </Text>

        {/* Tags */}
        <RestaurantTags tags={tags} />
      </View>
    </TouchableOpacity>
  );
}
