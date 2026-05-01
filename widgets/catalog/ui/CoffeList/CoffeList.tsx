import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import {
  coffeInputAtom,
  coffeTypeAtom,
  setCardInObject,
} from "../../../../entities/coffe/model/coffe.model";
import { getCoffeList } from "../../../../entities/coffe/api/coffe.api";
import { StyleSheet, View } from "react-native";
import CardLoading from "../../../../entities/coffe/ui/CoffeCardLoading/CoffeeCardLoading";
import Card from "../../../../entities/coffe/ui/CoffeeCard/CoffeeCard";

export default function CoffeList() {
  const [loadingRequest, setLoadingRequest] = useState<boolean>(true);
  const [cards, setCards] = useAtom(setCardInObject);
  const textInput = useAtomValue(coffeInputAtom);
  const typeCoffe = useAtomValue(coffeTypeAtom);

  useEffect(() => {
    setLoadingRequest(true);
    const loadingCoffe = async () => {
      try {
        const data = await getCoffeList(typeCoffe, textInput);
        setLoadingRequest(false);
        setCards(data);
      } catch (e) {
        setLoadingRequest(false);
        console.log(e);
      }
    };

    loadingCoffe();
  }, [typeCoffe, textInput, setCards]);

  const cardArr = Object.values(cards.cards);
  const loaderArr = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.cardsContent}>
      {loadingRequest
        ? loaderArr.map((e) => <CardLoading key={e} />)
        : cardArr.map((item) => <Card key={item.id} {...item} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "4%",
    columnGap: "4%",
  },
});
