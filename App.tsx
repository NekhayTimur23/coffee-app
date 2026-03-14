import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./shared/Button/Button";

export default function App() {
  
  const animetedXY = new Animated.ValueXY({
    x: 0,
    y: -100,
  });


  Animated.timing(animetedXY, {
    toValue: {
      x: 0,
      y: 0,
    },
    duration: 800,
    useNativeDriver: true,
  }).start();

  const animitedOpacity = new Animated.Value(0);

  const color = animitedOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255, 0)", "rgb(255, 255, 255)"],
  })

  Animated.timing(animitedOpacity, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        // style={[StyleSheet.absoluteFill, { width: "100%", paddingTop: '10%' }]}
        source={require("./assets/coffe.png")}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "#000000"]}
        locations={[0, 0.2367]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.contentBlock}
      />
      <View style={styles.content}>
        <Animated.Text
          style={{
            ...styles.textTitle,
            transform: [{ translateX: animetedXY.x }, { translateY: animetedXY.y }],
            color: color,
          }}
        >
          Одно из самых{`\n`}вкусных кофе в городе!
        </Animated.Text>
        <Text style={styles.text}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  contentBlock: {
    zIndex: 2,
    paddingHorizontal: 30,
  },
  content: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
    gap: 16,
  },
  textTitle: {
    top: -25,
    textAlign: "center",
    fontSize: 34,
    fontWeight: 600,
  },
  text: {
    textAlign: "center",
    color: "#A9A9A9",
  },
});
