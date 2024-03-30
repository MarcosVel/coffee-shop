import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HeaderBar } from "../components";
import { useStore } from "../store/store";
import { COLORS, FONTFAMILY } from "../theme/theme";

const Order = ({ item }) => (
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
      {item.Orders.map((orderItem) => {
        console.log("orderItem", orderItem);
        return orderItem.CartList.map((cartItem) => (
          <LinearGradient
            key={cartItem.id}
            style={styles.orderItem}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          >
            <View style={styles.orderItemHeader}>
              <Image source={cartItem.imagelink_square} style={styles.image} />
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
            </View>
          </LinearGradient>
        ));
      })}
    </View>
  </View>
);

const OrderHistory = () => {
  const OrderHistoryList = useStore((state) => state.OrderHistoryList);
  const cleanOrderHistory = useStore((state) => state.cleanOrderHistory);

  const groupedOrders = OrderHistoryList.reduce((acc, item) => {
    const date = new Date(item.OrderDate);
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const formattedDate = `${date.toDateString()} ${hour}:${minutes}`;

    if (!acc[formattedDate]) {
      acc[formattedDate] = {
        OrderDate: formattedDate,
        CartListPrice: 0,
        Orders: [],
      };
    }

    acc[formattedDate].CartListPrice += parseFloat(item.CartListPrice); // Sum the CartListPrice
    acc[formattedDate].Orders.push(item);
    return acc;
  }, {});

  const transformedArray = Object.values(groupedOrders);

  console.log("transformedArray", transformedArray);

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar title="Order History" onPress={() => cleanOrderHistory()} />

      <FlatList
        data={transformedArray}
        keyExtractor={(item) => item.OrderDate}
        renderItem={({ item }) => <Order item={item} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
  },
  list: {
    marginTop: 8,
    paddingHorizontal: 32,
    paddingBottom: 96,
    gap: 24,
  },
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
});

export default OrderHistory;
