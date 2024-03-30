import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import GradientIcon from "./GradientIcon";
import ProfilePic from "./ProfilePic";

const HeaderBar = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={!onPress} onPress={onPress}>
        <GradientIcon
          name="menu"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: SPACING.space_10,
    paddingHorizontal: SPACING.space_28,
    paddingBottom: SPACING.space_12,
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
