import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import TopRatedScreen from "../screens/TopRatedScreen";
import PopularScreen from "../screens/PopularScreen";
import UpComingScreen from "../screens/UpComingScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Popular"
        component={PopularScreen}
        options={{
          title: "Popular",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-trending-up" />
          )
        }}
      />
      <BottomTab.Screen
        name="TopRated"
        component={TopRatedScreen}
        options={{
          title: "Top Rated",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-thumbs-up" />
          )
        }}
      />
      <BottomTab.Screen
        name="UpComing"
        component={UpComingScreen}
        options={{
          title: "Up Coming",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-calendar" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Latest movies";
    case "Popular":
      return "Most popular movies";
    case "TopRated":
      return "Best rated movies";
    case "UpComing":
      return "Up coming movies";
  }
}
