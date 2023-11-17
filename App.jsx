import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomIcon from "./src/components/CustomIcon";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./src/assets/fonts/app_icons.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <CustomIcon name="like" size={32} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
