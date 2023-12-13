import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ImageBGInfo } from "../components";
import { useStore } from "../store/store";

const Details = ({ navigation, route }) => {
  const ItemOfIndex = useStore((state) =>
    route.params.type === "Coffee" ? state.CoffeeList : state.BeanList
  )[route.params.index];
  const [addToFavoriteList, deleteFromFavoriteList] = useStore((state) => [
    state.addToFavoriteList,
    state.deleteFromFavoriteList,
  ]);

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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Details;
