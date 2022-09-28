import {View, FlatList, Button, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import {customers} from '../customers';

export default CustomerList = ({navigation}) => {
  const [user, setUser] = useState(customers);

  return (
    <View>
      <Text style={styles.heading}>Contacts</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={user.sort((a, b) => a.name.first.localeCompare(b.name.first))}
        renderItem={({item}) => (
          <View style={styles.contactItem}>
          <Text
            onPress={() => navigation.navigate('Details', item)}
            style={styles.contactInfo}
          >
            {item.name.first}
          </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactList: {
    justifyContent: 'center',
    alignItems: 'left',
    marginTop: 0,
    paddingVertical: 10,
    backgroundColor: 'black',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    minHeight: '100%',
  },
  contactItem: {

    color: "white",
    minWidth: '100%',
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 0.5,
    
  },
  contactInfo: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    color:"white",
  },
  heading : {
    fontSize: 50,
    color: "white",
  }
});
