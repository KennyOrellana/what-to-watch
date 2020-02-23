import React from "react";
import { Image, StyleSheet } from "react-native";
import * as restClient from "../api/restClient";

const MovieListItem = ({ item }) => {
  return (
    <Image source={{ uri: restClient.getPoster(item) }} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1,
    width: 100,
    height: 200,
    margin: 6
  }
});

export default MovieListItem;
