import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProduceDetailsScreen from './src/screens/ProduceDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import { cartContext, CartProvider } from './src/context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getTabIcon = (name:string,size:number,color:string,focused:boolean) => {
  const {carts} = useContext(cartContext);
  let iconName;
  if(name === "HOME_STACK"){
    iconName = focused ? "home" : "home-outline"; 
  } else if(name === "REORDER"){
    iconName = focused ? "reorder-four" : "reorder-four-outline";
  } else if(name === "CART"){
    iconName = focused ? "cart" : "cart-outline";
  } else {
    iconName = focused ? "person" : "person-outline"
  }
  return (
    <View style={{position: "relative"}}>
      <Icon name={iconName} color={color} size={size} />
      {name === "CART" && carts.length > 0 && (
        <View style={{
          height: 14,
          width: 14,
          borderRadius: 7,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: -5,
          top: -6,
        }}>
          <Text style={{fontSize: 10,color: "white",fontWeight: "600"}}>{carts.length}</Text>
        </View>
      )}
    </View>
  )
}

const Home = () => {
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

const MyHomeStack = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='HOME' component={HomeScreen} />
      <Stack.Screen name='PRODUCT_DETAILS' component={ProduceDetailsScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({size,color,focused}) =>{ 
            return getTabIcon(route.name,size,color,focused)
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#e96e6e",
          tabBarStyle: {
            paddingTop: 5,
          },
        })}
        // initialRouteName='CART'
        >
          <Tab.Screen name="HOME_STACK" component={MyHomeStack} />
          <Tab.Screen name="REORDER" component={Home} />
          <Tab.Screen name="CART" component={CartScreen} />
          <Tab.Screen name="ACCOUNT" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({});