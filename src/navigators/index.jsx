import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack.navigator";

const AppNavigatorRoutes = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default AppNavigatorRoutes;
