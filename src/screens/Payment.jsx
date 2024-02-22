import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PaymentFooter, PaymentMethod } from "../components";
import GradientIcon from "../components/GradientIcon";
import { COLORS, FONTFAMILY } from "../theme/theme";

const PaymentList = [
  {
    name: "Wallet",
    icon: "wallet",
    isIcon: true,
  },
  {
    name: "Google pay",
    icon: require("../assets/app_images/gpay.png"),
    isIcon: false,
  },
  {
    name: "Apple pay",
    icon: require("../assets/app_images/applepay.png"),
    isIcon: false,
  },
  {
    name: "Amazon pay",
    icon: require("../assets/app_images/amazonpay.png"),
    isIcon: false,
  },
];

const Payment = ({ navigation, route }) => {
  const { price } = route.params;
  const [paymentMode, setPaymentMode] = useState("Credit Card");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <GradientIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={16}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Payment</Text>
      </View>

      <View style={styles.paymentOptionsContainer}>
        {PaymentList.map((item, index) => (
          <PaymentMethod
            paymentMode={paymentMode}
            name={item.name}
            icon={item.icon}
            isIcon={item.isIcon}
            price={price}
          />
        ))}
      </View>

      <PaymentFooter
        title="Price"
        prices={{ 0: { price } }}
        selectedSize={0}
        buttonText={`Pay from ${paymentMode}`}
        buttonHandler={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginHorizontal: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  goBack: {
    position: "absolute",
    left: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
  paymentOptionsContainer: {
    flex: 1,
    marginTop: 32,
    gap: 10,
  },
});

export default Payment;
