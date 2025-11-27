import Plus from "@/assets/icons/Plus";
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProfileTopBar = () => {
  const { user } = useAuthStore();

  const handleAddStory = () => {
    // TODO: Add story functionality
  };

  return (
    <View className="py-[8px]">
      <Text className="pb-4 font-inter-semibold text-[16px] leading-[140%] text-text-main ">
        {user!.name}
      </Text>
      <View className="flex-row items-center ">
        {/* avatar wrap */}
        <View className="w-[78px] h-[78px] mr-[24px] justify-center items-center relative">
          <Image
            source={images.avatarEllipse}
            className="w-[78px] h-[78px] absolute top-0 left-0"
          />

          <TouchableOpacity
            className="absolute w-[21px] h-[21px] bg-white bottom-0 right-0 z-[2] items-center justify-center rounded-full"
            style={{
              shadowColor: "rgba(129, 85, 61, 0.2)",
              shadowOffset: { width: 3, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 10,
            }}
            onPress={handleAddStory}
          >
            <Plus color={"#121212"} />
          </TouchableOpacity>
          <Image
            className="w-[70px] h-[70px] rounded-full"
            source={{ uri: user?.avatar }}
          />
        </View>
        {/* statistic wrap */}
        <View className="flex-1 justify-between flex-row">
          <View className="justify-center">
            <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
              54k
            </Text>
            <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
              Followers
            </Text>
          </View>
          <View>
            <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
              3k
            </Text>
            <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
              Following
            </Text>
          </View>
          <View>
            <Text className="font-inter-semibold text-[16px] leading-[140%] text-text-main mb-[4px]">
              300
            </Text>
            <Text className="font-inter-semibold text-[14px] leading-[140%] text-text-light lowercase">
              Places
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileTopBar;
