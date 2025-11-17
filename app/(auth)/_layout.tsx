import Flavr from "@/assets/icons/Flavr";
import Logo from "@/assets/icons/Logo";
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
// import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { Redirect, Stack } from "expo-router";
import {
    ImageBackground,
    Keyboard,
    TouchableWithoutFeedback,
    View
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
          <View className="w-[100px] h-[100px] mb-4">
            <Logo width={100} height={100} />
          </View>
          <View className="w-[89px] h-[23px]">
            <Flavr width={89} height={23} />
          </View>
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
