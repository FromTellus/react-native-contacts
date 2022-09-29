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

  const getRandomUserPicture = async () => {
    let response = await fetch(
        "https://randomuser.me/api/"
    );
    let json = await response.json();
    return json.results[0].picture.large;
  }
/* console.log( await getRandomUserPicture(), "this is random user picture");
 */
  
  
  function AddContact ({ route, navigation }) {
    getRandomUserPicture();
    const user = auth.currentUser;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone,setPhone] = useState();
    const [picture, setPicture] = useState();

    const data = {
        name: name,
        email: email,
        phone: phone,
        picture: picture,
    }

     async function addContact() {
        try {
            const url = await getRandomUserPicture();
            setPicture(url);
            console.log(url, "now1");
            await setDoc(doc(db, "users", user.email, "contacts", name), data);
            console.log("Document written with ID: ", user.email);
            navigation.navigate('Contacts');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        } 
        useEffect(async () => {
            const url = await getRandomUserPicture();
            setPicture(url);
        }, []);
  
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
