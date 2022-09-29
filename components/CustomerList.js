import { View, FlatList, Button, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useIsFocused } from "@react-navigation/native";


export default CustomerList = ({ navigation }) => {
  const isFocused = useIsFocused();
  const userData = auth.currentUser;
  const contacts = [];


  useEffect(() => {
    const getContacts = async () => {
      const q = query(collection(db, "users", userData.email, "contacts"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        contacts.push(doc.data());

      });
    }; 
  
    getContacts();
  }, [isFocused]);
  return (
    <View>
      <Text style={styles.heading}>Contacts</Text>
      
      <View style={styles.addBtn}>
      <Button  style={styles.addBtn}
        raised
        onPress={() => navigation.navigate('HomeScreen')}
        title="HomeScreen"
      />
      
      <Button  style={styles.addBtn}
        raised
        onPress={() => navigation.navigate('AddContact')}
        title="Add Contact"
      />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text
              onPress={() => navigation.navigate("Details", item)}
              style={styles.contactInfo}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    color: "white",
    marginLeft: "-75%",
  },
  contactList: {
    justifyContent: "center",
    alignItems: "left",
    marginTop: "-25%",
    paddingVertical: 10,
    backgroundColor: "black",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    minHeight: "100%",
  },
  contactItem: {
    color: "white",
    minWidth: "100%",
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderStyle: "solid",
    borderRadius: 0.5,
  },
  contactInfo: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 50,
    color: "white",
  },
});
