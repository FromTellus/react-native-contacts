import React from "react";
import { useState } from "react";
import { View,TextInput, StyleSheet, StatusBar, Text, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const RegisterScreen = ({ navigation }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Created user: ", user);
	navigation.navigate('Contacts');
   
    const user  = userCredential.user; // signs in freshly registered user?? 

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })};
  return ( 
<View >
      <StatusBar />
      <Text h3>
        Create a Signal account
      </Text>
      <View style={{ backgroundColor: "white" }} >
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={register}
        />
      </View>

      <View style={{ height: 100 }} />
    </View>
    
  );
};




export default RegisterScreen;
