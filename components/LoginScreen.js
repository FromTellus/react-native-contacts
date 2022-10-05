import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in and navigate to contacts

        const user = userCredential.user;
        console.log("Signed in user: ", user.email);
        navigation.navigate("Contacts");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView>
      <View>
      <Text style={styles.notesHeading} h3>
        Please log in to use "Super Contacts 3 Deluxe Turbo Edition"
      </Text>
        <View style={styles.optionsContainer}>
          <Text style={styles.notesHeading}>Email</Text>
          <TouchableOpacity>
            <TextInput
            style={{color: "white", fontWeight: "bold"}}
              type="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={signIn}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.notesHeading}>Password</Text>
          <TouchableOpacity>
            <TextInput
              secureTextEntry
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              onSubmitEditing={signIn}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Login" onPress={signIn} />
    </KeyboardAvoidingView>
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

export default LoginScreen;
