import React from "react";
import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import InputField from "../Components/InputField";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
export default function SignUpRoute() {
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <InputField
        IconFrom={FontAwesome5}
        iconColor={"#a0a0a0"}
        iconName={"user"}
        iconSize={19}
        placeholder="full name"
      />
      <InputField
        IconFrom={MaterialCommunityIcons}
        iconColor={"#a0a0a0"}
        iconName={"email-outline"}
        iconSize={19}
        placeholder="email"
      />
      <InputField
        IconFrom={Feather}
        iconColor={"#a0a0a0"}
        iconName={"lock"}
        iconSize={19}
        placeholder="password"
      />
      <InputField
        IconFrom={Feather}
        iconColor={"#a0a0a0"}
        iconName={"lock"}
        iconSize={19}
        placeholder="confirm password"
      />
      <View style={styles.buttonContainer}>
        <Button title={"sign up"} />
      </View>
      <Footer
        footerText={"Already have a account? "}
        footerLinkText={"Sign in"}
        footerLink={"login"}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minHeight: Dimensions.get("window").height,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "flex-end",
    width: "80%",
  },
});
