import {View, FlatList, Button, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import {customers} from '../customers';

export default CustomerList = ({navigation}) => {
  const [user, setUser] = useState(customers);

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={user}
        renderItem={({item}) => (
          <Text
            onPress={() => navigation.navigate('Details', item)}
            style={styles.contactItem}
          >
            {item.name.first} Phone : {item.phone}
          </Text>
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
    backgroundColor: 'white',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    minHeight: '100%',
  },
  contactItem: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
    minWidth: '100%',
    backgroundColor: '#DBE8D8',
  },
});
