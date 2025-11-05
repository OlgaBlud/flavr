import { reviewsMock } from "@/mock-data/restaurantReviews";
import React from "react";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

function ReviewContent() {
  return (
    <FlatList
      data={reviewsMock}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ReviewItem {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ReviewContent;
