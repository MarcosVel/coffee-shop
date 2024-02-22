import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Payment } from "../screens";
import { COLORS } from "../theme/theme";
import TabNavigator from "./tab.navigator";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: COLORS.primaryBlackHex,
      },
    }}
  >
    <Screen
      name="Tab"
      component={TabNavigator}
      options={{ animation: "slide_from_bottom" }}
    />
    <Screen
      name="Details"
      component={Details}
      options={{ animation: "slide_from_bottom" }}
    />
    <Screen
      name="Payment"
      component={Payment}
      options={{ animation: "slide_from_bottom" }}
    />
  </Navigator>
);

export default StackNavigator;
