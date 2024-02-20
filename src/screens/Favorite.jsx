import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { EmptyList, HeaderBar, ImageBGInfo } from "../components";
import { useStore } from "../store/store";
import { COLORS, FONTFAMILY } from "../theme/theme";

const Favorite = ({ navigation }) => {
  const FavoritesList = useStore((state) => state.FavoritesList);
  const [addToFavoriteList, deleteFromFavoriteList] = useStore((state) => [
    state.addToFavoriteList,
    state.deleteFromFavoriteList,
  ]);

  const [fullDescription, setFullDescription] = useState(false);

  function handleFavorite(favourite, type, id) {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  }

  console.log("FavoritesList", FavoritesList);

  const FavoriteCard = ({ item }) => (
    <TouchableOpacity
      style={styles.favoriteCard}
      activeOpacity={0.6}
      onPress={() =>
        navigation.push("Details", {
          index: item.index,
          id: item.id,
          type: item.type,
        })
      }
    >
      <ImageBGInfo
        imagelink_portrait={item.imagelink_portrait}
        type={item.type}
        id={item.id}
        favourite={item.favourite}
        name={item.name}
        special_ingredient={item.special_ingredient}
        ingredients={item.ingredients}
        average_rating={item.average_rating}
        ratings_count={item.ratings_count}
        roasted={item.roasted}
        toggleFavourite={handleFavorite}
      />

      <LinearGradient
        style={styles.description}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      >
        <Text style={styles.descriptionTitle}>Description</Text>
        <TouchableOpacity
          onPress={() => setFullDescription(!fullDescription)}
          activeOpacity={0.5}
        >
          <Text
            style={styles.descriptionText}
            numberOfLines={fullDescription ? undefined : 3}
          >
            {item.description}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={FavoritesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FavoriteCard item={item} />}
        contentContainerStyle={{ paddingBottom: 56 }}
        ListHeaderComponent={<HeaderBar title="Favorites" />}
        ListEmptyComponent={() => <EmptyList screen="Favorites" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  favoriteCard: {
    borderRadius: 24,
    overflow: "hidden",
    marginHorizontal: 24,
    marginBottom: 28,
  },
  description: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: COLORS.primaryBlackHex,
  },
  descriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.secondaryLightGreyHex,
    fontSize: 14,
    marginBottom: 2,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
    fontSize: 12,
  },
});

export default Favorite;
