import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTFAMILY } from "../theme/theme";

const OrderHistoryItem = ({ item, navigation }) => {
  return (
    <View style={styles.order}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Order Date</Text>
          <Text style={styles.date}>{item.OrderDate}</Text>
        </View>
        <View>
          <Text style={styles.title}>Total Amount</Text>
          <Text style={styles.total}>${item.CartListPrice.toFixed(2)}</Text>
        </View>
      </View>

      <View style={{ gap: 20 }}>
        {item.Orders.map((orderItem) =>
          orderItem.CartList.map((cartItem) => (
            <LinearGradient
              key={cartItem.id}
              style={styles.orderItem}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            >
              <TouchableOpacity
                style={styles.orderItemHeader}
                onPress={() =>
                  navigation.push("Details", {
                    index: cartItem.index,
                    id: cartItem.id,
                    type: cartItem.type,
                  })
                }
              >
                <Image
                  source={cartItem.imagelink_square}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.orderItemName}>{cartItem.name}</Text>
                  <Text style={styles.special_ingredient}>
                    {cartItem.special_ingredient}
                  </Text>
                </View>
                <Text style={styles.orderItemPrice}>
                  <Text style={{ color: COLORS.primaryOrangeHex }}>$ </Text>
                  {parseFloat(cartItem.ItemPrice).toFixed(2)}
                </Text>
              </TouchableOpacity>

              <View style={styles.quantityContainer}>
                {cartItem.prices.map((priceItem) => (
                  <View style={styles.quantity} key={priceItem.price}>
                    <View style={styles.sizeOrdered}>
                      <Text style={[styles.whiteText, { minWidth: 20 }]}>
                        {priceItem.size}
                      </Text>
                      <View style={styles.separator} />
                      <Text style={styles.whiteText}>
                        <Text style={{ color: COLORS.primaryOrangeHex }}>
                          ${" "}
                        </Text>
                        {priceItem.price}
                      </Text>
                    </View>

                    <View style={styles.quantityOrdered}>
                      <Text style={styles.whiteText}>
                        <Text style={{ color: COLORS.primaryOrangeHex }}>
                          X{" "}
                        </Text>
                        {priceItem.quantity}
                      </Text>
                    </View>

                    <Text
                      style={[
                        styles.whiteText,
                        { color: COLORS.primaryOrangeHex },
                      ]}
                    >
                      {(priceItem.quantity * priceItem.price).toFixed(2)}
                    </Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  order: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  date: {
    color: COLORS.primaryWhiteHex,
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_light,
  },
  total: {
    color: COLORS.primaryOrangeHex,
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_regular,
    textAlign: "right",
  },
  orderItem: {
    padding: 16,
    paddingTop: 12,
    borderRadius: 24,
  },
  orderItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  orderItemName: {
    color: COLORS.primaryWhiteHex,
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  special_ingredient: {
    color: COLORS.primaryWhiteHex,
    fontSize: 12,
    fontFamily: FONTFAMILY.poppins_light,
  },
  orderItemPrice: {
    color: COLORS.primaryWhiteHex,
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginLeft: "auto",
  },
  quantityContainer: {
    marginTop: 12,
    gap: 10,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sizeOrdered: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    minWidth: 140,
    paddingHorizontal: 12,
    gap: 8,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.primaryBlackHex,
  },
  whiteText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: COLORS.secondaryDarkGreyHex,
  },
  quantityOrdered: {
    minWidth: 42,
    alignItems: "flex-start",
  },
});

export default OrderHistoryItem;
