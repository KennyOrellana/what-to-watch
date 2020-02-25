import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MovieListItem from "./MovieListItem";

const COLUMNS = 3;

const renderItem = ({ item }) => {
  return <MovieListItem item={item} />;
};

const GridView = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      numColumns={COLUMNS}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatList} //workaround for paddingBottom
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 6,
    paddingBottom: 18
  }
});
export default GridView;
