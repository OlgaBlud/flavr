import ArrowDown from "@/assets/icons/ArrowDown";
import Dots3X from "@/assets/icons/Dots3X";
import UpdateProfileIcon from "@/assets/icons/UpdateProfileIcon";

import useAuthStore from "@/store/auth.store";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MessagesTopBar = () => {
  const { user } = useAuthStore();
  // console.log("JSON", JSON.stringify(user, null, 2));
  // console.log("Avatar:", JSON.stringify(user!.avatar, null, 2));
  return (
    <View className="flex-row items-center justify-between ">
      <TouchableOpacity onPress={() => router.push("/profile/edit-profile")}>
        <LinearGradient
          colors={["#FF9500", "#F45905"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            width: 32,
            height: 32,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",

            // iOS shadow
            shadowColor: "rgba(249, 114, 3, 0.20)",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 1,
            shadowRadius: 20,

            // Android shadow
            elevation: 10,
          }}
        >
          <UpdateProfileIcon width={16} height={16} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>

      <View className="flex-row items-center gap-1">
        <Text className=" text-text-main font-inter-semibold text-[16px] leading-[140%]">
          {user!.name}
        </Text>
        <TouchableOpacity>
          <ArrowDown width={25} height={13} color={"#7F7F7F"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Dots3X width={25} height={25} color={"#828282"} />
      </TouchableOpacity>
    </View>
  );
};

export default MessagesTopBar;
