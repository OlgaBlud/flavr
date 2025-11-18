import Chat from "@/assets/icons/Chat";
import Deals from "@/assets/icons/Deals";
import Friends from "@/assets/icons/Friends";
import Heart from "@/assets/icons/Heart";
import Home from "@/assets/icons/Home";
import useAuthStore from "@/store/auth.store";

import { TabBarIconProps } from "@/type";
import { Redirect, Tabs } from "expo-router";
import React from "react";

import { Image, View } from "react-native";

export default function TabsLayout() {
  console.log("Rendering Tabs Layout");
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => {
    const isReactElement = React.isValidElement(icon);
    const color = focused ? "#FE8C00" : "#c8c8c8";

    return (
      <View className="tab-icon-wrap">
        {isReactElement ? (
          React.cloneElement(icon as React.ReactElement<{ color?: string }>, {
            color,
          })
        ) : (
          <Image
            source={icon}
            className="tab-icon"
            resizeMode="contain"
            tintColor={color}
          />
        )}
      </View>
    );
  };

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
            <TabBarIcon
              title="Home"
              icon={<Home width={24} height={24} />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Social" icon={<Friends />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Messages" icon={<Chat />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Wishlist" icon={<Heart />} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="deals"
        options={{
          title: "Deals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Deals" icon={<Deals />} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
