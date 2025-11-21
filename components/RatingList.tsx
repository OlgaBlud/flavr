import Atmosphere from "@/assets/icons/component-icons/Atmosphere";
import Food from "@/assets/icons/component-icons/Food";
import Service from "@/assets/icons/component-icons/Service";
import React from "react";
import { View } from "react-native";
import RatingItem from "./RatingItem";

type RatingListProps = {
  ratings: {
    food: number;
    service: number;
    atmosphere: number;
  };
};

const RatingList = ({ ratings }: RatingListProps) => {
  const ratingData = [
    {
      label: "Atmosphere",
      value: ratings.atmosphere,
      icon: <Atmosphere width={24} height={24} />,
    },
    {
      label: "Service",
      value: ratings.service,
      icon: <Service width={24} height={24} />,
    },

    {
      label: "Food",
      value: ratings.food,
      icon: <Food width={24} height={24} />,
    },
  ];

  return (
    <View className="flex-row gap-4 ">
      {ratingData.map((item) => (
        <RatingItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
          stars={Math.round(item.value)}
        />
      ))}
    </View>
  );
};

export default RatingList;
