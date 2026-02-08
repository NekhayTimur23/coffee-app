import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { width: "100%", paddingTop: '10%' }]}
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
        <Text style={styles.textTitle}>
          Одно из самых{`\n`}вкусных кофе в городе!
        </Text>
        <Text style={styles.text}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Pressable style={styles.button}>
          <Text>Начать</Text>
        </Pressable>
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
    color: "#fff",
  },
  text: {
    textAlign: "center",
    color: "#A9A9A9",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C67C4E",
    height: 62,
    borderRadius: 16,
    marginBottom: "10%",
  },
});
