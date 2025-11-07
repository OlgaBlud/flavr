import AuthInput from "@/components/AuthInput";
import { GradientButton } from "@/components/GradientButton";
import { SolidButton } from "@/components/SolidButton";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/validation";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignUp() {
  interface InputValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    errorName: string | null;
    errorEmail: string | null;
    errorPassword: string | null;
    errorConfirmPassword: string | null;
  }

  const [inputValues, setInputValues] = useState<InputValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorName: null,
    errorEmail: null,
    errorPassword: null,
    errorConfirmPassword: null,
  });

  const handleChangeInput = (key: keyof InputValues, value: string | null) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  const checkName = () => {
    const error = validateName(inputValues.name);
    handleChangeInput("errorName", error);
  };

  const checkEmail = () => {
    const error = validateEmail(inputValues.email);
    handleChangeInput("errorEmail", error);
  };

  const checkPassword = () => {
    const error = validatePassword(inputValues.password);
    handleChangeInput("errorPassword", error);
  };

  const checkConfirmPassword = () => {
    const error = validateConfirmPassword(
      inputValues.password,
      inputValues.confirmPassword
    );
    handleChangeInput("errorConfirmPassword", error);
  };

  const redirectSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="mt-6 px-5 gap-4">
          {/* Name */}
          <AuthInput
            placeholder="Name"
            value={inputValues.name}
            onChangeText={(text) => handleChangeInput("name", text)}
            error={inputValues.errorName}
            onBlur={checkName}
          />

          {/* Email */}
          <AuthInput
            placeholder="Email"
            value={inputValues.email}
            onChangeText={(text) => handleChangeInput("email", text)}
            error={inputValues.errorEmail}
            onBlur={checkEmail}
          />

          {/* Password */}
          <AuthInput
            placeholder="Password"
            value={inputValues.password}
            onChangeText={(text) => handleChangeInput("password", text)}
            error={inputValues.errorPassword}
            secureTextEntry
            onBlur={checkPassword}
          />

          {/* Confirm Password */}
          <AuthInput
            placeholder="Confirm Password"
            value={inputValues.confirmPassword}
            onChangeText={(text) => handleChangeInput("confirmPassword", text)}
            error={inputValues.errorConfirmPassword}
            secureTextEntry
            onBlur={checkConfirmPassword}
          />

          <GradientButton text="Sign Up" onPress={() => {}} />

          <SolidButton
            text="Already have an account? Sign In"
            onPress={() => {
              redirectSignIn();
            }}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
