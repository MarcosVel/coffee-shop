import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE } from "../theme/theme";
import BgIcon from "./BgIcon";

const CartItem = ({
  id,
  title,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  incrementCartItem,
  decrementCartItem,
}) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <View style={styles.innerContainer}>
        <Image source={imagelink_square} style={styles.image} />

        <View style={styles.data}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.special_ingredient}>{special_ingredient}</Text>
          </View>

          {prices.length === 1 ? (
            <>
              <View style={styles.prices}>
                <View style={styles.size}>
                  <Text style={styles.sizeTxt}>{prices[0].size}</Text>
                </View>
                <Text style={styles.price}>
                  <Text style={{ color: COLORS.primaryOrangeHex }}>$ </Text>
                  {prices[0].price}
                </Text>
              </View>

              <View style={styles.quantityView}>
                <TouchableOpacity>
                  <BgIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                    bgColor={COLORS.primaryOrangeHex}
                  />
                </TouchableOpacity>

                <TextInput
                  value={prices[0].quantity.toString()}
                  style={styles.quantity}
                />

                <TouchableOpacity
                // onPress={addToCartHandler}
                >
                  <BgIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                    bgColor={COLORS.primaryOrangeHex}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.roasted}>
              <Text
                style={[
                  styles.special_ingredient,
                  { fontFamily: FONTFAMILY.poppins_medium },
                ]}
              >
                {roasted}
              </Text>
            </View>
          )}

          {/* {prices.length === 1 &&
            prices.map((price, index) => (
              <>
                <Text>{price.quantity}</Text>
                <Text>{price.price}</Text>
              </>
            ))} */}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    borderRadius: 24,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    flex: 1,
    height: "100%",
    aspectRatio: 1,
    borderRadius: 16,
  },
  data: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  special_ingredient: {
    fontSize: 10,
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_regular,
    lineHeight: 20,
  },
  roasted: {
    marginTop: 10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  prices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // gap: 16,
    // marginTop: 10,
  },
  size: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 10,
  },
  sizeTxt: {
    fontSize: 16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  price: {
    fontSize: 20,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  quantityView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
    // marginTop: 10,
  },
  quantity: {
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: 8,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.primaryOrangeHex,
    flex: 1,
    height: "100%",
    textAlign: "center",
  },
});

export default CartItem;
