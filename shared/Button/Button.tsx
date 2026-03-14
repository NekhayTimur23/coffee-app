import { Pressable, Text, StyleSheet } from "react-native";

export default function Button() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Начать</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C67C4E",
    height: 62,
    borderRadius: 16,
    marginBottom: "10%",
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: 600,
  },
});
