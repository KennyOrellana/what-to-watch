import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import VideoListItem from "./VideoListItem";

const renderItem = ({ item }) => {
  return <VideoListItem video={item} />;
};

//TODO handle empty video list
const VideosList = ({ videos }) => {
  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatList} //workaround for paddingBottom
    />
  );
};

export default VideosList;

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 4,
    paddingBottom: 8
  }
});
