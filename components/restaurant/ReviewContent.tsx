import { getReviewsByRestaurantId } from "@/mock-data/restaurantReviews";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";

interface ReviewContentProps {
  restaurantId: number;
}

function ReviewContent({ restaurantId }: ReviewContentProps) {
  const reviews = getReviewsByRestaurantId(restaurantId);

  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ReviewItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ReviewContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: "33%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FDFBF9",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FDFBF9",
  },
});
