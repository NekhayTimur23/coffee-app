import { View, Image, StyleSheet, Text } from "react-native";
import { AtomCardCoffe } from "../../entities/coffe/model/coffe.model";
import RaitingStar from "../../assets/icon/ratingStar";
import PlusButtom from "../../assets/icon/plusButton";

export default function Card({
  name,
  subTitle,
  price,
  image,
  rating,
}: AtomCardCoffe) {
  return (
    <View style={styles.card}>
      <View style={styles.cardImg}>
        <View style={styles.cardImgRating}>
          <RaitingStar />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Image
          resizeMode={"cover"}
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${image}` }}
        />
      </View>
      <View style={styles.priceAndButton}>
        <View style={styles.cardDescription}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View style={styles.cardPrice}>
          <Text style={styles.priceText}>{price} ₽</Text>
          <View style={styles.buttonAdd}>
            <PlusButtom />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    width: "48%",
    height: 255,
    borderRadius: 16,
    padding: "2%",
  },
  cardImg: {
    width: "100%",
    height: "58%",
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
  },
  cardImgRating: {
    position: "absolute",
    height: 25,
    width: 50,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000029",
    justifyContent: "center",
    borderBottomRightRadius: 16,
    gap: 2,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: 600,
    color: "#ffffff",
  },
  nameText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#2F2D2C",
  },
  subTitleText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#9B9B9B",
  },
  cardDescription: {
    gap: 4,
    marginBottom: 8,
  },
  priceAndButton: {
    padding: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#2F4B4E",
  },
  cardPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonAdd: {
    width: 32,
    height: 32,
    backgroundColor: "#C67C4E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
