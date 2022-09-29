import { auth } from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
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
		navigation.navigate('Contacts');
		
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
        <Text style={{ color: "white" }}>Hello</Text>
        <TextInput
          style={{ backgroundColor: "white", color: "black" }}
          placeholder="Email"
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={signIn}
        />
        <TextInput
          style={{ backgroundColor: "white" }}
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button title="Login" onPress={signIn} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
