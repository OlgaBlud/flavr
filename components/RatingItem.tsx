import React from "react";
import { Text, View } from "react-native";
import Stars from "./Stars";

type RatingItemProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
  stars: number;
};

const RatingItem = ({ icon, label, value, stars }: RatingItemProps) => {
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
      <Stars rating={stars} size={16} />
    </View>
  );
};

export default RatingItem;
