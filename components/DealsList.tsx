import { Deal, mockDeals } from "@/mock-data/deals";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DealsItem from "./DealsItem";

interface DealsListProps {
  deals?: Deal[];
  onDealPress?: (deal: Deal) => void;
}

export default function DealsList({ 
  deals = mockDeals, 
  onDealPress 
}: DealsListProps) {
  return (
    <FlatList
      data={deals}
      renderItem={({ item }) => (
        <DealsItem 
          deal={item} 
          onPress={() => onDealPress?.(item)} 
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(130, 130, 130, 0.1)",
    marginVertical: 8,
  },
});
