import React, { useEffect, useState } from "react";
import { View } from "react-native";
import GridView from "../components/GridView";
import * as restClient from "../api/restClient";
import ScreenType from "../constants/ScreenType";
import LoadingProgressBar from "../components/LoadingProgressBar";

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

  if (items && items.length > 0) {
    return (
      <View>
        <GridView items={items} />
      </View>
    );
  } else {
    return <LoadingProgressBar />;
  }
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
