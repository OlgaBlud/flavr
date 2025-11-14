import { icons, images } from "@/constants";
import useAuthStore from "@/store/auth.store";
// import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { Redirect, Stack } from "expo-router";
import {
  Image,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function AuthLayout() {
  // const { isLogged } = useGlobalContext();
  // if (isLogged) return <Redirect href="/(tabs)" />;

  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) return <Redirect href="/" />;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={images.authBg}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="items-center mt-60">
          <Image
            source={icons.logo}
            className="w-[100px] h-[100px] mb-4"
            resizeMode="contain"
          />
          <Image
            source={icons.flavr}
            className="w-[89px] h-[23px]"
            resizeMode="contain"
          />
        </View>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
