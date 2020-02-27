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
      console.log(response.data);

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

          <View style={styles.containerPoster}>
            <View style={styles.containerIcon}>
              <Ionicons name={"ios-timer"} size={30} style={styles.icon} />
              <Text style={styles.textStats}>
                {timeUtils.timeConvert(movie.runtime)}
              </Text>
            </View>
            <Image
              source={{ uri: imagesUtils.getPoster(movie) }}
              style={styles.imagePoster}
            />
            <View style={styles.containerIcon}>
              <Ionicons
                name={"ios-star-outline"}
                size={30}
                style={styles.icon}
              />
              <Text style={styles.textStats}>{`${movie.vote_average}/10`}</Text>
            </View>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {movie.title}
          </Text>
        </View>

        <View style={styles.containerDescription}></View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  containerHero: {
    backgroundColor: "white",
    paddingBottom: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 6
  },
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  containerPoster: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    top: "-25%",
    paddingHorizontal: "2%"
  },
  containerData: {
    flexDirection: "row",
    alignContent: "center",
    flex: 1
  },
  containerIcon: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    marginTop: "15%",
    height: "20%",
    alignItems: "center"
  },
  imageBackdrop: {
    aspectRatio: 16 / 9,
    justifyContent: "center",
    alignItems: "center"
  },
  imagePoster: {
    aspectRatio: 2 / 3,
    flex: 1,
    borderColor: "white",
    borderWidth: 4
  },
  textTitle: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: "-25%",
    textAlign: "center",
    marginHorizontal: 8
  },
  textStats: {
    fontSize: 18,
    fontWeight: "300"
  },
  icon: {
    flex: 1
  },
  containerDescription: {
    marginVertical: 10
  }
});

function getUrl(item): String {
  return `movie/${item.id}`;
}

export default MovieDetailsScreen;
