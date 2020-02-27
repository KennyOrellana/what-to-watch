import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as imagesUtils from "../api/imagesUtils";
import { Ionicons } from "@expo/vector-icons";
import * as restClient from "../api/restClient";
import * as timeUtils from "../utils/timeUtils";

const MovieDetailsScreen = ({ route }) => {
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
        <View style={styles.containerHero}>
          <Image
            source={{ uri: imagesUtils.getBackdrop(movie) }}
            style={styles.imageBackdrop}
          />

          <Text numberOfLines={1} style={styles.textTitle}>
            {movie.title}
          </Text>
          <View style={styles.containerPoster}>
            <Image
              source={{ uri: imagesUtils.getPoster(movie) }}
              style={styles.imagePoster}
            />
            <View style={styles.containerIcon}>
              <Ionicons name={"ios-timer"} size={30} style={styles.icon} />
              <Text style={styles.textStats}>
                {timeUtils.timeConvert(movie.runtime)}
              </Text>
            </View>

            <View style={styles.containerIcon}>
              <Ionicons
                name={"ios-star-outline"}
                size={30}
                style={styles.icon}
              />
              <Text style={styles.textStats}>{`${movie.vote_average}/10`}</Text>
            </View>
            <View style={styles.containerIcon}>
              <Ionicons name={"ios-calendar"} size={30} style={styles.icon} />
              <Text style={styles.textStats}>{movie.release_date}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.textOverview}>{movie.overview}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  containerHero: {
    backgroundColor: "white",
    paddingBottom: 120
  },
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  containerPoster: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    top: "56%",
    paddingHorizontal: "2%",
    position: "absolute",
    width: "100%"
  },
  containerData: {
    flexDirection: "row",
    alignContent: "center",
    flex: 1
  },
  containerIcon: {
    flex: 2,
    flexDirection: "column",
    textAlign: "center",
    marginTop: "20%",
    height: "12%",
    alignItems: "center"
  },
  imageBackdrop: {
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center"
  },
  imagePoster: {
    aspectRatio: 2 / 3,
    flex: 3,
    borderColor: "white",
    borderWidth: 4
  },
  textTitle: {
    fontSize: 20,
    width: "64.5%",
    alignSelf: "flex-end",
    marginTop: "-15%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#00000080",
    color: "white"
  },
  textOverview: {
    fontSize: 14,
    backgroundColor: "white",
    marginTop: 2,
    paddingTop: 8,
    padding: 16,
    textAlign: "justify"
  },
  textStats: {
    fontSize: 14,
    fontWeight: "300"
  },
  icon: {
    flex: 2
  }
});

function getUrl(item): String {
  return `movie/${item.id}`;
}

export default MovieDetailsScreen;
