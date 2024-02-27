import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTFAMILY } from "../theme/theme";
import CustomIcon from "./CustomIcon";

const PaymentMethod = ({ paymentMode, name, icon, isIcon, price }) => {
  return (
    <TouchableOpacity
      style={styles.paymentCardContainer(paymentMode === name)}
      activeOpacity={0.5}
    >
      <LinearGradient
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.iconMethodContainer}>
          {isIcon ? (
            <CustomIcon name={icon} color={COLORS.primaryOrangeHex} size={24} />
          ) : (
            <Image source={icon} style={{ width: 24 }} resizeMode="contain" />
          )}
          <Text style={styles.method}>{name}</Text>
        </View>

        {isIcon && <Text style={[styles.method, styles.price]}>$ {price}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentCardContainer: (isSelected) => ({
    borderRadius: 25,
    borderWidth: 2,
    borderColor: isSelected ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex,
    overflow: "hidden",
  }),
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
  },
  iconMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  method: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
  },
  price: {
    fontFamily: FONTFAMILY.poppins_regular,
  },
});

export default PaymentMethod;
