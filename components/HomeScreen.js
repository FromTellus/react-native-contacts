import { View, Text, StyleSheet } from "react-native";
import CustomerList from "./CustomerList";
import RegisterScreen from "./RegisterScreen";
import LoginOrRegisterBtns from "./loginOrRegisterBtns";
import AddContact from "./AddContact";


export default function HomeScreen({ navigation }) {
    return (
      <>
        <View>
          <LoginOrRegisterBtns navigation={navigation}/>
        </View>
      </>
    );
  }


