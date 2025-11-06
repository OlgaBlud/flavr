import LoginBtn from "@/components/LoginBtn";
import { icons } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignInEmail() {
  interface InputValues {
    email: string;
    password: string;
    errorEmail: null | string;
    errorPassword: null | string;
  }
  // temporary
  const redirectMainLoginTab = () => {
    router.push("/sign-in");
  };
  const [inputValues, setInputValues] = useState({
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
    if (!inputValues.email) {
      handleChangeInput("errorEmail", null);
      return;
    }
    const emailValidator = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput("errorEmail", "Not valid email");
    } else {
      handleChangeInput("errorEmail", null);
    }
  };
  const checkPassword = (text: string) => {
    if (!text) {
      handleChangeInput("errorPassword", null);
      return;
    }
    if (text.length < 8) {
      handleChangeInput("errorPassword", "Too short");
    } else {
      handleChangeInput("errorPassword", null);
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
            {/* email */}
            <View
              className="bg-white rounded-lg"
              style={{
                shadowColor: "#81553D",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 20,
                elevation: 4, // для Android
              }}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="#828282"
                className={`text-[#121212] text-[14px] font-inter px-4 ${Platform.OS === "ios" ? " py-5" : " py-4"}`}
                value={inputValues.email}
                onChangeText={(text) => handleChangeInput("email", text)}
                onBlur={() => {
                  checkEmail();
                }}
              />
              {inputValues.errorEmail && (
                <Text className="color-orange-500 font-poppins-medium text-[12px]">
                  {inputValues.errorEmail}
                </Text>
              )}
            </View>
            {/* password */}
            <View
              className="bg-white rounded-lg"
              style={{
                shadowColor: "#81553D",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 20,
                elevation: 4, // для Android
              }}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#828282"
                className={`text-[#121212] text-[14px] font-inter px-4 ${Platform.OS === "ios" ? " py-5" : " py-4"}`}
                value={inputValues.password}
                onChangeText={(text) => {
                  handleChangeInput("password", text);
                  checkPassword(text);
                }}
                secureTextEntry={true}
              />
              {inputValues.errorPassword && (
                <Text className="color-orange-500 font-poppins-medium text-[12px] ">
                  {inputValues.errorPassword}
                </Text>
              )}
            </View>
          </View>

          <Text className="my-6 self-center font-poppins-medium text-text-secondary font-semibold">
            OR
          </Text>
          {/* buttons */}
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
