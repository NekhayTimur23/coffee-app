import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function CardIdPage() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>{`Карточка № - ${id}`}</Text>
      <Link href={"/catalog"} style={styles.text}>
        назад
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
