import ArrowLeft from "@/assets/icons/ArrowLeft";
import Atmosphere from "@/assets/icons/Atmosphere";
import Food from "@/assets/icons/Food";
import Service from "@/assets/icons/Service";
import useAuthStore from "@/store/auth.store";
import useReviewsStore from "@/store/reviews.store";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LeaveReviewScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { user } = useAuthStore();
  const { addReview, reviews } = useReviewsStore();

  const [ratings, setRatings] = useState({
    atmosphere: 0,
    service: 0,
    food: 0,
  });
  const [comment, setComment] = useState("");

  const handleRatingChange = (category: keyof typeof ratings, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  const handleDone = () => {
    if (!user || !id) return;
    
    // Validate ratings
    if (ratings.atmosphere === 0 || ratings.service === 0 || ratings.food === 0) {
      alert("Please rate all categories before submitting");
      return;
    }
    
    // Create new review
    const newReview = {
      id: reviews.length + 1,
      restaurantId: Number(id),
      name: user.name || "Anonymous",
      photo: user.avatar || "https://randomuser.me/api/portraits/lego/1.jpg",
      food: ratings.food,
      service: ratings.service,
      atmosphere: ratings.atmosphere,
      review: comment || "No comment provided",
      isFriend: true, // Current user is always a friend
      date: new Date().toISOString().split("T")[0],
    };

    // Add to store
    addReview(newReview);
    
    console.log("Review saved:", newReview);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const RatingRow = ({
    category,
    label,
    Icon,
  }: {
    category: keyof typeof ratings;
    label: string;
    Icon: React.ComponentType<{ width: number; height: number; color: string }>;
  }) => {
    const iconPositions = React.useRef<{ [key: number]: { x: number; width: number } }>({});

    const handleResponderMove = (event: any) => {
      const touchX = event.nativeEvent.pageX;
      
      // Находим иконку по позиции касания
      for (let rating = 1; rating <= 5; rating++) {
        const pos = iconPositions.current[rating];
        if (pos && touchX >= pos.x && touchX <= pos.x + pos.width) {
          handleRatingChange(category, rating);
          break;
        }
      }
    };

    return (
      <View style={styles.ratingRow}>
        <Text style={styles.ratingLabel}>{label}</Text>
        <View 
          style={styles.ratingIcons}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={handleResponderMove}
          onResponderMove={handleResponderMove}
        >
          {[1, 2, 3, 4, 5].map((rating) => {
            const currentRating = ratings[category];
            const isActive = currentRating >= rating;
            
            return (
              <View
                key={rating}
                style={styles.iconButton}
                onLayout={(event) => {
                  event.currentTarget.measure((fx, fy, width, height, px, py) => {
                    iconPositions.current[rating] = { x: px, width };
                  });
                }}
              >
                <Icon
                  width={32}
                  height={32}
                  color={isActive ? "#FF9500" : "#C4C4C4"}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("@/assets/media/review-bg.avif")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
            <ArrowLeft width={16} height={24} color="#7F7F7F" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Leave your Review</Text>
          <TouchableOpacity 
            style={styles.avatarButton}
            onPress={() => router.push("/profile" as any)}
          >
            <Image
              source={{ uri: user?.avatar }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <RatingRow
              category="atmosphere"
              label="Atmosphere"
              Icon={Atmosphere}
            />

            <RatingRow
              category="service"
              label="Service"
              Icon={Service}
            />

            <RatingRow
              category="food"
              label="Food"
              Icon={Food}
            />

            <View style={styles.commentSection}>
              <TextInput
                style={styles.commentInput}
                multiline
                numberOfLines={4}
                placeholder="Leave a comment"
                placeholderTextColor="#C4C4C4"
                value={comment}
                onChangeText={setComment}
              />
            </View>

            <TouchableOpacity
              onPress={handleDone}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#ff9500", "#f45905"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.doneButton}
              >
                <Text style={styles.doneButtonText}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#141414",
    fontFamily: "PoppinsSemiBold",
  },
  avatarButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#f97503",
    overflow: "hidden",
    shadowColor: "rgba(129, 85, 61, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 24,
    shadowColor: "rgba(129, 85, 61, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  ratingRow: {
    marginBottom: 16,
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#828282",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "PoppinsMedium",
    letterSpacing: -0.28,
  },
  ratingIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  iconButton: {
    padding: 4,
  },
  iconWrapper: {
    position: "relative",
    width: 32,
    height: 32,
  },
  iconBase: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  fillOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 32,
    overflow: "hidden",
  },
  commentSection: {
    marginBottom: 24,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF9500",
    marginBottom: 12,
    fontFamily: "PoppinsSemiBold",
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: "#141414",
    fontFamily: "Poppins",
    minHeight: 100,
    textAlignVertical: "top",
  },
  doneButton: {
    borderRadius: 34,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#FF9500",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  doneButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "PoppinsMedium",
  },
  cancelButton: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#828282",
    fontFamily: "PoppinsMedium",
  },
});
