import Facebook from "@/assets/icons/Facebook";
import Google from "@/assets/icons/Google";
import AuthInput from "@/components/AuthInput";
import { GradientButton } from "@/components/GradientButton";
import LoginBtn from "@/components/LoginBtn";
import { loginEmailAppwrite } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";

import { validateEmail, validatePassword } from "@/utils/validation";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignInEmail() {
  interface InputValues {
    email: string;
    password: string;
    errorEmail: string | null;
    errorPassword: string | null;
  }
  // temporary
  const redirectMainLoginTab = () => {
    router.push("/sign-in");
  };
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
    errorEmail: null,
    errorPassword: null,
  });

  const handleChangeInput = (
    key: keyof InputValues,
    value: string | null
  ): void => {
    setInputValues((prevState) => ({ ...prevState, [key]: value }));
  };

  const checkEmail = () => {
    const error = validateEmail(inputValues.email);
    handleChangeInput("errorEmail", error);
  };

  const checkPassword = () => {
    const error = validatePassword(inputValues.password);
    handleChangeInput("errorPassword", error);
  };
  const { fetchAuthenticatedUser } = useAuthStore();
  const handleSubmit = async () => {
    const errorEmail = validateEmail(inputValues.email);
    const errorPassword = validatePassword(inputValues.password);

    setInputValues((prev) => ({
      ...prev,
      errorEmail,
      errorPassword,
    }));

    if (errorEmail || errorPassword) {
      alert("Please fix the errors before submitting");
      return;
    }
    try {
      await loginEmailAppwrite(inputValues.email, inputValues.password);
      await fetchAuthenticatedUser();
      router.replace("/");
      // console.log("success login email + password");
    } catch (error: any) {
      Alert.alert("Error LoginEmail:", error.message);
    } finally {
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      className="bg-red-50"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="mt-6 px-5">
          {/* inputs */}
          <View className="gap-4">
            <AuthInput
              placeholder="Email"
              value={inputValues.email}
              onChangeText={(text) => handleChangeInput("email", text)}
              error={inputValues.errorEmail}
              onBlur={checkEmail}
            />

            <AuthInput
              placeholder="Password"
              value={inputValues.password}
              onChangeText={(text) => handleChangeInput("password", text)}
              error={inputValues.errorPassword}
              secureTextEntry
              onBlur={checkPassword}
            />

            <GradientButton text="Sign In" onPress={handleSubmit} />
          </View>

          <View className="flex justify-center mt-6 flex-row gap-3">
            <Text className="font-poppins text-text-secondary">
              {"Don't have an account?"}
            </Text>
            <Link href="/sign-up" className="font-poppins-medium text-primary">
              Sign Up
            </Link>
          </View>
          <Text className="my-6 self-center font-poppins-medium text-text-secondary">
            OR
          </Text>
          {/* social logins buttons */}
          <View className="gap-4">
            <LoginBtn
              icon={<Facebook width={24} height={24} color="#121212" />}
              text="Sign In with Facebook"
              onPress={redirectMainLoginTab}
            />
            <LoginBtn
              icon={<Google width={24} height={24} />}
              text="Sign In with Google"
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
