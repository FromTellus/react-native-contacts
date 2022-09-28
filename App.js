import * as React from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red'
  },
};


function App() {

  return (
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator  initialRouteName="Contacts">
        <Stack.Screen  name="Contacts" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigator: {
    fontSize: 50,
    backgroundColor: "#20232a",
    color: "white"
  },
});



export default App;
