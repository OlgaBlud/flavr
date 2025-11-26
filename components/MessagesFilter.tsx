import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import Filter from "@/assets/icons/component-icons/Filter";
import FilterButton from "./FilterBtn";

const MessagesFilter = () => {
  const [activeFilter, setActiveFilter] = useState("Primary");
  const filters = ["Primary", "Requests", "General"];
  return (
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
  );
};

export default MessagesFilter;
