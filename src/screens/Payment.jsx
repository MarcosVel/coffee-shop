import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const Payment = ({ navigation }) => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  goBack: {
    position: "absolute",
    left: 28,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
});

export default Payment;
