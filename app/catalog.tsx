import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Catalog() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catalog</Text>
      <Link href={"/address"} style={styles.text}>
        Адрес
      </Link>
      <Link href={"/catalog/223"} style={styles.text}>
        Карточка
      </Link>
      <Link href={"/card"} style={styles.text}>
        Корзина
      </Link>
      <Link href={"/"} style={styles.text}>
        назад
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  text: {
    color: "#fff",
  },
});
