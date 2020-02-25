import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as restClient from "../api/restClient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ASPECT_RATIO = 2 / 3;

const MovieListItem = ({ item }) => {
  const { navigate } = useNavigation();

  function onClick() {
    navigate("MovieDetails");
  }

  if (item === {}) {
    return <View style={styles.container} />;
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onClick} style={styles.touchable}>
          <Image
            source={{ uri: restClient.getPoster(item) }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: ASPECT_RATIO,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 6
  },
  touchable: {
    aspectRatio: ASPECT_RATIO,
    flex: 1
  },
  image: {
    aspectRatio: ASPECT_RATIO,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MovieListItem;
