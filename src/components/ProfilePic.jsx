import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../theme/theme";

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/app_images/avatar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
