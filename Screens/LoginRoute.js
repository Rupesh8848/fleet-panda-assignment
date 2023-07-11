import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import InputField from "../Components/InputField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function LoginRoute() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Please sign in to continue</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          marginTop: 50,
        }}
      >
        <InputField
          placeholder={"email"}
          IconFrom={MaterialCommunityIcons}
          iconColor={"#a0a0a0"}
          iconName={"email-outline"}
          iconSize={19}
          textType="emailAddress"
        />
        <InputField
          placeholder={"password"}
          IconFrom={Feather}
          iconColor={"#a0a0a0"}
          iconName={"lock"}
          iconSize={19}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"login"} />
      </View>
      <Footer
        footerText={"Don't have an account? "}
        footerLinkText={"Sign up"}
        footerLink={"signup"}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "#C5C5C5",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
  },
  titleContainer: { width: "80%" },
  buttonContainer: { alignItems: "flex-end", width: "80%", marginTop: 35 },
});
