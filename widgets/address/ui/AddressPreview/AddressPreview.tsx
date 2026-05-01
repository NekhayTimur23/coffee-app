import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import EditAddress from "../../../../assets/icon/editAddress";
import { Colors } from "../../../../shared/tokens";

export default function AddressPreview() {
  return (
    <Link href={"/address"}>
      <View style={styles.adressContainer}>
        <Text style={[styles.text, { color: Colors.whiteGrey }]}>Адрес</Text>
        <View style={styles.adressText}>
          <Text style={[styles.text, { color: Colors.whiteGrey }]}>
            Москва, Новослободская 23
          </Text>
          <EditAddress colors={Colors.whiteGrey} />
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  adressContainer: {
    flexDirection: "column",
  },
  adressText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    color: Colors.white,
  },
});
