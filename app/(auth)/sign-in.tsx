import LoginBtn from "@/components/LoginBtn";
import { icons } from "@/constants";
import { loginGoogleAppwrite } from "@/lib/appwrite/appwrite";
import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { useGoogleAuth } from "@/lib/googleAuth";
// import { useGoogleAuth } from "@/lib/googleAuth";
import { router } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

export default function SignIn() {
  const { refetch, loading, isLogged } = useGlobalContext();
  const redirectEmailLogin = () => {
    router.push("/sign-in-email");
  };

  const { promptAsync, request } = useGoogleAuth();
  const handleLoginGoogleAppWrite = async () => {
    const result = await loginGoogleAppwrite();
    if (result) {
      console.log("logged successfully");
      refetch();
    } else {
      Alert.alert("Error", "Failed loginGoogleAppwrite");
    }
  };
  return (
    <View className="px-5 mt-6 gap-4">
      <LoginBtn
        icon={icons.facebook}
        text="Sign In with Facebook"
        // onPress={}
        // disabled={!request}
      />
      <LoginBtn
        icon={icons.google}
        text="Sign In with Google"
        onPress={handleLoginGoogleAppWrite}
        disabled={!request} // кнопка активна лише коли запит готовий
      />
      <LoginBtn
        icon={icons.mail}
        text="Sign In with Email"
        onPress={redirectEmailLogin}
      />
    </View>
  );
}
