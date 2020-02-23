import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import TheatresScreen from "../screens/TheatresScreen";
import TopRatedScreen from "../screens/TopRatedScreen";
import PopularScreen from "../screens/PopularScreen";
import UpcomingScreen from "../screens/UpcomingScreen";

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
        name="Theatres"
        component={TheatresScreen}
        options={{
          title: "Theatres",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-tv" />
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
        name="Upcoming"
        component={UpcomingScreen}
        options={{
          title: "Upcoming",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-hourglass" />
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
    case "Theatres":
      return "Movies in Theatres";
    case "Popular":
      return "Most Popular Movies";
    case "TopRated":
      return "Best Rated Movies";
    case "Upcoming":
      return "Upcoming Movies";
  }
}
