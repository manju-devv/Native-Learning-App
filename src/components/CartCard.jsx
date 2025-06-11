import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";

const imgUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

const CartCard = ({ item, deleteItem }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: item.color }]} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() =>{deleteItem(item)} }>
        <Icon name="trash" color="#f68cb5" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  img: {
    height: 125,
    width: "30%",
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#444444",
  },
  price: {
    color: "#797979",
    marginVertical: 10,
    fontSize: 18,
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 32,
    height: 32,
    backgroundColor: "skyblue",
    borderRadius: 16,
  },
  sizeCircle: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
