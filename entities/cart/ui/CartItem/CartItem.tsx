import { View, StyleSheet, Image, Text } from "react-native";
import { Colors } from "../../../../shared/tokens";
import CartCounter from "../../../../features/change-cart-item-count/ui/CartCounter/CartCounter";

export default function CartItem() {
  return (
    <View style={styles.CartItem}>
      <View style={styles.cartImgContent}>
        <View style={styles.cartImg}>
          <Image></Image>
        </View>
        <View style={styles.cartTitle}>
          <Text>Капучино</Text>
          <Text>с шоколадом / M</Text>
        </View>
      </View>
      <CartCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  CartItem: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.grey,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartImgContent: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cartImg: {
    height: 54,
    width: 54,
    backgroundColor: "red",
    borderRadius: 12,
  },
  cartTitle: {
    gap: 5,
  },
});
