import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function AddressPage() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>address</Text>
      <Link href={"/card"} style={styles.text}>
        Корзина
      </Link>
      <Link href={"/catalog"} style={styles.text}>
        Каталог
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
