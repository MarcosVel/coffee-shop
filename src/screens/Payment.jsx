import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomIcon, PaymentFooter, PaymentMethod } from "../components";
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
        <TouchableOpacity onPress={() => setPaymentMode("Credit Card")}>
          <View
            style={styles.creditCardContainer(paymentMode === "Credit Card")}
          >
            <Text style={styles.creditCardTitle}>Credit Card</Text>

            <LinearGradient
              colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.creditCardGradient}
            >
              <View style={styles.cardSeparation}>
                <CustomIcon
                  name="chip"
                  size={32}
                  color={COLORS.primaryOrangeHex}
                />

                <CustomIcon
                  name="visa"
                  size={50}
                  color={COLORS.primaryWhiteHex}
                />
              </View>

              <Text style={styles.cardNumber}>3897 8923 6745 4638</Text>

              <View style={styles.cardSeparation}>
                <View>
                  <Text style={styles.cardLabel}>Card holder name</Text>
                  <Text style={styles.cardData}>Robert Evans</Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.cardLabel}>Expiy date</Text>
                  <Text style={styles.cardData}>02/30</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        {PaymentList.map((item, index) => (
          <PaymentMethod
            key={index}
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
  creditCardContainer: (isSelected) => ({
    padding: 16,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: isSelected ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex,
  }),
  creditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
    marginBottom: 12,
  },
  creditCardGradient: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderRadius: 16,
  },
  cardSeparation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    letterSpacing: 6,
    marginTop: 28,
    marginBottom: 44,
  },
  cardLabel: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: 10,
    opacity: 0.5,
  },
  cardData: {
    fontSize: 14,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
  },
});

export default Payment;
