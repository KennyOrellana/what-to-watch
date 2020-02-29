import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

const LoadingProgressBar = () => {
  return (
    <View style={styles.containerLoading}>
      <Progress.Bar indeterminate={true} width={200} />
    </View>
  );
};

export default LoadingProgressBar;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
