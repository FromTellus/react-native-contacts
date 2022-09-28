import {View, Image, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function DetailsScreen({ route, navigation }) {
    const { name, location, email, phone, picture } = route.params;
    const [comment, setComment] = useState("");
  
    return (
      <>
        <View style={styles.contact}>
          <View style={styles.contactInformation}>
            <Image
              source={{
                uri: picture.large,
                width: 200,
                height: 200,
              }}
            />
            <Text>
              Personalia : {name.title} {name.first} {name.last}
            </Text>
            <Text>Phone number: {phone}</Text>
            <Text>Email address : {email}</Text>
            <Text>
              Located in : {location.country}, {location.city}
            </Text>
            <Text>Comments : {comment} </Text>
          </View>
  
          <View>
            <Text>Write your comment</Text>
            <TextInput
              style={{ backgroundColor: "lightgray" }}
              placeholder="Type your comment here ..."
              multiline={true}
              numberOfLines={4}
              onSubmitEditing={2}
            />
          </View>
          <Button title="Submit comment"></Button>
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    contact: {
      alignItems: "center",
      padding: 10,
      borderColor: "black",
      borderRadius: 6,
      backgroundColor: "#DBE8D8",
      fontSize: 50,
      color: "white",
      minHeight: "100%",
    },
    contactInformation: {
        alignItems: "center",
        padding: 10,
        borderColor: "black",
        borderRadius: 6,
        fontSize: 50,
        color: "white",
        minHeight: "100%",
      },
  });