import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";
import ProductCart from "../components/ProductCart";
import data from "../data/data.json";

const categories = ["Trending Now", "All", "New", "Men", "Women"];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now");
  const [products, setProducts] = useState(data.products);
  const categoryItem = ({ item }) => (
    <Category
      item={item}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );

  const Products = ({ item }) => (
    <ProductCart item={item} handleLiked={handleLiked} />
  );

  const handleLiked = (item) => {
    const newProduct = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProduct);
  };
  return (
    <LinearGradient colors={["#fdf0f3", "#fffbfc"]} style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={Products}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchTxt}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={{ marginHorizontal: 10 }}>
                <Icon name="search" size={26} color="#c0c0c0" />
              </View>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#c0c0c0"
                style={styles.textInpContainer}
              />
            </View>
            <FlatList
              data={categories}
              renderItem={categoryItem}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  matchTxt: {
    color: "#000000",
    fontSize: 28,
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 10,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  textInpContainer: {
    flex: 1,
    fontSize: 18,
    color: "#c0c0c0",
  },
});
