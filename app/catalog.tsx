import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SearchInputIcon from "../assets/icon/searchInputIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { PREFIX } from "../entities/coffe/api/api";
import { useAtom } from "jotai";
import {
  coffeInputAtom,
  coffeTypeAtom,
  setCardInObject,
} from "../entities/coffe/model/coffe.model";
import Card from "../shared/Card/Card";
import MainLink from "../assets/icon/mainLink";
import BasketLink from "../assets/icon/basketLink";
import EditAddress from "../assets/icon/editAddress";

export default function Catalog() {
  const [, setLoadingRequest] = useState<boolean>(false);

  const [typeCoffe, setTypeCoffe] = useAtom(coffeTypeAtom);
  const [cards, setCards] = useAtom(setCardInObject);
  const [textInput, setTextInput] = useAtom(coffeInputAtom);

  useEffect(() => {
    setLoadingRequest(true);

    const loadingCoffe = async () => {
      try {
        const { data } = await axios.get(PREFIX, {
          params: {
            ...(typeCoffe !== "all" && { type: typeCoffe }),
            ...(textInput?.length > 0 && { text: textInput }),
          },
        });
        console.log(
          `${PREFIX}/?type=${typeCoffe}&text=${encodeURIComponent(textInput)}`,
        );
        setLoadingRequest(false);
        setCards(data);
      } catch (e) {
        setLoadingRequest(false);
        console.log(e);
      }
    };

    loadingCoffe();
  }, [typeCoffe, textInput]);

  const cardArr = Object.values(cards.cards);

  return (
    <View style={styles.container}>
      <View style={styles.adressAndInput}>
        <Link href={"/address"}>
          <View style={styles.adressContainer}>
            <Text style={[styles.text, { color: "#B7B7B7" }]}>Адрес</Text>
            <View style={styles.adressText}>
              <Text style={[styles.text, { color: "#DDDDDD" }]}>
                Москва, Новослободская 23
              </Text>
              <EditAddress />
            </View>
          </View>
        </Link>
        <View style={styles.inputContainer}>
          <SearchInputIcon />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTextInput(text.toLowerCase())}
            placeholder="Найти кофе"
            placeholderTextColor={"#989898"}
          />
        </View>
      </View>
      <View style={styles.cardCantainer}>
        <View style={styles.containerMenu}>
          <Text
            onPress={() => setTypeCoffe("all")}
            style={[styles.textMenu, typeCoffe === "all" && styles.typeColor]}
          >
            Все
          </Text>
          <Text
            onPress={() => setTypeCoffe("cappuccino")}
            style={[
              styles.textMenu,
              typeCoffe === "cappuccino" && styles.typeColor,
            ]}
          >
            Капучино
          </Text>
          <Text
            onPress={() => setTypeCoffe("macchiato")}
            style={[
              styles.textMenu,
              typeCoffe === "macchiato" && styles.typeColor,
            ]}
          >
            Маккиято
          </Text>
          <Text
            onPress={() => setTypeCoffe("latte")}
            style={[styles.textMenu, typeCoffe === "latte" && styles.typeColor]}
          >
            Латте
          </Text>
          <Text
            onPress={() => setTypeCoffe("americano")}
            style={[
              styles.textMenu,
              typeCoffe === "americano" && styles.typeColor,
            ]}
          >
            Американо
          </Text>
        </View>
        <View style={styles.cardsContent}>
          {cardArr.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                subTitle={e.subTitle}
                type={e.type}
                price={e.price}
                image={e.image}
                description={e.description}
                rating={e.rating}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.footerNavigation}>
        <View style={styles.navigation}>
          <MainLink />
          <Link href={"/catalog/223"}>Карточка</Link>
        </View>
        <View style={styles.navigationBorder} />
        <View style={styles.navigation}>
          <BasketLink />
          <Link href={"/cart"}>Корзина</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    color: "#fff",
  },
  adressAndInput: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 25,
    gap: 28,
  },
  adressContainer: {
    flexDirection: "column",
  },
  adressText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
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
  cardCantainer: {
    backgroundColor: "#eeeeee",
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  containerMenu: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  typeColor: {
    backgroundColor: "#C67C4E",
    color: "#FFFFFF",
    fontWeight: 600,
  },
  textMenu: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  cardsContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "4%",
    columnGap: "4%",
  },
  text: {
    color: "#fff",
  },
  footerNavigation: {
    height: 100,
    zIndex: 2,
    width: "100%",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    paddingBottom: 30,
    paddingTop: 16,
  },
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
