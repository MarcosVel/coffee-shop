import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
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
import BgIcon from "./BgIcon";
import CustomIcon from "./CustomIcon";

const CARD_WIDTH = Dimensions.get("window").width * 0.32; // 32% of the screen width

const CoffeeCard = ({
  id,
  index,
  type,
  name,
  roasted,
  imagelink_square,
  special_ingredient,
  prices,
  average_rating,
}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.container}
      >
        <ImageBackground
          source={imagelink_square}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.rating}>
            <CustomIcon
              name="star"
              size={FONTSIZE.size_10}
              color={COLORS.primaryOrangeHex}
            />
            <Text style={styles.ratingText}>{average_rating}</Text>
          </View>
        </ImageBackground>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.ingredient}>{special_ingredient}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.currency}>
            $ <Text style={styles.price}>{prices[0].price}</Text>
          </Text>

          <TouchableOpacity>
            <BgIcon
              name="add"
              color={COLORS.primaryWhiteHex}
              size={FONTSIZE.size_10}
              bgColor={COLORS.primaryOrangeHex}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_20,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 14,
    marginBottom: SPACING.space_12,
    overflow: "hidden",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackRGBA,
    paddingHorizontal: SPACING.space_10,
    paddingVertical: 3,
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomLeftRadius: 16,
    gap: SPACING.space_4,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_4,
  },
  ingredient: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_8,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currency: {
    alignItems: "center",
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CoffeeCard;
