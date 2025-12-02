import { allReviewsMock, Review } from "@/mock-data/restaurantReviews";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ReviewsStore {
  reviews: Review[];
  addReview: (review: Review) => void;
  deleteReview: (reviewId: number) => void;
  getReviewsByRestaurantId: (restaurantId: number) => Review[];
}

const useReviewsStore = create<ReviewsStore>()(
  persist(
    (set, get) => ({
      reviews: allReviewsMock,
      
      addReview: (review: Review) => {
        set((state) => ({
          reviews: [...state.reviews, review],
        }));
      },
      
      deleteReview: (reviewId: number) => {
        set((state) => ({
          reviews: state.reviews.filter((review) => review.id !== reviewId),
        }));
      },
      
      getReviewsByRestaurantId: (restaurantId: number) => {
        return get().reviews.filter((review) => review.restaurantId === restaurantId);
      },
    }),
    {
      name: "reviews-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useReviewsStore;
