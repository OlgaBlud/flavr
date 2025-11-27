import { Restaurant, restaurantsMock } from "@/mock-data/restaurants";
import { Href, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapView() {
  const router = useRouter();

  const handleRestaurantPress = (restaurantId: number) => {
    // Navigate to restaurant details
    router.push(`/restaurant/${restaurantId}` as Href);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map View</Text>
      <Text style={styles.subtitle}>
        {restaurantsMock.length} restaurants nearby
      </Text>

      {/* TODO: Implement actual map with markers */}
      {/* For now, just a placeholder */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          🗺️ Map with restaurant markers will be here
        </Text>
        <Text style={styles.info}>
          Click on any marker to see restaurant details
        </Text>
      </View>

      {/* Temporary: List restaurants for testing */}
      <View style={styles.tempList}>
        <Text style={styles.tempTitle}>Restaurants (temp list):</Text>
        {restaurantsMock.slice(0, 3).map((restaurant: Restaurant) => (
          <Text
            key={restaurant.id}
            style={styles.tempItem}
            onPress={() => handleRestaurantPress(restaurant.id)}
          >
            📍 {restaurant.name} - Tap to open
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  placeholder: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: "#666",
  },
  tempList: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff3cd",
    borderRadius: 8,
  },
  tempTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  tempItem: {
    fontSize: 14,
    color: "#0066cc",
    paddingVertical: 8,
    textDecorationLine: "underline",
  },
});
