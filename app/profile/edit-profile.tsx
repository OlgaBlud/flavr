import ArrowLeft from "@/assets/icons/component-icons/ArrowLeft";
import { GradientButton } from "@/components/GradientButton";
import { logoutAppwrite, updateUserProfile, uploadAvatar } from "@/lib/appwrite/appwrite";
import useAuthStore from "@/store/auth.store";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfile() {
  const router = useRouter();

  const { user, setUser, setIsAuthenticated } = useAuthStore();
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [isSaving, setIsSaving] = useState(false);

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission needed",
          "Please grant camera roll permissions to change avatar"
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        // Update local preview
        setAvatar(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "Failed to pick image");
    }
  };

  const handleSave = async () => {
    if (!user || !name.trim()) {
      Alert.alert("Error", "Please enter a valid name");
      return;
    }

    try {
      setIsSaving(true);
      console.log("handleSave - Starting save process");
      console.log("handleSave - User ID:", user.$id);
      console.log("handleSave - Current avatar:", user.avatar);
      console.log("handleSave - New avatar:", avatar);
      
      let avatarUrl = user.avatar;

      // Upload new avatar if changed
      if (avatar !== user.avatar) {
        console.log("handleSave - Avatar changed, uploading...");
        const { fileUrl } = await uploadAvatar(avatar, user.$id);
        avatarUrl = fileUrl;
        console.log("handleSave - Avatar uploaded:", avatarUrl);
      } else {
        console.log("handleSave - Avatar not changed");
      }

      // Update profile in Appwrite
      const updateData: { userName?: string; avatar?: string } = { userName: name };
      if (avatarUrl !== user.avatar) {
        updateData.avatar = avatarUrl;
      }

      console.log("handleSave - Updating profile with data:", updateData);
      await updateUserProfile(user.$id, updateData);

      // Update local store
      setUser({
        ...user,
        name,
        avatar: avatarUrl,
      });

      console.log("handleSave - Profile updated successfully");
      Alert.alert("Success", "Profile updated successfully!");
      router.back();
    } catch (error: any) {
      console.error("Error updating profile:", error);
      console.error("Error message:", error?.message);
      console.error("Error response:", error?.response);
      Alert.alert(
        "Error", 
        `Failed to update profile: ${error?.message || "Unknown error"}`
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    console.log("Logout initiated");
    try {
      await logoutAppwrite();
      // console.log("logoutAppwrite");
      setUser(null);
      setIsAuthenticated(false);
      // console.log("User after logout:", useAuthStore.getState().user);
      // console.log(
      //   "isAuthenticated after logout:",
      //   useAuthStore.getState().isAuthenticated
      // );
      router.replace("/sign-in");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  if (!user) {
    return (
      <View>
        <Text>No user logged in</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6 items-center justify-center">
      <View className="w-[60%] mb-10">
        <GradientButton
          text="Back"
          icon={<ArrowLeft width={16} height={16} />}
          onPress={() => router.back()}
        />
      </View>

      <Text style={{ fontSize: 26, marginTop: 20 }}>Edit your profile</Text>

      {/* Avatar Section */}
      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 20 }}>
        <Image
          source={{ uri: avatar }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#f0f0f0",
          }}
        />
        <TouchableOpacity onPress={pickImage} style={{ marginTop: 12 }}>
          <Text style={{ color: "#F56005", fontSize: 16, fontWeight: "600" }}>
            Change Profile Photo
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={{
          marginTop: 20,
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          width: "80%",
        }}
      />

      <TouchableOpacity
        className="mt-6 bg-orange-500 rounded-xl py-3"
        style={{ width: "80%", opacity: isSaving ? 0.5 : 1 }}
        onPress={handleSave}
        disabled={isSaving}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          {isSaving ? "Saving..." : "Save"}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>Welcome, {user?.name}</Text>
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}
