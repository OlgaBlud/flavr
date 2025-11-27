import MapView from "@/components/restaurant/MapView";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* Header with Map/List toggle */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Restaurants</Text>
        
        {/* Toggle buttons */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              viewMode === "map" && styles.toggleBtnActive,
            ]}
            onPress={() => setViewMode("map")}
          >
            <Text
              style={[
                styles.toggleText,
                viewMode === "map" && styles.toggleTextActive,
              ]}
            >
              Map
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              viewMode === "list" && styles.toggleBtnActive,
            ]}
            onPress={() => setViewMode("list")}
          >
            <Text
              style={[
                styles.toggleText,
                viewMode === "list" && styles.toggleTextActive,
              ]}
            >
              List
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content - Map or List */}
      <View style={styles.content}>
        {viewMode === "map" ? (
          <MapView />
        ) : (
          <View style={styles.listPlaceholder}>
            <Text style={styles.placeholderText}>
              📋 List view will be here
            </Text>
            <Text style={styles.placeholderSubtext}>
              Filtered restaurant list with categories
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 2,
  },
  toggleBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  toggleBtnActive: {
    backgroundColor: "#FE8C00",
  },
  toggleText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  toggleTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  listPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: "#666",
  },
});
