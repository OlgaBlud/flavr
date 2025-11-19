import Atmosphere from "@/assets/icons/component-icons/Atmosphere";
import Food from "@/assets/icons/component-icons/Food";
import Service from "@/assets/icons/component-icons/Service";
import Star from "@/assets/icons/component-icons/Star";
import { ReviewProps } from "@/type";
import React from "react";
import { Image, Text, View } from "react-native";

export default function ReviewItem({
  name,
  photo,
  food,
  service,
  atmosphere,
  review,
}: ReviewProps) {
  const renderStars = (rating: number) => {
    const yellowStars = Math.round(rating);
    return (
      <View className="flex-row">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            width={10}
            height={10}
            color={i < yellowStars ? "#F9D013" : "#C4C4C4"}
          />
        ))}
      </View>
    );
  };

  return (
    <View className="mb-4">
      {/* Фото + ім’я */}
      <View className="flex-row items-center mb-2 gap-2">
        <Image
          source={{ uri: photo }}
          className="w-[32px] h-[32px] rounded-full"
          resizeMode="cover"
        />
        <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] font-medium">
          {name}
        </Text>
      </View>

      {/* Показники */}
      <View className="flex-row gap-4 mb-2">
        <View className="items-center w-16">
          <Food width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] font-medium">
            {food}
          </Text>

          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Food
          </Text>
          {renderStars(food)}
        </View>
        <View className="items-center w-16">
          <Service width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] font-medium">
            {service}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Service
          </Text>
          {renderStars(service)}
        </View>
        <View className="items-center w-16">
          <Atmosphere width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] font-medium">
            {atmosphere}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Atmosphere
          </Text>
          {renderStars(atmosphere)}
        </View>
      </View>
      {/* Текст відгуку */}
      <Text className="text-text-light text-xs font-poppins">{review}</Text>
    </View>
  );
}
