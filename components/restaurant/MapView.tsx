import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapView() {
  return (
    <View style={styles.container}>
      <View style={styles.mapBackground}>
        <View style={styles.placeholderContent}>
          <Text style={styles.mapLabel}>Map View</Text>
          <Text style={styles.mapSubtext}>Interactive map will be here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  mapBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#E8E4DE",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderContent: {
    alignItems: "center",
    gap: 12,
  },
  mapLabel: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: "#1D1B20",
    marginBottom: 4,
  },
  mapSubtext: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#757575",
  },
});
