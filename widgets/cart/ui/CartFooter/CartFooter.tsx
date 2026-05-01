import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../../../shared/tokens";
import Button from "../../../../shared/Button/Button";

export default function CartFooter() {
  return (
    <View style={styles.cartFooter}>
      <Text style={styles.textTotal}>Итог</Text>
      <View style={styles.priceList}>
        <Text style={styles.textRegular}>Цена</Text>
        <Text style={styles.textBolt}>270 ₽</Text>
      </View>
      <View style={styles.priceList}>
        <Text style={styles.textRegular}>Доставка</Text>
        <Text style={styles.textBolt}>100 ₽</Text>
      </View>
      <View style={[styles.priceList, styles.priceListLast]}>
        <Text style={styles.textRegular}>Итого к оплате</Text>
        <Text style={styles.textBolt}>370 ₽</Text>
      </View>
      <View style={styles.footerButton}>
        <Button text="Заказать" href={"/cart"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartFooter: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopWidth: 4,
    borderTopColor: Colors.grey,
    gap: 16,
  },
  priceList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerButton: {},
  priceListLast: {
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: Colors.grey,
  },
  textBolt: {
    fontWeight: 600,
    fontSize: 14,
    color: Colors.greyBlack,
  },
  textRegular: {
    fontWeight: 400,
    fontSize: 14,
    color: Colors.greyBlack,
  },
  textTotal: {
    fontWeight: 600,
    fontSize: 16,
    color: Colors.greyBlack,
  },
});
