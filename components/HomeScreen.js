import { View } from "react-native";
import CustomerList from "./CustomerList";

export default function HomeScreen({ navigation }) {
    return (
      <>
        <View>
          <CustomerList navigation={navigation} />
        </View>
      </>
    );
  }
