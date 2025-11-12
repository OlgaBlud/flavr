import AuthInput from "@/components/AuthInput";
import { GradientButton } from "@/components/GradientButton";
import LoginBtn from "@/components/LoginBtn";
import { icons } from "@/constants";
import { useGlobalContext } from "@/lib/appwrite/global-provider";
import { validateEmail, validatePassword } from "@/utils/validation";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignInEmail() {
  const { handleLoginEmail } = useGlobalContext();
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
    await handleLoginEmail(inputValues.email, inputValues.password);
    // await loginUser(inputValues.email, inputValues.password);
    // alert("Login successful!");
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
              icon={icons.facebook}
              text="Sign In with Facebook"
              onPress={redirectMainLoginTab}
            />
            <LoginBtn icon={icons.google} text="Sign In with Google" />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
