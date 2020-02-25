import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const containerRef = React.useRef();

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer ref={containerRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
