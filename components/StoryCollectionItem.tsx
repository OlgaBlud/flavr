import GradientEllipse from "@/assets/icons/component-icons/GradientEllipse";
import { StoryCollection } from "@/type";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

function StoryCollectionItem({ title, cover }: StoryCollection) {
  return (
    <Pressable className="items-center mr-6">
      <View className="w-[58px] h-[58px] mb-[10px] relative items-center justify-center">
        <View className="absolute top-0 left-0">
          <GradientEllipse />
        </View>
        <View className="w-[52px] h-[52px] rounded-full overflow-hidden ">
          <Image source={{ uri: cover }} className="w-full h-full" />
        </View>
      </View>
      <Text className="font-poppins text-[12px] text-text-main leading-[125%]">
        {title}
      </Text>
    </Pressable>
  );
}
export default StoryCollectionItem;
