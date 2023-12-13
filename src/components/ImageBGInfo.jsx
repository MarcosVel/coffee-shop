import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SPACING } from "../theme/theme";
import GradientIcon from "./GradientIcon";

const ImageBGInfo = ({
  goBack,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  toggleFavourite,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagelink_portrait} style={styles.bgImage}>
        <View style={styles.actions}>
          {goBack && (
            <TouchableOpacity onPress={goBack} style={styles.actionButton}>
              <GradientIcon
                name="left"
                size={16}
                color={COLORS.secondaryLightGreyHex}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => toggleFavourite(favourite, type, id)}
            style={[styles.actionButton, { marginLeft: "auto" }]}
          >
            <GradientIcon
              name="like"
              size={16}
              color={
                favourite ? COLORS.primaryRedHex : COLORS.secondaryLightGreyHex
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bgImage: {
    width: "100%",
    aspectRatio: 20 / 25,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.space_24,
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageBGInfo;
