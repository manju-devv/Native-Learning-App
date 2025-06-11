import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { cartContext } from "../context/CartContext";

const img =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];
const ProduceDetailsScreen = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(cartContext);
  const route = useRoute();
  const item = route.params.item;
  console.log(item)
  const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

  const handleItem = (item) => {
    item.size = selectedSize,
    item.color = selectedColor,
    addToCart(item);
    navigation.navigate("CART");
  }
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.coverImg} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>${item.price}</Text>
        </View>
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedSize(size)}
                key={index}
                style={styles.sizeValueContainer}
              >
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize === size && { color: "#e55b5b" },
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={[styles.title, styles.colorTitle]}>Colors</Text>
        <View style={styles.colorContainer}>
          {
            colorsArray.map((color,index) => (
              <TouchableOpacity onPress={()=>setSelectedColor(color)} key={index} style={[styles.circleBorder,selectedColor === color && ({borderWidth: 2,borderColor: color})]}>
                <View style={[styles.circle,{backgroundColor: color}]}  />
              </TouchableOpacity>
            ))
          }
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => handleItem(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProduceDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImg: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4d4c4c",
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colorTitle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,

  },
  colorContainer: {
    flexDirection: "row", 
    marginLeft: 12,
  },
  circleBorder:{
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  button: {
    backgroundColor: "#e96e6e",
    padding: 10,
    margin: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
