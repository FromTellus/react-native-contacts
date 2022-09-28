import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";



const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },

  contactList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    minHeight: "100%",
  },
  contact: {
    padding: 10,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "#61dafb",

    fontSize: 50,
    color: "white",
    minHeight: "100%",
  },
});

export default App;
