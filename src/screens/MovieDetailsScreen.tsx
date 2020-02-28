import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import * as restClient from "../api/restClient";

import MovieHero from "../components/MovieHero";
import VideosList from "../components/VideosList";

const MovieDetailsScreen = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  const [movie, setMovie] = useState();

  async function requestData() {
    try {
      const response = await restClient.getData(getUrl(route.params.item));
      setMovie(response.data);
    } catch (error) {
      //TODO handle error
      console.error(error);
    }
  }

  useEffect(() => {
    requestData();
  }, []);

  if (movie) {
    return (
      <View style={styles.container}>
        <MovieHero movie={movie} />
        <VideosList videos={movie.videos.results} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function getUrl(item): String {
  return `movie/${item.id}?append_to_response=videos`;
}

function getHeaderTitle(route) {
  if (route.params.item.title.length > 30) {
    return route.params.item.title.substring(0, 30) + "...";
  } else {
    return route.params.item.title;
  }
}

export default MovieDetailsScreen;
