import yellowStar from "@/assets/icons/star-yellow.png";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type StatItemProps = {
  icon: any; // шлях до картинки (require або {uri})
  number: number;
  label: string;
};

export default function StatItem({ icon, number, label }: StatItemProps) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.iconTop} resizeMode="contain" />
      <View style={styles.numberWrap}>
        <Text style={styles.number}>{number}</Text>
        <Image source={yellowStar} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    // paddingTop: 12,
    // paddingBottom: 12,
    backgroundColor: "#FFF8F4",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTop: {
    width: 23,
    height: 23,
    marginBottom: 4,
  },
  numberWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  number: {
    fontFamily: "PoppinsMedium",
    color: "#121212",
    fontSize: 12,
    fontWeight: "500",
    wordWrap: "break-word",
  },

  label: {
    // Atmosphere
    color: "#6D6D6D",
    fontSize: 10,
    fontFamily: "InterRegular",
    fontWeight: "400",
    lineHeight: 13.2,
    wordWrap: "break-word",
  },
});
