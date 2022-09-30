import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Created user: ", user);
        navigation.navigate("Contacts");

        const user = userCredential.user; // signs in freshly registered user??
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <View>
      <StatusBar />
      <Text style={styles.notesHeading} h3>
        Create a "Super Contacts 3 Deluxe Turbo Edition" account
      </Text>
      <View style={styles.optionsContainer}>
        <Text style={styles.notesHeading}>Email</Text>
        <TouchableOpacity>
          <TextInput
            style={{ color: "white", fontWeight: "bold" }}
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.notesHeading}>Password</Text>
        <TouchableOpacity>
          <TextInput
            placeholder="Password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={register}
          />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white" }}></View>

      <View style={{ height: 100 }} />
    </View>
  );
};
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

export default RegisterScreen;
