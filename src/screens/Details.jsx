import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, ImageBGInfo } from "../components";
import { useStore } from "../store/store";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

const Details = ({ navigation, route }) => {
  const ItemOfIndex = useStore((state) =>
    route.params.type === "Coffee" ? state.CoffeeList : state.BeanList
  )[route.params.index];
  const [addToFavoriteList, deleteFromFavoriteList] = useStore((state) => [
    state.addToFavoriteList,
    state.deleteFromFavoriteList,
  ]);
  const [fullDescription, setFullDescription] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);

  console.log("ItemOfIndex", ItemOfIndex);

  const handleFavorite = (favourite, type, id) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ImageBGInfo
          goBack={() => navigation.goBack()}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          toggleFavourite={handleFavorite}
        />

        <View style={styles.info}>
          <Text style={styles.title}>Description</Text>
          <TouchableOpacity
            onPress={() => setFullDescription(!fullDescription)}
            activeOpacity={0.5}
          >
            <Text
              style={styles.description}
              numberOfLines={fullDescription ? undefined : 3}
            >
              {ItemOfIndex.description}
            </Text>
          </TouchableOpacity>

          <Text style={styles.title}>Size</Text>
          <View style={styles.pricesRow}>
            {ItemOfIndex.prices.map((price, index) => (
              <TouchableOpacity
                key={index}
                style={styles.priceButton(index === selectedSize)}
                onPress={() => setSelectedSize(index)}
              >
                <Text
                  key={price.size}
                  style={styles.priceText(index === selectedSize)}
                >
                  {price.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button title="Add to Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  info: {
    padding: SPACING.space_20,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
    marginBottom: SPACING.space_16,
  },
  description: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_20,
  },
  pricesRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.space_24,
    marginBottom: SPACING.space_28,
  },
  priceButton: (selected) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: selected ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex,
  }),
  priceText: (selected) => ({
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    color: selected ? COLORS.primaryOrangeHex : COLORS.secondaryLightGreyHex,
  }),
});

export default Details;
