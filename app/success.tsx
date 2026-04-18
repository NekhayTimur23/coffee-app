import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function SuccessPage() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>success</Text>
      <Link href={"/catalog"} style={styles.text}>
        На главную
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    color: "#fff",
  },
});
