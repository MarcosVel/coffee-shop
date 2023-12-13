import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { CustomIcon } from "../components";
import { Cart, Favorite, Home, OrderHistory } from "../screens";
import { COLORS } from "../theme/theme";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: styles.tabBar,
      tabBarBackground: () => (
        <BlurView tint="dark" intensity={10} style={styles.blurView} />
      ),
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="home"
            size={24}
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        ),
      }}
    />
    <Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="cart"
            size={24}
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        ),
      }}
    />
    <Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="like"
            size={24}
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        ),
      }}
    />
    <Screen
      name="History"
      component={OrderHistory}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="bell"
            size={24}
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
          />
        ),
      }}
    />
  </Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    shadowColor: "transparent",
    shadowOpacity: 0,
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabNavigator;
