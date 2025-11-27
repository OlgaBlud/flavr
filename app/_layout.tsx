import useAuthStore from "@/store/auth.store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "./global.css";

export default function RootLayout() {
  const { fetchAuthenticatedUser, isLoading, user } = useAuthStore();
  const [fontsLoaded, error] = useFonts({
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    InterRegular: require("../assets/fonts/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_24pt-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error; // Якщо  помилка зі шрифтами
    // console.log("fonts error", error);
  }, [error]);

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  // console.log("user Root Layout", user);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="restaurant/[id]" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
}
