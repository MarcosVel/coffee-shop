import { useRef, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CoffeeCard, CustomIcon, HeaderBar } from "../components";
import { useStore } from "../store/store";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";

function getCategoriesFromData(data) {
  const temp = {};
  data.forEach((item) => {
    temp[item.name] = (temp[item.name] || 0) + 1;
  });
  return ["All", ...Object.keys(temp)];
}

function getCoffeeList(category, data) {
  if (category === "All") {
    return data;
  }
  return data.filter((item) => item.name === category);
}

const Home = ({ navigation }) => {
  const ListRef = useRef();

  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeanList = useStore((state) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList)
  );
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );

  console.log("sortedCoffee", sortedCoffee);

  function scrollListToBeginning() {
    ListRef.current.scrollToOffset({ animated: true, offset: 0 }); // add animation to scroll list to beginning
  }

  function searchCoffee(search) {
    if (search !== "") {
      scrollListToBeginning();
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedCoffee([
        ...CoffeeList.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  }

  function resetSearch() {
    setSearchText("");
    setSortedCoffee([...CoffeeList]);
    scrollListToBeginning();
  }

  const EmptyList = () => (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>No Coffee Available</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled" // buttons still work when keyboard is open
      >
        <HeaderBar />

        <Text style={styles.title}>Find the best{"\n"}coffee for you</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Find your coffee..."
            defaultValue={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInput}
          />

          {searchText.length > 0 && (
            <TouchableOpacity style={styles.closeBtn} onPress={resetSearch}>
              <CustomIcon
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            hitSlop={10}
            disabled={searchText.length === 0}
            onPress={() => searchCoffee(searchText)}
          >
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item, index) => item + index}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesFilter}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                scrollListToBeginning();
                setCategoryIndex({ index, category: categories[index] });
                setSortedCoffee(getCoffeeList(categories[index], CoffeeList));
              }}
            >
              <Text style={styles.filterText(index === categoryIndex.index)}>
                {item}
              </Text>
              {index === categoryIndex.index && (
                <View style={styles.categoryDot} />
              )}
            </TouchableOpacity>
          )}
        />

        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cardsList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.push("Details")}>
              <CoffeeCard
                id={item.id}
                index={item.index}
                type={item.hype}
                name={item.name}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                special_ingredient={item.special_ingredient}
                prices={item.prices}
                average_rating={item.average_rating}
              />
            </TouchableOpacity>
          )}
          ListEmptyComponent={EmptyList}
        />

        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cardsList}
          renderItem={({ item }) => (
            <CoffeeCard
              id={item.id}
              index={item.index}
              type={item.hype}
              name={item.name}
              roasted={item.roasted}
              imagelink_square={item.imagelink_square}
              special_ingredient={item.special_ingredient}
              prices={item.prices}
              average_rating={item.average_rating}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    paddingBottom: 56,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_28,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: SPACING.space_28,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    justifyContent: "space-between",
    paddingLeft: SPACING.space_20,
  },
  textInput: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginRight: SPACING.space_12,
  },
  closeBtn: {
    marginRight: SPACING.space_12,
  },
  searchIcon: {
    marginVertical: SPACING.space_16,
    marginRight: SPACING.space_20,
  },
  categoriesFilter: {
    gap: SPACING.space_20,
    paddingHorizontal: SPACING.space_28,
    marginBottom: SPACING.space_20,
  },
  filterText: (selected) => ({
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: selected ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex,
  }),
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primaryOrangeHex,
    marginTop: SPACING.space_8,
    alignSelf: "center",
  },
  cardsList: {
    flexGrow: 1,
    gap: SPACING.space_20,
    paddingHorizontal: SPACING.space_28,
    marginBottom: SPACING.space_24,
  },
  coffeeBeansTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_28,
    marginBottom: SPACING.space_20,
  },
  emptyView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.space_36 * 3.02,
  },
  emptyText: {
    textAlign: "center",
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGreyHex,
  },
});

export default Home;
