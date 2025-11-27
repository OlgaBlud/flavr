import RestaurantCard from "@/components/restaurant/RestaurantCard";
import { restaurantsMock } from "@/mock-data/restaurants";
import React from "react";
import { FlatList } from "react-native";

const ProfilePlacesList = () => {
  return (
    <FlatList
      data={restaurantsMock}
      renderItem={({ item }) => <RestaurantCard {...item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 12 }}
    />
  );
};

export default ProfilePlacesList;
