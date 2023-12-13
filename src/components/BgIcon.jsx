import React from "react";
import { StyleSheet, View } from "react-native";
import { BORDERRADIUS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";

const BgIcon = ({ name, color, size, bgColor }) => {
  return (
    <View style={styles.container(bgColor)}>
      <CustomIcon name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
    backgroundColor: bgColor,
  }),
});

export default BgIcon;
