import React, { useState } from "react";
import { Animated, Text, View } from "react-native";

import Eye from "@/assets/icons/Eye";

type PostItemProps = {
  image: string;
  views: number;
};

const PostItem = ({ image, views }: PostItemProps) => {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="relative w-[32%] aspect-[110/137]">
      {/* Skeleton while loading */}
      {!loaded && (
        <View className="absolute inset-0 bg-gray-200 rounded-[4px]" />
      )}

      <Animated.Image
        source={{ uri: image }}
        className="w-full h-full rounded-[4px]"
        onLoad={handleLoad}
        style={{ opacity }}
        resizeMode="cover"
      />

      <View className="absolute bottom-2 left-2 flex-row items-center gap-[6px]">
        <Eye width={16} height={16} color="#fff" />
        <Text className="font-poppins text-white text-[12px] leading-[140%]">
          {views}
        </Text>
      </View>
    </View>
  );
};

export default PostItem;
