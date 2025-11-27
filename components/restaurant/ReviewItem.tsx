import Atmosphere from "@/assets/icons/Atmosphere";
import Food from "@/assets/icons/Food";
import Service from "@/assets/icons/Service";
import Stars from "@/components/wishlist/Stars";
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
  return (
    <View className="mb-4">
      {/* Фото + ім’я */}
      <View className="flex-row items-center mb-2 gap-2">
        <Image
          source={{ uri: photo }}
          className="w-[32px] h-[32px] rounded-full"
          resizeMode="cover"
        />
        <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
          {name}
        </Text>
      </View>

      {/* Показники */}
      <View className="flex-row gap-4 mb-2">
        <View className="items-center w-16">
          <Food width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
            {food}
          </Text>

          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Food
          </Text>
          <Stars rating={food} size={10} />
        </View>
        <View className="items-center w-16">
          <Service width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
            {service}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Service
          </Text>
          <Stars rating={service} size={10} />
        </View>
        <View className="items-center w-16">
          <Atmosphere width={24} height={24} />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
            {atmosphere}
          </Text>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Atmosphere
          </Text>
          <Stars rating={atmosphere} size={10} />
        </View>
      </View>
      {/* Текст відгуку */}
      <Text className="text-text-light text-xs font-poppins">{review}</Text>
    </View>
  );
}
