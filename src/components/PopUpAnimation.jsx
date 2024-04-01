import React from "react";
import { StyleSheet, View } from "react-native";
import Rive, { Fit } from "rive-react-native";
import { COLORS } from "../theme/theme";

const PopUpAnimation = ({ animation }) => {
  return (
    <View style={styles.container}>
      <Rive
        resourceName={animation}
        fit={Fit.Contain}
        style={{
          zIndex: 999,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryBlackRGBA,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 998,
  },
});

export default PopUpAnimation;
