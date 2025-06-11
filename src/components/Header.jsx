import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HOME_STACK")}
        style={styles.appContainer}
      >
        {isCart ? (
          <Icon name="chevron-back" size={28} color="#e96e6e" />
        ) : (
          <Image source={require("../assets/dot.png")} style={styles.appIcon} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.cart}>My Cart</Text>}

      <Image source={require("../assets/prof.png")} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  appContainer: {
    backgroundColor: "#FFFFFF",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  dp: {
    height: 44,
    width: 44,
  },
  cart: {
    fontSize: 30,
    fontWeight: "700",
  },
});
