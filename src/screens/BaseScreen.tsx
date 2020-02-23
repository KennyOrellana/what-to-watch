import React, { useEffect, useState, ReactComponentElement } from "react";
import { View, StyleSheet } from "react-native";
import GridView from "../components/GridView";
import * as restClient from "../api/restClient";
import ScreenType from "../constants/ScreenType";

export default function BaseScreen({ screenType }) {
  const [items, setItems] = useState([]);

  async function requestData() {
    try {
      console.log(`BaseScreen ${getUrl(screenType)}`);

      const response = await restClient.getData(getUrl(screenType));
      console.log("getData");

      setData(response.data);
    } catch (error) {
      //TODO handle error
      console.error(error);
    }
  }

  function setData(res) {
    setItems(res.results);
  }

  useEffect(() => {
    requestData();
  }, []);

  return (
    <View style={styles.container}>
      <GridView items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222"
  }
});

function getUrl(screen: ScreenType): String {
  switch (screen) {
    case ScreenType.THEATRES:
      return "movie/now_playing";
    case ScreenType.POPULAR:
      return "movie/popular";
    case ScreenType.UP_COMING:
      return "movie/upcoming";
    case ScreenType.TOP_RATED:
      return "movie/top_rated";
    default:
      return "movie/latest";
  }
}

// export { HomeScreen, ScreenType };
