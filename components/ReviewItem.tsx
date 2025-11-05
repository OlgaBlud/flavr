import { icons } from "@/constants";
import { ReviewProps } from "@/type";
import { Ionicons } from "@expo/vector-icons";
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
    const fullStars = Math.round(rating);
    return (
      <View className="flex-row mt-1">
        {[...Array(5)].map((_, i) => (
          <Ionicons
            key={i}
            name={i < fullStars ? "star" : "star-outline"}
            size={16}
            color={i < fullStars ? "#FACC15" : "#C4C4C4"}
          />
        ))}
      </View>
    );
  };

  return (
    <View className=" rounded-2xl p-4 mb-4">
      {/* Фото + ім’я */}
      <View className="flex-row items-center mb-3 gap-2">
        <Image
          source={{ uri: photo }}
          className="w-10 h-10 rounded-full"
          resizeMode="cover"
        />
        <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] font-medium">
          {name}
        </Text>
      </View>

      {/* Показники */}
      <View className="flex-row gap-4 mb-3">
        <View className="items-center w-16">
          <Image source={icons.foodIcon} className="w-6 h-6" />
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            {food}
          </Text>

          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Food
          </Text>
        </View>
        <View className="items-center w-16">
          <Image source={icons.serviceIcon} className="w-6 h-6" />
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            {service}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Service
          </Text>
        </View>
        <View className="items-center w-16">
          <Image source={icons.atmosphereIcon} className="w-6 h-6" />
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            {atmosphere}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Atmosphere
          </Text>
        </View>
      </View>
      {/* Зірки */}
      {renderStars((food + service + atmosphere) / 3)}
      {/* Текст відгуку */}
      <Text className="text-[#6D6D6D] text-sm mt-2 font-poppins">{review}</Text>
    </View>
  );
}
