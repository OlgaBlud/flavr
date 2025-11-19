import UpdateProfileIcon from "@/assets/icons/component-icons/UpdateProfileIcon";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import FilterButton from "./FilterBtn";
import { GradientButton } from "./GradientButton";

const ProfileMainBtns = () => {
  return (
    <View className="flex-row gap-[8px] pt-[8px]">
      <View className="flex-1">
        <GradientButton
          text="Update Profile"
          icon={<UpdateProfileIcon width={16} height={16} color={"white"} />}
          onPress={() => router.push("/profile/edit-profile")}
        />
      </View>
      <View className="flex-1">
        <FilterButton
          title="Messages"
          active={true}
          fullWidth={true}
          onPress={() => router.push("/(tabs)/messages")}
        />
      </View>
    </View>
  );
};

export default ProfileMainBtns;
