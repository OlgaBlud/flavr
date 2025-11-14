// import GlobalProvider from "@/lib/appwrite/global-provider";
import useAuthStore from "@/store/auth.store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    InterRegular: require("../assets/fonts/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_24pt-SemiBold.ttf"),
  });
  const { fetchAuthenticatedUser, isLoading } = useAuthStore();

  useEffect(() => {
    console.log("Load user on mounting");
    fetchAuthenticatedUser();
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // if (!isAuthenticated && !isLoading) {
  //   return <Redirect href="/(auth)/sign-in" />;
  // }

  return (
    // <GlobalProvider>
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    />
    // </GlobalProvider>
  );
}
