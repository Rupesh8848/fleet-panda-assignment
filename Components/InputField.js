import { View, TextInput, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Controller } from "react-hook-form";

export default function InputField({
  placeholder,
  textType,
  children,
  control,
  name,
  secureTextEntry,
  rules = {},
}) {
  const [inputValue, setInputValue] = React.useState("");

  const inputValueChangeHandler = (inputText) => {
    setInputValue(inputText);
  };

  const animatedValue = useSharedValue(0);
  const outerContainerStyleValue = useSharedValue(0);

  const focusHandler = () => {
    animatedValue.value = withTiming(100, 200);
    outerContainerStyleValue.value = withTiming(100, 200);
  };

  const blurHandler = () => {
    if (inputValue.length === 0) {
      animatedValue.value = withTiming(0, 200);
      outerContainerStyleValue.value = withDelay(300, withTiming(0));
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    const fonstSize = interpolate(animatedValue.value, [0, 100], [18, 14]);
    const translateY = interpolate(animatedValue.value, [0, 100], [0, -26]);
    const textColor = interpolateColor(
      animatedValue.value,
      [0, 100],
      ["black", "#C9C9C9"]
    );
    return {
      transform: [{ translateY: translateY }],
      fontSize: fonstSize,
      color: textColor,
    };
  });

  const animatedBottomWidth = useAnimatedStyle(() => {
    const borderWidth = interpolate(
      outerContainerStyleValue.value,
      [0, 100],
      [1, 0]
    );
    return {
      borderBottomWidth: borderWidth,
    };
  });

  const outerContainerStyle = useAnimatedStyle(() => {
    const elevation = interpolate(
      outerContainerStyleValue.value,
      [0, 100],
      [0, 4]
    );
    const backgroundColor = interpolateColor(
      outerContainerStyleValue.value,
      [0, 100],
      ["rgb(242, 242, 242)", "white"]
    );
    return {
      elevation,
      backgroundColor,
    };
  });

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Animated.View style={[styles.outerContainer, outerContainerStyle]}>
            <Animated.View style={[styles.innerContainer, animatedBottomWidth]}>
              <View style={styles.iconContainer}>{children}</View>

              <View style={[styles.inputContainer]}>
                <Animated.Text style={[styles.placeholderText, animatedStyle]}>
                  {placeholder.toUpperCase()}
                </Animated.Text>
                <TextInput
                  value={value}
                  onChangeText={(inputValue) => {
                    onChange(inputValue);
                    inputValueChangeHandler(inputValue);
                  }}
                  onBlur={() => {
                    onBlur();
                    blurHandler();
                  }}
                  style={styles.input}
                  onFocus={focusHandler}
                  secureTextEntry={secureTextEntry ? secureTextEntry : false}
                />
              </View>
            </Animated.View>
            {error ? (
              <Text style={styles.errorMessage}>{error.message}</Text>
            ) : (
              ""
            )}
          </Animated.View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    minHeight: 70,
    paddingHorizontal: 5,
    width: "80%",
    justifyContent: "center",
    elevation: 5,
    // backgroundColor: "transparent",
    borderRadius: 10,
  },
  innerContainer: {
    height: 40,
    alignItems: "flex-end",
    paddingHorizontal: 5,
    flexDirection: "row",
    borderBottomColor: "#d5dadf",
    // borderBottomWidth: 1,
  },
  input: {
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  placeholderText: {
    position: "absolute",
    left: 5,
    bottom: 3,
    fontSize: 18,
  },
  inputContainer: {
    width: "90%",
    height: "100%",
    justifyContent: "flex-end",
  },
  iconContainer: {
    marginBottom: 5,
  },
  errorMessage: {
    color: "#f30c23",
  },
});
