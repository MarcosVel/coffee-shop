import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE } from "../theme/theme";
import Button from "./Button";

const PaymentFooter = ({ prices, selectedSize, buttonText, buttonHandler }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.priceBox}>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.priceValue}>
          <Text style={{ color: COLORS.primaryOrangeHex }}>$</Text>{" "}
          {prices[selectedSize].price}
        </Text>
      </View>

      <Button title={buttonText} onPress={buttonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },
  priceBox: {
    alignItems: "center",
    minWidth: 70,
  },
  price: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  priceValue: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default PaymentFooter;
