import Star from "@/assets/icons/component-icons/Star";
import React from "react";
import { Text, View } from "react-native";

type RatingItemProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
  stars: number;
};

const RatingItem = ({ icon, label, value, stars = 3 }: RatingItemProps) => {
  const renderStars = (rating: number) => {
    const yellowStars = Math.round(rating);
    return (
      <View className="flex-row">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            width={15}
            height={15}
            color={i < yellowStars ? "#F9D013" : "#C4C4C4"}
          />
        ))}
      </View>
    );
  };
  return (
    <View className="">
      <View className="flex-row items-center mb-1">
        {icon}

        <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px]  ml-1">
          {value}
        </Text>
      </View>
      <Text className="text-text-grey font-inter text-[13px] leading-[132%] mb-1">
        {label}
      </Text>
      {renderStars(stars)}
    </View>
  );
};

export default RatingItem;
