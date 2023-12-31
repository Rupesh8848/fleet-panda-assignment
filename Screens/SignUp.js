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

  const handleFormSubmit = async (data) => {
    console.log(data);

    // const response = await axios.post("http://exampleserver.com/sign-up",data)
    // posting data to sign-up route
  };

  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <InputField
        placeholder={"full name"}
        name={"fullName"}
        control={control}
        rules={{ required: { value: true, message: "Full Name is required" } }}
      >
        <FontAwesome5 name={"user"} size={19} color={"#a0a0a0"} />
      </InputField>

      <InputField
        placeholder={"email"}
        name={"email"}
        control={control}
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
        name={"password"}
        control={control}
        secureTextEntry={true}
        rules={{
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 8,
            message: "Password length must be greater than 8",
          },
        }}
      >
        <Feather name={"lock"} size={19} color={"#a0a0a0"} />
      </InputField>

      <InputField
        placeholder={"confirm password"}
        name={"confirmPassword"}
        control={control}
        secureTextEntry={true}
        rules={{
          required: { value: true, message: "Confirm Password is required" },
          minLength: {
            value: 8,
            message: "Password length must be greater than 8",
          },
          validate: (fieldValue, formValue) => {
            console.log(formValue);
            console.log(fieldValue);

            return fieldValue === formValue.password || "Must match password";
            //if former condition is true then returns true else returns string
          },
        }}
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
