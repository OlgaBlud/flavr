import { restaurantsMock } from "@/mock-data/restaurants";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RestaurantListItem from "./RestaurantListItem";

export default function ListView() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantsMock}
        renderItem={({ item }) => <RestaurantListItem restaurant={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF9",
  },
  listContent: {
    paddingTop: 140,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(130, 130, 130, 0.1)",
  },
});
