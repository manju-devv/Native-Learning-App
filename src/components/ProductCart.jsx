import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const ProductCart = ({item,handleLiked}) => {
  const navigatin = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigatin.navigate("PRODUCT_DETAILS",{item})} style={styles.container}>
      <Image source={{uri: item.image}} style={styles.coverImg} />
      <View style={{ paddingLeft: 5 }}>
        <Text style={styles.product}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {handleLiked(item)}}
        style={styles.heartContainer}
      >
        {item.isLiked ? (
          <Icon name="heart" size={20} color="#E55b5b" />
        ) : (
          <Icon name="heart-outline" size={20} color="#E55b5b" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    position: "relative",
  },
  coverImg: {
    height: 256,
    width: "92%",
    borderRadius: 15,
    marginVertical: 10,
  },
  product: {
    fontSize: 18,
    color: "#444444",
    fontWeight: 600,
  },
  price: {
    fontSize: 17,
    color: "#9c9c9c",
    fontWeight: "600",
  },
  heartContainer: {
    width: 34,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    position: "absolute",
    top: 25,
    right: 25,
  },
});
