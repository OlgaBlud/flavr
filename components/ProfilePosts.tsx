import { mockProfilePosts } from "@/mock-data/profilePosts";
import React from "react";
import { FlatList, View } from "react-native";
import PostItem from "./PostItem";

const ProfilePosts = () => {
  return (
    <View className="flex-1">
      <FlatList
        data={mockProfilePosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem image={item.image} views={item.views} />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        columnWrapperStyle={{
          gap: 8,
          marginBottom: 8,
        }}
      />
    </View>
  );
};

export default ProfilePosts;
