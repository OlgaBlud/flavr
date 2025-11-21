import { mockPlaces } from "@/mock-data/places";
import React from "react";
import { FlatList } from "react-native";
import RestaurantCard from "./RestaurantCard";

const ProfilePlacesList = () => {
  return (
    <FlatList
      data={mockPlaces}
      renderItem={({ item }) => <RestaurantCard {...item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProfilePlacesList;
