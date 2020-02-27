import React, { useEffect, useState } from "react";
import { View } from "react-native";
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
    if (res.results.length % 3 === 1) {
      setItems([...res.results, {}, {}]);
    } else if (res.results.length % 3 === 2) {
      setItems([...res.results, {}]);
    } else {
      setItems(res.results);
    }
  }

  useEffect(() => {
    requestData();
  }, []);

  return (
    <View>
      <GridView items={items} />
    </View>
  );
}

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
