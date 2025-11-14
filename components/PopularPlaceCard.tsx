import React from "react";
import {
    ImageBackground,
    Platform,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Like from "@/assets/icons/Like";
import Star from "@/assets/icons/Star";
import { popularPlaceProps } from "@/type";
import { BlurView } from "expo-blur";

export default function PopularPlaceCard({
  image,
  name,
  rating,
  reviews = 0,
  tags,
  onLike,
  liked = false,
}: popularPlaceProps) {
  return (
    <View className="w-[200px] mr-4">
      {/* Image background */}
      <ImageBackground
        source={image}
        className="h-[92px] rounded-lg overflow-hidden justify-between p-3"
        resizeMode="cover"
      >
        {/* Like button */}
        <TouchableOpacity onPress={onLike} className="self-end">
          <Like width={16} height={16} color="white" />
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
        <Text className="text-[14px]  leading-[17.36px] text-text-main font-poppins-medium">
          {name}
        </Text>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <View className="flex-row flex-wrap items-center mt-2">
            {tags.map((tag, index) => (
              <View key={index} className="flex-row items-center">
                <Text className="text-text-secondary text-[12px] font-normal font-poppins">
                  {tag}
                </Text>
                {index < tags.length - 1 && (
                  <View className="w-[4px] h-[4px] rounded-full bg-primary mx-2" />
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
