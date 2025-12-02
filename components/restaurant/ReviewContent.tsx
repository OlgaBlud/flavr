import useReviewsStore from "@/store/reviews.store";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReviewItem from "./ReviewItem";

interface ReviewContentProps {
  restaurantId: number;
}

function ReviewContent({ restaurantId }: ReviewContentProps) {
  const allReviews = useReviewsStore((state) => state.reviews);
  const router = useRouter();

  const handleLeaveReview = () => {
    router.push({
      pathname: "/home/review",
      params: { id: restaurantId },
    });
  };

  // Фильтруем и сортируем отзывы: новые вверху
  const sortedReviews = React.useMemo(() => {
    const filtered = allReviews.filter((review) => review.restaurantId === restaurantId);
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date || '2000-01-01').getTime();
      const dateB = new Date(b.date || '2000-01-01').getTime();
      return dateB - dateA;
    });
  }, [allReviews, restaurantId]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        data={sortedReviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ReviewItem {...item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={handleLeaveReview}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#ff9500", "#f45905"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.leaveReviewButton}
            >
              <Text style={styles.leaveReviewText}>Leave a Review</Text>
            </LinearGradient>
          </TouchableOpacity>
        }
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
  leaveReviewButton: {
    borderRadius: 34,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#FF9500",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  leaveReviewText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "PoppinsMedium",
  },
});
