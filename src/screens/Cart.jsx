import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, EmptyList, HeaderBar } from "../components";
import { useStore } from "../store/store";
import { COLORS, FONTFAMILY, SPACING } from "../theme/theme";

const Cart = () => {
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
          <View style={styles.priceView}>
            <Text style={styles.totalPrice}>Total Price</Text>

            <Text style={styles.price}>
              <Text style={{ color: COLORS.primaryOrangeHex }}>$ </Text>
              {CartPrice}
            </Text>
          </View>

          <Button title="Pay" onPress={() => console.log("test")} />
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
  priceView: {
    alignItems: "center",
  },
  totalPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 12,
    color: COLORS.secondaryLightGreyHex,
    marginBottom: 2,
  },
  price: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 20,
    color: COLORS.primaryWhiteHex,
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
