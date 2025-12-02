import Atmosphere from "@/assets/icons/Atmosphere";
import Food from "@/assets/icons/Food";
import Service from "@/assets/icons/Service";
import Stars from "@/components/wishlist/Stars";
import useAuthStore from "@/store/auth.store";
import useReviewsStore from "@/store/reviews.store";
import { ReviewProps } from "@/type";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export default function ReviewItem({
  id,
  name,
  photo,
  food,
  service,
  atmosphere,
  review,
}: ReviewProps) {
  const { user } = useAuthStore();
  const { deleteReview } = useReviewsStore();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const isCurrentUser = user?.name === name;

  const handleDelete = () => {
    deleteReview(id);
    setShowDeleteModal(false);
  };

  return (
    <View className="mb-4">
      {/* Фото + ім'я */}
      <View className="flex-row items-center mb-2 gap-2 justify-between">
        <View className="flex-row items-center gap-2">
          <Image
            source={{ uri: photo }}
            className="w-[32px] h-[32px] rounded-full"
            resizeMode="cover"
          />
          <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
            {name}
          </Text>
        </View>
        
        {isCurrentUser && (
          <TouchableOpacity 
            onPress={() => setShowDeleteModal(true)}
            className="px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 149, 0, 0.08)',
            }}
            activeOpacity={0.7}
          >
            <Text className="text-[#FF9500] text-[10px] font-poppins-medium">
              Delete
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Показники */}
      <View className="flex-row gap-4 mb-2">
        <View className="w-16">
          <View className="flex-row items-center gap-1 mb-1">
            <Food width={24} height={24} />
            <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
              {food}
            </Text>
          </View>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Food
          </Text>
          <Stars rating={food} size={10} />
        </View>
        <View className="w-16">
          <View className="flex-row items-center gap-1 mb-1">
            <Service width={24} height={24} />
            <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
              {service}
            </Text>
          </View>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Service
          </Text>
          <Stars rating={service} size={10} />
        </View>
        <View className="w-16">
          <View className="flex-row items-center gap-1 mb-1">
            <Atmosphere width={24} height={24} />
            <Text className="text-text-main text-[12px] font-poppins-medium tracking-[-0.3px] ">
              {atmosphere}
            </Text>
          </View>
          <Text className="text-text-grey font-inter text-[10px] leading-[132%]">
            Atmosphere
          </Text>
          <Stars rating={atmosphere} size={10} />
        </View>
      </View>
      {/* Текст відгуку */}
      {review && review.trim() !== "" && (
        <Text className="text-text-light text-xs font-poppins">{review}</Text>
      )}
      
      {/* Delete Confirmation Modal */}
      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <TouchableOpacity 
            className="absolute inset-0" 
            activeOpacity={1}
            onPress={() => setShowDeleteModal(false)}
          />
          <View 
            className="bg-white mx-6 rounded-3xl overflow-hidden"
            style={{ 
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 20,
              elevation: 16,
              maxWidth: 320,
            }}
          >
            <View className="items-center pt-6 pb-4 px-6">
              <Text className="text-[#141414] text-lg font-poppins-semibold mb-2 text-center">
                Delete Review?
              </Text>
              <Text className="text-[#828282] text-sm font-poppins text-center leading-5 mb-6">
                This will permanently remove your review.{'\n'}You can&apos;t undo this action.
              </Text>
              
              <View className="w-full gap-3">
                <TouchableOpacity
                  onPress={handleDelete}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={["#ff9500", "#f45905"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      height: 56,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 28,
                      shadowColor: '#FF9500',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 12,
                      elevation: 8,
                    }}
                  >
                    <Text className="text-white text-[15px] font-poppins-semibold">
                      Delete
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPress={() => setShowDeleteModal(false)}
                  className="h-14 justify-center items-center rounded-[28px]"
                  activeOpacity={0.8}
                >
                  <Text className="text-[#828282] text-[15px] font-poppins-medium">
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
