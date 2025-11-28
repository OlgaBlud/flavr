import RestaurantCard from "@/components/restaurant/RestaurantCard";
import { restaurantsMock } from "@/mock-data/restaurants";
import React from "react";
import { FlatList } from "react-native";

const ProfilePlacesList = () => {
  return (
    <FlatList
      data={restaurantsMock}
      renderItem={({ item }) => (
        <RestaurantCard
          name={item.name}
          image={item.image}
          ratings={{
            food: item.food || 0,
            service: item.service || 0,
            atmosphere: item.atmosphere || 0,
          }}
          reviewsCount={item.reviews}
          friendReviews={0}
          tags={item.tags}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 12 }}
    />
  );
};

export default ProfilePlacesList;
