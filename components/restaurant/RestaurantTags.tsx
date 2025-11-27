import React from "react";
import { Text, View } from "react-native";
type RestaurantTagsProps = {
  tags?: string[];
};
const RestaurantTags = ({ tags }: RestaurantTagsProps) => {
  if (!tags || tags.length === 0) return null;
  return (
    <View className="flex-row items-center">
      {tags.map((tag, index) => (
        <View key={index} className="flex-row items-center">
          <Text className="font-inter text-[13px] text-text-grey leading-[132%]">
            {tag}
          </Text>
          {index < tags.length - 1 && (
            <View className="w-[4px] h-[4px] rounded-full bg-primary mx-2" />
          )}
        </View>
      ))}
    </View>
  );
};

export default RestaurantTags;
