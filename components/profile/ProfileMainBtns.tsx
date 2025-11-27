import UpdateProfileIcon from "@/assets/icons/UpdateProfileIcon";
import FilterBtn from "@/components/deals/FilterBtn";
import { GradientButton } from "@/components/ui/GradientButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

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
        <FilterBtn
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
