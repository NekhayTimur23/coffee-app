import { StyleSheet, TextInput, View } from "react-native";
import SearchInputIcon from "../../../assets/icon/searchInputIcon";
import { useSetAtom } from "jotai";
import { coffeInputAtom } from "../../../entities/coffe/model/coffe.model";

export default function SearchCoffe() {
  const setTextInput = useSetAtom(coffeInputAtom);

  return (
    <View style={styles.inputContainer}>
      <SearchInputIcon />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTextInput(text.toLowerCase())}
        placeholder="Найти кофе"
        placeholderTextColor={"#989898"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#313131",
    borderRadius: 16,
    height: 50,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    overflow: "hidden",
  },
  input: {
    height: "100%",
    width: "90%",
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: "#989898",
  },
});
