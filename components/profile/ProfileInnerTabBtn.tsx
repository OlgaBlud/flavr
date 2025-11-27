import React from "react";
import { TouchableOpacity, View } from "react-native";

import Map from "@/assets/icons/Map";
import MapPoint from "@/assets/icons/MapPoint";
import PostsIcon from "@/assets/icons/PostsIcon";

type TabName = "posts" | "map" | "places";

type Props = {
  tab: TabName;
  active: boolean;
  onPress: () => void;
};

function ProfileInnerTabButton({ tab, active, onPress }: Props) {
  const color = active ? "#F56005" : "#121212";

  const renderIcon = () => {
    switch (tab) {
      case "posts":
        return (
          <PostsIcon
            width={16}
            height={16}
            color={color}
            colorSecondary={active ? "#F56005" : "transparent"}
          />
        );
      case "map":
        return <Map width={16} height={16} color={color} />;
      case "places":
        return <MapPoint width={16} height={16} color={color} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} className="items-center ">
      <View className="px-[21px] mb-[4px]">{renderIcon()}</View>

      {active && <View className="bg-[#F56005] h-[3px] rounded-[9px] w-full" />}
    </TouchableOpacity>
  );
}
export default ProfileInnerTabButton;
