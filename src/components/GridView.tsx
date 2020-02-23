import React from "react";
import { FlatList } from "react-native";
import MovieListItem from "./MovieListItem";

const renderItem = ({ item }) => {
  return <MovieListItem item={item} />;
};

const GridView = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id}
    />
  );
};

export default GridView;
