import {View, FlatList, Button, StyleSheet} from 'react-native';
import { useState } from 'react';
import { customers } from '../customers';

export default CustomerList = ({ navigation }) => {
    const [user, setUser] = useState(customers);
  
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contactList}
          data={user}
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