import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  EmptyList,
  HeaderBar,
  OrderHistoryItem,
  PopUpAnimation,
} from "../components";
import { useStore } from "../store/store";
import { COLORS } from "../theme/theme";

const OrderHistory = ({ navigation }) => {
  const OrderHistoryList = useStore((state) => state.OrderHistoryList);
  const cleanOrderHistory = useStore((state) => state.cleanOrderHistory);
  const [showAnimation, setShowAnimation] = useState(false);

  function handleDownloadAnimation() {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1600);
  }

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar title="Order History" onPress={() => cleanOrderHistory()} />

      <FlatList
        data={transformedArray}
        keyExtractor={(item) => item.OrderDate}
        renderItem={({ item }) => (
          <OrderHistoryItem item={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => <EmptyList screen="Your history" />}
      />

      {transformedArray.length > 0 && (
        <LinearGradient
          style={styles.footer}
          colors={["rgba(12, 15, 20, 0)", "rgba(12, 15, 20, 1)"]}
          locations={[0.1, 0.3]}
        >
          <Button title="Download" onPress={handleDownloadAnimation} />
        </LinearGradient>
      )}

      {showAnimation && <PopUpAnimation animation="download" />}
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
    paddingBottom: 196,
    gap: 24,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingTop: 60,
    paddingHorizontal: 32,
    paddingBottom: 84,
  },
});

export default OrderHistory;
