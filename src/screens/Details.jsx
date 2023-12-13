import { StyleSheet, Text, View } from "react-native";

const Details = ({ navigation, route }) => {
  console.log("navigation", navigation);
  console.log("route", route.params);

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Details;
