import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { useIsFocused } from "@react-navigation/native";

export default CustomerList = ({ navigation }) => {
  const isFocused = useIsFocused();
  const userData = auth.currentUser;
  const [contacts, SetContacts] = useState([]);
  const [search, setSearch] = useState("");

  // make the same function as below but only compare  first letter in name

  const searchThorughContacts = (text) => {
    if (text.lenght < 1) {
      return setSearch(contacts);
    } else {
      const newData = contacts.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData.indexOf(textData) > -1, "itemdata");
        return itemData.indexOf(textData) > -1;
      });
      setSearch(newData);
    }
  };

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss3}>
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Contacts</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddContact")}
          style={styles.addBtn}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.search}
          placeholderTextColor="grey"
          onChangeText={(text) => searchThorughContacts(text)}
          placeholder="Search"></TextInput>
      </View>
      {search ? (
        <View>
          <SafeAreaView style={styles.listContainer}>
            <FlatList
              extraData={search}
              style={styles.list}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.contactList}
              data={search.sort((a, b) => a.name.localeCompare(b.name))}
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
      ) : (
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
      )}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    color: "white",
    marginLeft: "-75%",
    height: 50,
    width: 20,
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
    fontSize: 40,
    color: "#007AFF",
    fontWeight: "200",
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
  search: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    height: 35,
    borderRadius: 5,
    placeholderTextColor: "white",
  },
});
