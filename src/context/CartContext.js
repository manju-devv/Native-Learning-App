import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [carts,setCarts] = useState([]);
    const [totalPrice,setTotalPrcie] = useState(0);
    useEffect(() => {
        loadCart();
    },[]);

    const totalSum = (carts) => {
        const totalSum = carts.reduce((amt,item) => amt + item.price,0)
        console.log("sum",totalSum);
        setTotalPrcie(totalSum);
    }

    const loadCart = async() => {
        try{
            let cartItems = await AsyncStorage.getItem("carts");
            cartItems = cartItems ? JSON.parse(cartItems):[]
            setCarts(cartItems);
            totalSum(cartItems)
        } catch(e){
            console.log("error retrieving data",e);
        }
    }


    const addToCart = async(item) => {
        const itemExist = carts.findIndex((cart) => cart.id === item.id);
        if(itemExist === -1){
            const newCartItems = [...carts,item]
            await AsyncStorage.setItem("carts",JSON.stringify(newCartItems));
            setCarts(newCartItems);
            totalSum(newCartItems);
        }
    };

    const deleteItem = async(item) => {
        const newItems = carts.filter((cart)=>cart.id !== item.id);
        await AsyncStorage.setItem("carts",JSON.stringify(newItems));
        setCarts(newItems);
        totalSum(newItems);
    }

    const value = { 
        carts,
        addToCart,
        totalPrice,
        deleteItem,
    }
    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}