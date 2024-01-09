import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useStore } from "../store/store";

const Cart = () => {
  const cartList = useStore((state) => state.CartList);
  const cleanCart = useStore((state) => state.cleanCart);
  const cartPrice = useStore((state) => state.CartPrice);

  console.log("cartList", cartList);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => cleanCart()}>
        <Text>Clean cart</Text>
      </TouchableOpacity>
      <Text>{cartPrice}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cart;
