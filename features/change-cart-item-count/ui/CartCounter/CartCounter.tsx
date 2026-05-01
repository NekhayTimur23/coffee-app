import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../../../../shared/tokens";
import MinusIcon from "../../../../assets/icon/minusIcon";
import PlusIcon from "../../../../assets/icon/plusIcon";

export default function CartCounter() {
  return (
    <View style={styles.cardСounter}>
      <Pressable>
        <View style={styles.cardСounterButton}>
          <MinusIcon />
        </View>
      </Pressable>
      <Text style={styles.textBolt}>1</Text>
      <Pressable>
        <View style={styles.cardСounterButton}>
          <PlusIcon />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardСounter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  cardСounterButton: {
    height: 28,
    width: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.whiteGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  textBolt: {
    fontWeight: 600,
    fontSize: 14,
    color: Colors.greyBlack,
  },
});
