import { View, Text, StyleSheet } from "react-native";
import CustomerList from "./CustomerList";
import RegisterScreen from "./RegisterScreen";
import LoginOrRegisterBtns from "./loginOrRegisterBtns";
import AddContact from "./AddContact";


export default function HomeScreen({ navigation }) {
    return (
      <>
          <Text style={styles.heading}>Welcome to Super Contacts 3 Deluxe Turbo Edition</Text>
        <View>
          <LoginOrRegisterBtns navigation={navigation}/>
        </View>
      </>
    );
  }


  const styles = StyleSheet.create({

    heading: {
      margin: 10,
      textAlign: "center",
      fontSize: 20,
      color: "white",
    },
  });