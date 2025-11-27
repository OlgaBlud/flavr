import useWishlistStore, { WishlistPlace } from "@/store/wishlist.store";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import WishlistItem from "./WishlistItem";

interface WishlistListProps {
  onPlacePress?: (place: WishlistPlace) => void;
}

export default function WishlistList({
  onPlacePress,
}: WishlistListProps) {
  const { wishlist } = useWishlistStore();
  return (
    <FlatList
      data={wishlist}
      renderItem={({ item }) => (
        <WishlistItem place={item} onPress={onPlacePress ? () => onPlacePress(item) : undefined} />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Wishlist</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{wishlist.length}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No places in wishlist yet</Text>
          <Text style={styles.emptySubtext}>Add places by tapping the heart icon</Text>
        </View>
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  header: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
    fontWeight: "600",
    lineHeight: 22.4,
    color: "#121212",
  },
  badge: {
    backgroundColor: "#F56005",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "InterSemiBold",
  },
  row: {
    justifyContent: "flex-start",
    gap: 6,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
    fontWeight: "600",
    color: "#828282",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    color: "#BFBFBF",
  },
});
