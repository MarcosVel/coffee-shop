import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import GradientIcon from "./GradientIcon";
import ProfilePic from "./ProfilePic";

const HeaderBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <GradientIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />

      <Text style={styles.text}>{title}</Text>

      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: SPACING.space_28,
    paddingTop: SPACING.space_10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
