import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { useStore } from "../store/store";

const OrderHistory = () => {
  const OrderHistoryList = useStore((state) => state.OrderHistoryList);
  const cleanOrderHistory = useStore((state) => state.cleanOrderHistory);

  console.log("OrderHistoryList", OrderHistoryList);

  return (
    <SafeAreaView>
      <Text>OrderHistory</Text>
      <Button title="Clean" onPress={() => cleanOrderHistory()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OrderHistory;
