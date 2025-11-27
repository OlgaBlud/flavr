import { Deal } from "@/mock-data/deals";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DealsItemProps {
  deal: Deal;
  onPress?: () => void;
}

export default function DealsItem({ deal, onPress }: DealsItemProps) {
  return (
    <View style={styles.container}>
      <Image source={deal.image} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.restaurantName}>{deal.restaurantName}</Text>
        <Text style={styles.title}>{deal.title}</Text>
        <Text style={styles.subtitle}>{deal.subtitle}</Text>
        
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <LinearGradient
            colors={["#FF9500", "#F45905"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={styles.ctaButtonInner}>
              <GradientText text={deal.ctaText} style={styles.ctaText} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const GradientText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <MaskedView
      maskElement={<Text style={[style, { backgroundColor: "transparent" }]}>{text}</Text>}
    >
      <LinearGradient
        colors={["#FF9500", "#F45905"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 23, 
    resizeMode: "cover",
  },
  content: {
    maxWidth: "80%",
  },
  restaurantName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    color: "#141414",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#121212",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
    color: "#828282",
    marginBottom: 8,
  },
  gradientBorder: {
    borderRadius: 24,
    padding: 1,
    alignSelf: "flex-start",
  },
  ctaButtonInner: {
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  ctaText: {
    fontSize: 14,
    fontFamily: "InterSemiBold",
    fontWeight: "600",
  },
});
