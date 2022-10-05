import { View, FlatList, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";


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


  viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 0,
    waitForInteraction: false, //setting this false, alone did not work for me
};

  return (
    
    <View>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Contacts</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('AddContact')}

      style={styles.addBtn}>
      <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.addBtn}>
      
    
      </View>
      <View style={styles.listContainer}>
      <FlatList
      extraData={contacts}
      style={styles.list}
      viewabilityConfig={this.viewabilityConfig}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item, index }) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    color: "white",
    marginLeft: "-75%",
    fontSize: 200,

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
    marginTop: 10,
  },
  contactInfo: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 40,
    color: "white",
  },
  headingContainer: {

    backgroundColor: "black",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 25,
    color: "#007AFF",
 },
 list : {
  marginTop: 10,
  marginBottom: 25,
  },
/*   listContainer : {
    marginTop: 20,
  } */
});
