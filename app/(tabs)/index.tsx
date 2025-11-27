import CafeIcon from "@/assets/icons/CafeIcon";
import Filter from "@/assets/icons/Filter";
import Food from "@/assets/icons/Food";
import ListIcon from "@/assets/icons/ListIcon";
import MapIcon from "@/assets/icons/MapIcon";
import Microphone from "@/assets/icons/Microphone";
import Search from "@/assets/icons/Search";
import ListView from "@/components/restaurant/ListView";
import MapView from "@/components/restaurant/MapView";
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [activeCategory, setActiveCategory] = useState<string>("Restaurants");
  const { user } = useAuthStore();

  const categories = [
    { id: "restaurants", label: "Restaurants", count: 4, icon: Food },
    { id: "cafes", label: "Cafes", count: 2, icon: CafeIcon },
  ];

  return (
    <SafeAreaView className="flex-1" edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Main content - Map or List */}
        <View style={styles.content}>
          {viewMode === "map" ? <MapView /> : <ListView />}
        </View>

        {/* Overlay Controls */}
        <View style={styles.overlayContainer}>
          {/* Search Bar */}
          <View style={styles.searchSection}>
            {/* Search Input */}
            <View style={styles.searchBar}>
              <TouchableOpacity>
                <Search width={21} height={21} color="#7F7F7F" />
              </TouchableOpacity>
              <TextInput
                placeholder="Find the greatest place"
                placeholderTextColor="#7F7F7F"
                style={styles.searchInput}
              />
              <TouchableOpacity>
                <Microphone width={31} height={31} color="#F45A06" />
              </TouchableOpacity>
            </View>

            {/* Profile Avatar */}
            <TouchableOpacity 
              style={styles.avatarButton}
              onPress={() => router.push("/profile")}
            >
              <Image 
                source={user?.avatar ? { uri: user.avatar } : images.pp1} 
                style={styles.avatar} 
              />
            </TouchableOpacity>

            {/* Map/List Toggle */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  viewMode === "map" && styles.toggleBtnActive,
                ]}
                onPress={() => setViewMode("map")}
              >
                <MapIcon 
                  width={20} 
                  height={20} 
                  color={viewMode === "map" ? "#FFFFFF" : "#757575"} 
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  viewMode === "list" && styles.toggleBtnActive,
                ]}
                onPress={() => setViewMode("list")}
              >
                <ListIcon 
                  width={20} 
                  height={20} 
                  color={viewMode === "list" ? "#FFFFFF" : "#757575"} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Categories for List View */}
          {viewMode === "list" && (
            <View style={styles.categoriesContainer}>
              <TouchableOpacity style={styles.filterButton}>
                <Filter width={20} height={20} color="#FF9500" />
              </TouchableOpacity>

              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesScroll}
              >
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TouchableOpacity
                      key={category.id}
                      style={[
                        styles.categoryChip,
                        activeCategory === category.label && styles.categoryChipActive,
                      ]}
                      onPress={() => setActiveCategory(category.label)}
                    >
                      <Icon width={20} height={20} color="#FF9500" />
                      <Text style={styles.categoryText}>
                        {category.label} ({category.count})
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FDFBF9",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 12,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#000000",
  },
  avatarButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  toggleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleBtnActive: {
    backgroundColor: "#FF9500",
  },
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    gap: 12,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  categoriesScroll: {
    gap: 8,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  categoryChipActive: {
    borderColor: "#FF9500",
    backgroundColor: "#FFF8F0",
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#000000",
  },
});
