import { StatusBar } from "expo-status-bar";
import SignUpRoute from "./Screens/SignUp";
import LoginRoute from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation:
              Platform.OS === "ios" ? "simple_push" : "slide_from_right",
          }}
        >
          <Stack.Screen name="login" component={LoginRoute} />
          <Stack.Screen name="signup" component={SignUpRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
