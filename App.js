import * as React from "react";
import { View, Text, Button, StyleSheet, FlatList,TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useState,useEffect(() => {
  first

  return () => {
    second
  }
}, [third])
}

import { customers } from "./customers";


function HomeScreen({ navigation }) {
  return (
    <>

      <View>
        <CustomerList navigation={navigation} />
      </View>
    </>
  );
}



function DetailsScreen({ route, navigation }) {
  const { gender, name, location, email, phone,picture } = route.params;
  

  return (
    <>

      <View style={styles.contactList}>
        <View>
          <Image
        source={{
          uri: picture.large, width:200,height:200
        }}
      />
          <Text>Personalia : {name.title} {name.first} {name.last}</Text>
          <Text>Email address :{email}</Text>
          <Text>Located in : {location.country} {location.city}</Text>
        
        </View>

        <View>
          <Text>Write your comment</Text>
          <TextInput
            style={{backgroundColor:'lightgray'}}
            placeholder="blah"
            multiline={true}
            numberOfLines={4}
          />
         </View>
        
      </View>
    </>
  );
}
const CustomerList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={customers}
        renderItem={({ item }) => (
          <Button
            title={item.name.first}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      />
    </View>
  );
};

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
  title: {
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
  },
  contact: {
    padding: 10,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "#61dafb",

    fontSize: 50,
    color: "white",
  },
});

export default App;
