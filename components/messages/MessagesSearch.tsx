import Microphone from "@/assets/icons/Microphone";
import Search from "@/assets/icons/Search";
import useAuthStore from "@/store/auth.store";
import { router } from "expo-router";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const MessagesSearch = () => {
  const { user } = useAuthStore();
  return (
    <View className="flex-row  py-2 gap-2">
      {/* add avatar transition to profile page */}
      <TouchableOpacity
        className="py-2"
        onPress={() => router.push("/profile")}
      >
        <Image
          source={{ uri: user!.avatar }}
          className="w-[40px] h-[40px] rounded-full"
        />
      </TouchableOpacity>
      <View
        className="flex-1 gap-4 flex-row justify-between items-center bg-white"
        style={{
          backgroundColor: "#fff",
          borderRadius: 34,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 8,
          shadowColor: "rgba(129, 85, 61, 0.08)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,
        }}
      >
        <TouchableOpacity>
          <Search width={21} height={21} color={"#7F7F7F"} />
        </TouchableOpacity>
        <TextInput
          placeholder="Find deals"
          placeholderTextColor="#7F7F7F"
          className="flex-1 font-poppins text-[14px] leading-[140%] text-text-main"
        />
        <TouchableOpacity>
          <Microphone width={31} height={31} color={"#F45A06"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagesSearch;
