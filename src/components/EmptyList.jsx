import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rive, { Fit } from "rive-react-native";
import { COLORS, FONTFAMILY } from "../theme/theme";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Rive
        url="https://public.rive.app/community/runtime-files/7843-15126-coffee.riv"
        fit={Fit.Contain}
        style={{
          width: 250,
          aspectRatio: 1,
        }}
      />

      <Text style={styles.text}>Cart is empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 104,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 16,
    color: COLORS.primaryOrangeHex,
    textAlign: "center",
    marginTop: -12,
  },
});

export default EmptyList;
