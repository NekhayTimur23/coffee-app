import { View, StyleSheet } from "react-native";
import AddressPreview from "../../../address/ui/AddressPreview/AddressPreview";
import SearchCoffe from "../../../../features/search-coffe/ui/SearchCoffe";
import CoffeTypeFilter from "../../../../features/filter-coffe-type/ui/CoffeTypeFilter";
import CoffeList from "../CoffeList/CoffeList";
import { Colors } from "../../../../shared/tokens";

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.adressAndInput}>
        <AddressPreview />
        <SearchCoffe />
      </View>
      <View style={styles.cardCantainer}>
        <CoffeTypeFilter />
        <CoffeList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  adressAndInput: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 25,
    gap: 28,
  },
  cardCantainer: {
    backgroundColor: Colors.whiteBackground,
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
});
