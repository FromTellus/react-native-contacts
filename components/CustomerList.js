import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { useIsFocused} from "@react-navigation/native";

export default CustomerList = ({ navigation }) => {
  const isFocused = useIsFocused();
  const userData = auth.currentUser;
  const [contacts, SetContacts] = useState([]);
  console.log(contacts);

  useEffect(() => {
    const getContacts = async () => {
      const q = query(collection(db, "users", userData.email, "contacts"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          if (contacts.some((contact) => contact.email === doc.data().email)) {
              return;
          } else {
              SetContacts((contacts) => [...contacts, doc.data()]);
          }
      });
    };
    getContacts();
  }, [isFocused]);

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Contacts</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddContact")}
          style={styles.addBtn}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addBtn}></View>
      <View>
        <SafeAreaView style={styles.listContainer}>
          <FlatList
            extraData={contacts}
            style={styles.list}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contactList}
            data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({ item, index }) => (
              <View style={styles.contactItem}>
                <Text
                  onPress={() => navigation.navigate("Details", item)}
                  style={styles.contactInfo}>
                  {item.name}
                </Text>
              </View>
            )}
          />
          <View>
            <Text style={styles.footer}>
              You have {contacts.length} contacts
            </Text>
          </View>
        </SafeAreaView>
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
  list: {
    paddingTop: 100,
  },
  listContainer: {
    minHeight: 600,
    flex: 1,
  },
  footer: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});
