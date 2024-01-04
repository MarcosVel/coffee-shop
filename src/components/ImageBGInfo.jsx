import { BlurView } from "expo-blur";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import CustomIcon from "./CustomIcon";
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

        <BlurView tint="dark" intensity={15} style={styles.blurView}>
          <View style={styles.leftSide}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.special_ingredient}>
                {special_ingredient}
              </Text>
            </View>

            <View style={styles.ratingView}>
              <CustomIcon
                name="star"
                size={20}
                color={COLORS.primaryOrangeHex}
              />
              <Text style={styles.rating}>{average_rating}</Text>
              <Text style={styles.special_ingredient}>({ratings_count})</Text>
            </View>
          </View>

          <View style={{ gap: 16 }}>
            <View style={styles.itemProperties}>
              <View
                style={[styles.property, type !== "Bean" && { paddingTop: 2 }]}
              >
                <CustomIcon
                  name={type === "Bean" ? "bean" : "beans"}
                  size={type === "Bean" ? 28 : 42}
                  color={COLORS.primaryOrangeHex}
                />
                <Text
                  style={[
                    styles.propertyText,
                    type !== "Bean" && { marginTop: -6 },
                  ]}
                >
                  {type}
                </Text>
              </View>

              <View style={styles.property}>
                <CustomIcon
                  name={type === "Bean" ? "location" : "drop"}
                  size={FONTSIZE.size_28}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.propertyText}>{ingredients}</Text>
              </View>
            </View>

            <View style={styles.roasted}>
              <Text style={styles.propertyText}>{roasted}</Text>
            </View>
          </View>
        </BlurView>
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
  blurView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: SPACING.space_24,
    borderTopRightRadius: SPACING.space_24,
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_20,
    overflow: "hidden",
  },
  leftSide: {
    justifyContent: "space-around",
  },
  name: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  special_ingredient: {
    color: COLORS.secondaryLightGreyHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  itemProperties: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  property: {
    minWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_8,
    aspectRatio: 1,
  },
  roasted: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_12,
  },
  propertyText: {
    textAlign: "center",
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    marginTop: 2,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default ImageBGInfo;
