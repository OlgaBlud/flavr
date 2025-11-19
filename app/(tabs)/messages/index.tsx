import ArrowDown from "@/assets/icons/component-icons/ArrowDown";
import Dots3X from "@/assets/icons/component-icons/Dots3X";
import Filter from "@/assets/icons/component-icons/Filter";
import Microphone from "@/assets/icons/component-icons/Microphone";
import Search from "@/assets/icons/component-icons/Search";
import UpdateProfileIcon from "@/assets/icons/component-icons/UpdateProfileIcon";
import ChatItem from "@/components/ChatItem";
import FilterButton from "@/components/FilterBtn";
import { Chat, mockChats } from "@/mock-data/messages";
import useAuthStore from "@/store/auth.store";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  const { user } = useAuthStore();
  // console.log("JSON", JSON.stringify(user, null, 2));
  // console.log("Avatar:", JSON.stringify(user!.avatar, null, 2));

  const [activeFilter, setActiveFilter] = useState("Primary");
  const filters = ["Primary", "Requests", "General"];

  const renderItem = ({ item }: { item: Chat }) => <ChatItem item={item} />;

  return (
    <SafeAreaView className="bg-[#FDFBF9] flex-1 px-[20px]" edges={["top"]}>
      {/* _____________________________top bar messages__________________________ */}
      <View className="flex-row items-center justify-between ">
        {/* add profile update transition */}
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
      {/* _____________________________search__________________________ */}
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
          className=" flex-1 gap-4 flex-row justify-between items-center bg-white rounded-3xl pl-3 pr-3"
          style={{
            backgroundColor: "#fff",
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
      {/* _____________________________filter__________________________ */}
      <View className=" py-4 flex-row">
        <View className="bg-white rounded-full w-[32px] h-[32px] justify-center items-center ">
          <TouchableOpacity>
            <Filter width={15} height={15} color={"#141414"} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              title={filter}
              active={activeFilter === filter}
              onPress={() => setActiveFilter(filter)}
            />
          ))}
        </ScrollView>
      </View>
      {/* _____________________________messages__________________________ */}

      <FlatList
        data={mockChats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
