import { StyleSheet, View } from "react-native";
import MainLink from "../../../../assets/icon/mainLink";
import { Link } from "expo-router";
import BasketLink from "../../../../assets/icon/basketLink";

export function FooterNavigation() {
  return (
    <>
      <View style={styles.navigation}>
        <MainLink />
        <Link href={"/catalog"}>Главная</Link>
      </View>
      <View style={styles.navigationBorder} />
      <View style={styles.navigation}>
        <BasketLink />
        <Link href={"/cart"}>Корзина</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  navigationBorder: {
    width: 1,
    height: "100%",
    backgroundColor: "#DEDEDE",
  },
});
