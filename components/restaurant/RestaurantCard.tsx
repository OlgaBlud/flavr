import ArrowDown from "@/assets/icons/ArrowDown";
import Reviewers from "@/assets/icons/Reviewers";
import RatingList from "@/components/profile/RatingList";
import Stars from "@/components/wishlist/Stars";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import RestaurantTags from "./RestaurantTags";

type RestaurantCardProps = {
  name: string;
  image: string;
  ratings: {
    food: number;
    service: number;
    atmosphere: number;
  };
  reviewsCount: number;
  friendReviews: number;
  tags: string[];
};

const RestaurantCard = ({
  name,
  image,
  ratings,
  reviewsCount,
  friendReviews,
  tags,
}: RestaurantCardProps) => {
  const { food, service, atmosphere } = ratings;
  const generalRating = Number(((food + service + atmosphere) / 3).toFixed(1));

  return (
    <View
      className="bg-white rounded-[8px]  flex-row  "
      style={{
        shadowColor: "rgba(129, 85, 61, 0.08)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 4,
      }}
    >
      <View className="w-[111px] relative" style={{ aspectRatio: 111 / 159 }}>
        <Image
          source={{ uri: image }}
          //   className="w-full h-full"
          className="absolute inset-0 w-full h-full rounded-tl-[8px] rounded-bl-[8px]"
          resizeMode="cover"
        />
        <BlurView
          // need to change shadow
          intensity={Platform.OS === "ios" ? 30 : 100}
          tint={Platform.OS === "ios" ? "default" : "dark"}
          style={{
            position: "absolute",
            bottom: 4,
            left: 4,
            right: 4,
            padding: 6,
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,0.32)",
            overflow: "hidden",
          }}
        >
          <View className="flex-row items-center">
            <Reviewers width={16} height={16} color={"#ffffff"} />.0
            <Text className="ml-1 font-inter text-[10px] leading-[132%] text-white">
              Overall Rating
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="mr-1 text-white text-[12px] font-poppins-medium">
              {generalRating}
            </Text>
            <Stars rating={generalRating} size={10} />
          </View>
        </BlurView>
      </View>
      <View className="px-[10px] py-[8px] gap-2">
        <Text className="font-inter-semibold font-[16px] text-text-main leading-[140%]">
          {name}
        </Text>
        <RatingList ratings={ratings} />
        <RestaurantTags tags={tags} />
        <TouchableOpacity className=" flex-row items-center">
          <Text className="mr-1 font-poppins-medium font-[14px] leading-[140%] text-text-orange">
            Reviews
          </Text>
          <Text className="font-poppins font-[12px] leading-[140%] text-text-orange">
            ({reviewsCount})
          </Text>
          <ArrowDown width={20} height={10} color={"#F56005"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantCard;
