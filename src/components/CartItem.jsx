import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTFAMILY } from "../theme/theme";

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
      <View style={styles.data}>
        <Image source={imagelink_square} style={styles.image} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.special_ingredient}>{special_ingredient}</Text>
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
  data: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
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
});

export default CartItem;
