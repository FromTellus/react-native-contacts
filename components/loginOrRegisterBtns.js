import React from "react";
import { useState } from "react";
import { View,TextInput, StyleSheet, StatusBar, Text, Button } from "react-native";
import { getAuth } from "firebase/auth";


const LoginOrRegisterBtns = ({ navigation }) => {


  return ( 
<View >
      <StatusBar />
      <Button
        raised
        onPress={() => navigation.navigate('LogIn')}
        // onPress={logIn}
        title="Log In"
      />
      <Button
        raised
        onPress={() => navigation.navigate('Register')}
        // onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </View>
    
  );
};




export default LoginOrRegisterBtns;

    
    
