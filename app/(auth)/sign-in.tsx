import LoginBtn from "@/components/LoginBtn";
import { icons } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function SignIn() {
  const redirectEmailLogin = () => {
    router.push("/sign-in-email");
  };
  return (
    <View className="px-5 mt-6 gap-4">
      <LoginBtn icon={icons.facebook} text="Sign In with Facebook" />
      <LoginBtn icon={icons.google} text="Sign In with Google" />
      <LoginBtn
        icon={icons.mail}
        text="Sign In with Email"
        onPress={redirectEmailLogin}
      />
    </View>
  );
}
