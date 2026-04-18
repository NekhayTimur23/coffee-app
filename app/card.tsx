import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function CardPage() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ff0000" }}>Card</Text>
      <Link href={"/success"} style={styles.text}>
        Успешная покупка
      </Link>
      <Link href={"/address"} style={styles.text}>
        Назад в адресс
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