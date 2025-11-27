import React, { useState } from "react";
import { View } from "react-native";
import ProfileInnerTabButton from "./ProfileInnerTabBtn";
import ProfileMap from "./ProfileMap";
import ProfilePlacesList from "./ProfilePlacesList";
import ProfilePosts from "./ProfilePosts";

const ProfileInnerTabs = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "map" | "places">(
    "posts"
  );

  return (
    <View className="flex-1">
      {/* кнопки */}
      <View className="mb-[16px] flex-row justify-between">
        <ProfileInnerTabButton
          tab="posts"
          active={activeTab === "posts"}
          onPress={() => setActiveTab("posts")}
        />

        <ProfileInnerTabButton
          tab="map"
          active={activeTab === "map"}
          onPress={() => setActiveTab("map")}
        />

        <ProfileInnerTabButton
          tab="places"
          active={activeTab === "places"}
          onPress={() => setActiveTab("places")}
        />
      </View>
      {activeTab === "posts" && <ProfilePosts />}
      {activeTab === "map" && <ProfileMap />}
      {activeTab === "places" && <ProfilePlacesList />}
    </View>
  );
};

export default ProfileInnerTabs;
