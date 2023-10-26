import React from "react";
import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="#fdf6aa"
      source={require("../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>Loading...</Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 150,
    height: 150,
  },
});

export default Loader;
