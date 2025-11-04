import chatIcon from "@/assets/icons/chat.png";
import dealsIcon from "@/assets/icons/deals.png";
import friendsIcon from "@/assets/icons/friends.png";
import heartIcon from "@/assets/icons/heart.png";
import homeIcon from "@/assets/icons/home.png";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
export default function TabsLayout() {
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
            <TabBarIcon title="Home" icon={homeIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Social" icon={friendsIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Messages" icon={chatIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Wishlist" icon={heartIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="deals"
        options={{
          title: "Deals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Deals" icon={dealsIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
