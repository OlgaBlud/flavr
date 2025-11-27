import { getReviewsByRestaurantId } from "@/mock-data/restaurantReviews";
import React from "react";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

interface ReviewContentProps {
  restaurantId: number;
}

function ReviewContent({ restaurantId }: ReviewContentProps) {
  const reviews = getReviewsByRestaurantId(restaurantId);

  return (
    <FlatList
      className="p-4"
      data={reviews}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ReviewItem {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ReviewContent;
