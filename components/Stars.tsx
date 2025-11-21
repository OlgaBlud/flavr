import Star from "@/assets/icons/component-icons/Star";
import React from "react";
import { View } from "react-native";
type StarsProps = {
  rating: number;
  size?: number;
};
const Stars = ({ rating, size = 10 }: StarsProps) => {
  const yellowStars = Math.round(rating);
  return (
    <View className="flex-row">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          color={i < yellowStars ? "#F9D013" : "#C4C4C4"}
        />
      ))}
    </View>
  );
};

export default Stars;
