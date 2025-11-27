import Facebook from "@/assets/icons/Facebook";
import Google from "@/assets/icons/Google";
import Mail from "@/assets/icons/Mail";
import LoginBtn from "@/components/auth/LoginBtn";
import { loginGoogleAppwrite } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";

import { router } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

export default function SignIn() {
  const redirectEmailLogin = () => {
    router.push("/sign-in-email");
  };
  const { fetchAuthenticatedUser } = useAuthStore();

  const handleLoginGoogleAppWrite = async () => {
    try {
      const result = await loginGoogleAppwrite();
      if (!result) {
        Alert.alert("Error", "Failed loginGoogleAppwrite");
        return;
      }
      // console.log("logged google successfully");
      await fetchAuthenticatedUser();
      // console.log("fetch google successfully");
      router.replace("/");
    } catch (error) {
      // console.log("Google login error:", error);
      Alert.alert("Error catch", "Google login failed");
    }
  };
  return (
    <View className="px-5 mt-6 gap-4">
      <LoginBtn
        icon={<Facebook width={24} height={24} color="#121212" />}
        text="Sign In with Facebook"
        // onPress={}
      />
      <LoginBtn
        icon={<Google width={24} height={24} />}
        text="Sign In with Google"
        onPress={handleLoginGoogleAppWrite}
      />
      <LoginBtn
        icon={<Mail width={24} height={24} color="black" />}
        text="Sign In with Email"
        onPress={redirectEmailLogin}
      />
    </View>
  );
}
