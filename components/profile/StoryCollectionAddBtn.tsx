import Plus from "@/assets/icons/Plus";
import { images } from "@/constants";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const StoryCollectionAddBtn = () => {
  return (
    <View className="mr-6">
      <Pressable
        onPress={() => console.log("pressed add collection")}
        className=" items-center"
      >
        <View className="items-center justify-center w-[58px] h-[58px] relative  mb-[10px]">
          <Plus width={19} height={19} color={"#121212"} />
          <Image
            source={images.avatarEllipse}
            className="absolute top-0 left-0"
            resizeMode="cover"
            style={{
              width: 58,
              height: 58,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </View>
        <Text className="font-poppins text-[12px] text-text-main leading-[125%]">
          New
        </Text>
      </Pressable>
    </View>
  );
};

export default StoryCollectionAddBtn;
