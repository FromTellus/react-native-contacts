import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import Communications from "react-native-communications";

export default function DetailsScreen({ route, navigation }) {
  const { name, location, email, phone, picture } = route.params;
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");

  const dialCall = (contactPhone) => {
    Communications.phonecall(phone, true);
  }
  const sendEmail = () => {
 
    /* Mail: email(to, cc, bcc, subject, body) */
    Communications.email(
      [
        email,
      ],
      null,
      null,
      null,
      null,
    );
  }

  const shareContact = () => {
 
    /* Mail: email(to, cc, bcc, subject, body) */
    Communications.email(
      [
        email,
      ],
      null,
      null,
      "Contact Info for " + name,
      "name " + name + " "
      +
      "email " + email + " "
      + 
      "phone " + phone + " "
      + 
      "picture " + picture,
    );
  }

  const sendSMS = () => {
    Communications.text(phone);
  }
  
  function handleComment() {
    setComment("");
  }

  useEffect(() => {
    setText("");
  }, [comment]);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
        <View style={styles.contact}>
          <View style={styles.contactInformation}>
            <TouchableOpacity>
 {             <Image
                style={styles.contactImage}
                source={{
                  uri: picture,
                  width: 200,
                  height: 200,
                }}
              /> }
            </TouchableOpacity>
            <Text style={styles.contactName}>
             {name}
            </Text>
            <Text style={styles.contactText}>
              {/* {location.country}, {location.city} */}
            </Text>
            <View style={styles.contactSnippetContainer}>
              <TouchableOpacity onPress={() => dialCall()}>
                <Text style={styles.contactPhoneLabel}>mobile</Text>
                <Text style={styles.contactPhone}>{phone}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactSnippetContainer}>
              <TouchableOpacity onPress={() => sendEmail()}>
                <Text style={styles.contactPhone}>{email}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.notesContainer}>
              <TouchableOpacity>
                <Text style={styles.notesHeading}>Notes</Text>

                <View>
                  <TextInput
                    style={styles.TextInput}
                    multiline={true}
                    numberOfLines={4}
                    onSubmitEditing={(newText) => {
                      setComment(newText.nativeEvent.text), setText("");
                    }}
                    value={text}
                    onChangeText={(text) => setText(text)}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.optionsListContainer}>
              <TouchableOpacity 
              onPress={() => sendSMS()}
              style={styles.options}>
                <Text style={styles.optionsText}>Send message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text 
                onPress={() => shareContact()}
                style={styles.optionsText}>Share contact</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.optionsText}>Favorite</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity>
                <Text style={styles.contactPhone}>Add emergency contact</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity>
                <Text style={styles.contactPhone}>Share my location</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.blockContainer}>
              <TouchableOpacity>
                <Text style={styles.block}>Block</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "black",
    fontSize: 50,
    color: "white",
    minHeight: "100%",
    paddingTop: "15%",
  },
  contactName: {
    fontSize: 30,
    color: "white",
    paddingTop: 10,
  },

  contactSnippetContainer: {
    borderRadius: 7,
    minWidth: "100%",
    padding: 5,
    margin: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    opacity: 0.9,
  },
  contactPhone: {
    fontSize: 16,
    color: "#0E7AFE",
    padding: 10,
  },

  contactPhoneLabel: {
    color: "white",
    marginLeft: 10,
    marginBottom: -6,
  },
  notesContainer: {
    borderRadius: 7,
    minWidth: "100%",
    maxHeight: "20%",
    padding: 5,
    margin: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    opacity: 0.9,
  },

  optionsListContainer: {
    borderRadius: 7,
    minWidth: "100%",
    minHeight: "10%",
    padding: 5,
    margin: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    opacity: 0.9,
  },

  optionsContainer: {
    borderRadius: 7,
    minWidth: "100%",
    minHeight: "5%",
    padding: 5,
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
  contactInformation: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 6,
    fontSize: 50,
    color: "white",
    minHeight: "100%",
    margin: 5,
  },
  contactText: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
  contactImage: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  notes: {
    color: "white",
    fontSize: 20,
  },
  options: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderStyle: "solid",
  },

  optionsText: {
    fontSize: 16,
    padding: 10,
    color: "#0E7AFE",
  },
  block : {
  fontSize: 16,
  color: "red",
  padding: 10,
  },
  blockContainer: {
    borderRadius: 7,
    minWidth: "100%",
    minHeight: "5%",
    padding: 5,
    margin: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    opacity: 0.9,
    marginBottom: "35%",
  },
});

