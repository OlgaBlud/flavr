import { Tag } from "@/type";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const tagsData: Tag[] = [
  { label: "Vegan friendly" },
  { label: "Vegetarian friendly" },
  { label: "300m from you" },
  { label: "$$$$" },
  { label: "and others" },
];

export default function TagsScroll() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {tagsData.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,

    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(244, 89, 5, 0.13)",
    borderStyle: "solid",
  },
  tagText: {
    color: "#828282",
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
  },
});
