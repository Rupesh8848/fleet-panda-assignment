import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import InputField from "../Components/InputField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";

export default function LoginRoute() {
  const { control, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    console.log("Handle form submit triggered");
    console.log(data);

    // const response = await axios.post("http://exampleserver.com/sign-up",data)
    // posting data to sign-up route
  };

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
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please check  your email structure",
            },
          }}
        >
          <MaterialCommunityIcons
            name={"email-outline"}
            size={19}
            color={"#a0a0a0"}
          />
        </InputField>
        <InputField
          placeholder={"password"}
          name="password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 8,
              message: "Password length must be greater than 8",
            },
          }}
          forgotText={<Text style={styles.forgotText}>FORGOT</Text>}
        >
          <Feather name={"lock"} size={19} color={"#a0a0a0"} />
        </InputField>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"login"} onclick={handleSubmit(handleFormSubmit)} />
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
  forgotText: { color: "#f30c23" },
});
