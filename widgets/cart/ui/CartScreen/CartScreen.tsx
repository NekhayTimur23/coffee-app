import { View, StyleSheet } from "react-native";
import { Colors } from "../../../../shared/tokens";
import CartContent from "../CartContent/CartContent";
import CartFooter from "../CartFooter/CartFooter";

export default function CartSreen() {
  return (
    <View style={styles.container}>
      <CartContent />
      <CartFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingVertical: 18,
    backgroundColor: Colors.whiteBackground,
    justifyContent: "space-between",
  },
});
