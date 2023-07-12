import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export default function Button({ title, onclick }) {
  return (
    <Pressable
      style={styles.buttonContainer}
      android_ripple={{ color: "rgb(120, 120, 120)", foreground: true }}
      onPress={onclick}
    >
      <LinearGradient
        colors={["#rgb(246,199,90)", "#FD9C2D"]}
        start={[0, 0]}
        end={[1, 0]}
        style={{
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.buttonTitle}>{title.toUpperCase()}</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 140,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
