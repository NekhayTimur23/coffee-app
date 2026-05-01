import { View, StyleSheet } from "react-native";
import AddressSectionsCart from "../../../address/ui/AddressSectionsCart/AddressSectionsCart";
import CartItem from "../../../../entities/cart/ui/CartItem/CartItem";

export default function CartContent() {
  return (
    <View style={styles.cartContent}>
      <AddressSectionsCart />
      <CartItem />
    </View>
  );
}

const styles = StyleSheet.create({
  cartContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
});
