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
        useEffect(() => {
            const fetchData = async () => {
              const url = await getRandomUserPicture();
              setPicture(url);
              console.log(url, "now");
            }
            fetchData();
        }, []);
  
    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  {         <ScrollView>
            <Text>
              Add Contact
            </Text>
            <View style={styles.optionsContainer}>
              <Text style={styles.notesHeading}>Name</Text>
              <TouchableOpacity>
                <TextInput
                style={styles.TextInput}
                  placeholder="Name"

                  onChangeText={(text) => setName(text)}
                ></TextInput>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
            <Text style={styles.notesHeading}>Email</Text>
              <TouchableOpacity>
              <TextInput
                placeholder="Email"
                style={styles.TextInput}
                onChangeText={(text) => setEmail(text)}
              ></TextInput>
            </TouchableOpacity>
          </View>
          
          <View style={styles.optionsContainer}>
          <Text style={styles.notesHeading}>Phone</Text>
              <TouchableOpacity>
                <TextInput
                  placerholder="Phone"
                  style={styles.TextInput}
                  onChangeText={(text) => setPhone(text)}
                ></TextInput>
              </TouchableOpacity>
            </View>
            
            <View style={styles.optionsContainer}>
              
              <TouchableOpacity>
                <Button
                  title="Add contact"
                  onPress={() => addContact()}
                ></Button>
              </TouchableOpacity>
            </View>
          </ScrollView>
  }</TouchableWithoutFeedback>
    );
  }




  const styles = StyleSheet.create({
   
  
    optionsContainer: {
      borderRadius: 7,
      minWidth: "90%",
      minHeight: "5%",
      padding: 10,
      margin: 10,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
      opacity: 0.9,
    },
    TextInput: {
      minWidth: "100%",
      minHeight: "100%",
      color: "white",
    },
  
    notesHeading: {
      color: "white",
      fontSize: 14,
    },
  });
  
  
  
  export default AddContact;
