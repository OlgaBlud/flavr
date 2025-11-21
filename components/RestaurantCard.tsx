import ArrowDown from "@/assets/icons/component-icons/ArrowDown";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RatingList from "./RatingList";
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
  return (
    <View className="bg-white rounded-[8px] border border-green-500 flex-row">
      {/* <View>
        <Image source={{ uri: image }} resizeMode="cover" />
      </View> */}
      <View className="w-[111px] relative" style={{ aspectRatio: 111 / 159 }}>
        <Image
          source={{ uri: image }}
          //   className="w-full h-full"
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
        />
        <BlurView
          intensity={30}
          tint="light"
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
          <Text className="text-white text-[12px] font-poppins-medium">
            Add review
          </Text>
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
