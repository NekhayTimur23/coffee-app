import { View, Text, StyleSheet, Pressable } from "react-native";
import EditAddress from "../../../../assets/icon/editAddress";
import { Colors } from "../../../../shared/tokens";

export default function AddressSectionsCart() {
  return (
    <View style={styles.addressContent}>
      <Text style={styles.addressTitle}>Адрес доставки</Text>
      <View style={styles.addressPoint}>
        <Text style={styles.addressPointText}>Москва, Новослободская 23</Text>
        <Text style={styles.addressPointDiscription}>
          Позвонить около входа в бизнес центр
        </Text>
      </View>
      <Pressable>
        <View style={styles.editAddress}>
          <EditAddress colors={Colors.blackLite} />
          <Text style={styles.addressPointDiscription}>
            Редактировать адрес
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContent: {
    gap: 16,
  },
  addressTitle: {
    fontWeight: 600,
    color: Colors.black,
    fontSize: 16,
  },
  addressPoint: {
    gap: 8,
  },
  addressPointText: {
    fontWeight: 600,
    fontSize: 14,
  },
  addressPointDiscription: {
    fontWeight: 400,
    fontSize: 12,
    color: Colors.blackLite,
  },
  editAddress: {
    flexDirection: "row",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey,
    alignSelf: "flex-start",
  },
});
