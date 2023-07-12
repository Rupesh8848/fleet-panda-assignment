import React from "react";
import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import InputField from "../Components/InputField";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
export default function SignUpRoute() {
  const { control, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <InputField placeholder={"full name"} name={"fullName"} control={control}>
        <FontAwesome5 name={"user"} size={19} color={"#a0a0a0"} />
      </InputField>
      <InputField placeholder={"email"} name={"email"} control={control}>
        <MaterialCommunityIcons
          name={"email-outline"}
          size={19}
          color={"#a0a0a0"}
        />
      </InputField>
      <InputField
        placeholder={"password"}
        name={"password"}
        control={control}
        secureTextEntry={true}
      >
        <Feather name={"lock"} size={19} color={"#a0a0a0"} />
      </InputField>

      <InputField
        placeholder={"confirm password"}
        name={"confirmPassword"}
        control={control}
        secureTextEntry={true}
      >
        <Feather name={"lock"} size={19} color={"#a0a0a0"} />
      </InputField>

      <View style={styles.buttonContainer}>
        <Button title={"sign up"} onclick={handleSubmit(handleFormSubmit)} />
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
