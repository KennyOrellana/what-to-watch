import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const VideoListItem = ({ video }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerThumbnail}>
        <Thumbnail
          url={getUrlYouTube(video)}
          imageWidth={screenWidth * 0.45}
          imageHeight={screenWidth * 0.2531}
          containerStyle={styles.thumbnail}
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.textType}>{video.type}</Text>
        <Text style={styles.textTitle}>{video.name}</Text>
      </View>
    </View>
  );
};

function getUrlYouTube(video) {
  return `https://www.youtube.com/watch?v=${video.key}`;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    elevation: 6
  },
  containerThumbnail: {
    flex: 1
  },
  containerInfo: {
    flex: 1,
    marginLeft: 8
  },
  thumbnail: {
    width: 100
  },
  textType: {
    fontWeight: "700",
    fontSize: 15
  },
  textTitle: {
    marginTop: 4
  }
});

export default VideoListItem;
