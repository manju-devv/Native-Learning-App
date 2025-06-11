import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: "white",
            backgroundColor: "#e96e6e",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 18,
    fontWeight: "600",
    // backgroundColor: "#e96e6e",
    backgroundColor: "#dfdcdc",
    // color: "white",
    color: "#938f8f",
    // alignSelf: "flex-start"
    // padding: 20,
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
