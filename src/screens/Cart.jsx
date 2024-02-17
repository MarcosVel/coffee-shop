import { LinearGradient } from "expo-linear-gradient";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { CartItem, EmptyList, HeaderBar, PaymentFooter } from "../components";
import { useStore } from "../store/store";
import { COLORS, SPACING } from "../theme/theme";
import { useEffect } from "react";

const Cart = ({ navigation }) => {
  const [CartList, CartPrice] = useStore((state) => [
    state.CartList,
    state.CartPrice,
  ]);
  const cleanCart = useStore((state) => state.cleanCart);
  const incrementCartItem = useStore((state) => state.incrementCartItem);
  const decrementCartItem = useStore((state) => state.decrementCartItem);
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);

  console.log("CartList", CartList);

  useEffect(() => {
    calculateCartPrice();
  }, [CartList]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar title="Cart" onPress={() => cleanCart()} />

      <FlatList
        data={CartList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        style={{ marginBottom: 50 }}
        renderItem={({ item }) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.name}
            imagelink_square={item.imagelink_square}
            special_ingredient={item.special_ingredient}
            roasted={item.roasted}
            prices={item.prices}
            type={item.type}
            incrementCartItem={incrementCartItem}
            decrementCartItem={decrementCartItem}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
        showsVerticalScrollIndicator={false}
      />

      {CartList.length > 0 && (
        <LinearGradient
          style={styles.footer}
          colors={["rgba(12, 15, 20, 0)", "rgba(12, 15, 20, 1)"]}
          locations={[0, 0.5]}
        >
          <PaymentFooter
            title="Total Price"
            prices={{ 0: { price: CartPrice } }}
            selectedSize={0}
            buttonText="Pay"
            buttonHandler={() => navigation.push("Payment")}
          />
        </LinearGradient>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
  },
  list: {
    paddingHorizontal: SPACING.space_28,
    paddingBottom: 140,
    gap: 16,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    paddingHorizontal: SPACING.space_20,
    marginBottom: 84,
  },
  blurView: {
    width: "100%",
  },
});

export default Cart;
