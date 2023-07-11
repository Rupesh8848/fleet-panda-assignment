import { View, Text } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function Footer({ footerText, footerLinkText, footerLink }) {
  return (
    <View style={styles.footerContainer}>
      <Text style={{ color: "#C9C9C9" }}>{footerText}</Text>
      <Link
        to={{ screen: footerLink }}
        style={{ color: "#FD9C2D", fontWeight: "bold" }}
      >
        {footerLinkText}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: -100 }],
  },
});
