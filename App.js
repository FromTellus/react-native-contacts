import * as React from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";
import { StyleSheet } from "react-native";
import AddContact from "./components/AddContact";
import CustomerList from "./components/CustomerList";

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
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen  name="Register" component={RegisterScreen} />
      <Stack.Screen  name="AddContact" component={AddContact} />
      <Stack.Screen  name="HomeScreen" component={HomeScreen} />

      <Stack.Screen  name="LogIn" component={LoginScreen} />
        <Stack.Screen  name="Contacts" component={CustomerList} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigator: {
    fontSize: 50,
    backgroundColor: "#20232a",
    color: "black"
  },
});



export default App;
