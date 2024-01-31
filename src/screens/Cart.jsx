import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { EmptyList, HeaderBar, PaymentFooter } from "../components";
import { useStore } from "../store/store";
import { COLORS, SPACING } from "../theme/theme";

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HeaderBar title="Cart" onPress={() => cleanCart()} />

        {CartList.length > 0 ? (
          <View style={styles.container}></View>
        ) : (
          <View>
            <EmptyList />
          </View>
        )}
      </ScrollView>

      {CartList.length > 0 && (
        <View style={styles.footer}>
          <PaymentFooter
            title="Total Price"
            prices={{ 0: { price: CartPrice } }}
            selectedSize={0}
            buttonText="Pay"
            buttonHandler={() => navigation.push("Payment")}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
  },
  scrollView: {},
  container: {
    flexGrow: 1,
    alignItems: "center",
    marginHorizontal: SPACING.space_28,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    marginHorizontal: SPACING.space_20,
    marginTop: "auto",
    marginBottom: 80,
  },
});

export default Cart;
