import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { useEffect, useState } from "react";
  import {db} from "../firebase";
  import {auth} from "../firebase";
  import {doc, setDoc} from "firebase/firestore";

  
  
  function AddContact ({ route, navigation }) {
    const user = auth.currentUser;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone,setPhone] = useState();
    const data = {
        name: name,
        email: email,
        phone: phone,
        picture: "https://randomuser.me/api/portraits/men/34.jpg",
    }

     async function addContact() {
        try {
            await setDoc(doc(db, "users", user.email, "contacts", name), data);
            console.log("Document written with ID: ", user.email);
            navigation.navigate('Contacts');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        } 

  
    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  {         <ScrollView style={styles.contact}>
        <Text style={styles.heading}>
                Add Contact
              </Text>
          
              <TouchableOpacity>

                <TextInput
                placeholder="Name"
                style={styles.TextInput}
                onChangeText={(text) => setName(text)}
                ></TextInput>
                <TextInput
                placeholder="Email"
                style={styles.TextInput}
                onChangeText={(text) => setEmail(text)}
                ></TextInput>
                <TextInput
                placerholder="Phone"
                style={styles.TextInput}
                onChangeText={(text) => setPhone(text)}
                ></TextInput>
                <Button
                title="Add contact"
                onPress={() => addContact()}
                ></Button>

              </TouchableOpacity>
      
              
          </ScrollView>}
        </TouchableWithoutFeedback>
     </>
    );
  }


  const styles = StyleSheet.create({
    heading: {
        color: "white",
        backgroundColor: "black",
    },
    TextInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: "black",
        backgroundColor: "white",
        },
   
    contact: {
      backgroundColor: "black",
    },
    contactName: {
        backgroundColor: "white",
    },

    contactInformation: {
        backgroundColor: "white",
    },

  });
  
  export default AddContact;
