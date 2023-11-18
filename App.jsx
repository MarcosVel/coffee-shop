import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import AppNavigatorRoutes from "./src/navigators";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./src/assets/fonts/app_icons.ttf"),
  });

  useEffect(() => {
    const loadApp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadApp();
  }, [fontsLoaded]);

  return <AppNavigatorRoutes />;
}
