import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import { FlatList } from "react-native-gesture-handler";
import { cartContext } from "../context/CartContext";

const CartScreen = () => {
  const {carts,totalPrice,deleteItem} = useContext(cartContext);
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({item}) => <CartCard item={item} deleteItem={deleteItem}  />}
        ListFooterComponent={
          <View>
            <View style={styles.priceContainer}>
              <View style={styles.totalAndShipping}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.totalAndShipping}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>$0.00</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalAndShipping}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text
                style={[styles.text, { color: "black", fontWeight: "700" }]}
              >
                ${totalPrice}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.checkoutContainer}>
              <Text style={styles.button}>Checkout</Text>
            </TouchableOpacity>
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 5,
        }}
      />
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    marginBottom: 30,
  },
  priceContainer: {
    marginTop: 40,
  },
  totalAndShipping: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: "#757575",
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#c0c0c0",
    marginVertical: 10,
  },
  checkoutContainer: {
    backgroundColor: "#e96e6e",
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    padding: 10,
  },
});
