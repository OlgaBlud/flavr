import React from "react";
import { Text, View } from "react-native";

function ReviewContent() {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Reviews List</Text>
      <Text>Содержимое Review...</Text>
      <View className="flex-1 items-center justify-center bg-blue">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
    </View>
  );
}

export default ReviewContent;
