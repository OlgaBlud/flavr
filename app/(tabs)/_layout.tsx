import { icons } from "@/constants";
import { TabBarIconProps } from "@/type";
import { Redirect, Tabs } from "expo-router";
import { useState } from "react";
import { Image, View } from "react-native";

export default function TabsLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
    <View className="tab-icon-wrap">
      <Image
        source={icon}
        className="tab-icon"
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "#c8c8c8"}
      />
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFAC2F",
        tabBarStyle: {
          // backgroundColor: "#1C1C1E", // темно-сірий фон
          // borderTopWidth: 0, // прибирає білу лінію зверху
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" icon={icons.homeIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Social"
              icon={icons.friendsIcon}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Messages"
              icon={icons.chatIcon}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Wishlist"
              icon={icons.heartIcon}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="deals"
        options={{
          title: "Deals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Deals"
              icon={icons.dealsIcon}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
