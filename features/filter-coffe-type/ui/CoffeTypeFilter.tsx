import { useAtom } from "jotai";
import { Text, StyleSheet, View } from "react-native";
import { coffeTypeAtom } from "../../../entities/coffe/model/coffe.model";

const TYPECOFFE = [
  { title: "Все", type: "all" },
  { title: "Капучино", type: "cappuccino" },
  { title: "Маккиято", type: "macchiato" },
  { title: "Латте", type: "latte" },
  { title: "Американо", type: "americano" },
];

export default function CoffeTypeFilter() {
  const [typeCoffe, setTypeCoffe] = useAtom(coffeTypeAtom);

  return (
    <View style={styles.containerMenu}>
      {TYPECOFFE.map((type) => (
        <Text
          key={type.title}
          onPress={() => setTypeCoffe(type.type)}
          style={[styles.textMenu, typeCoffe === type.type && styles.typeColor]}
        >
          {type.title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  typeColor: {
    backgroundColor: "#C67C4E",
    color: "#FFFFFF",
    fontWeight: 600,
  },
  textMenu: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
});
