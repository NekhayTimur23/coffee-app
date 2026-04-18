import { Link, LinkProps } from "expo-router";
import { Pressable, Text, StyleSheet, Animated } from "react-native";

export default function Button({
  text,
  ...props
}: LinkProps & { text: string }) {
  const animetedValue = new Animated.Value(100);

  const corol = animetedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["#A76237", "#C67C4E"],
  });

  const findIn = () => {
    Animated.timing(animetedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const findOut = () => {
    Animated.timing(animetedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable onPressIn={findIn} onPressOut={findOut}>
      <Link {...props}>
        <Animated.View style={{ ...styles.button, backgroundColor: corol }}>
          <Text style={styles.text}>{text}</Text>
        </Animated.View>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#C67C4E",
    height: 62,
    width: '100%',
    borderRadius: 16,
    marginBottom: "10%",
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: 600,
  },
});
