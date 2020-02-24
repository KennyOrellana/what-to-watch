import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieDetailsScreen = ({ movie }) => {
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({});
