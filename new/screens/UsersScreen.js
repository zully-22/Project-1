import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function UsersScreen({ navigation, route }) {
  const [users, setUsers] = useState([
    'Graeme Jones (Staff)',
    'Paul Knave (Staff)',
    'Justin TWUMASI (Student)',
    'Faris AHMED (Student)',
    'Tobi OLU (Student)',
    'Artur WAGNER',
    'Luke STEVENS (Student)',
    'Hashim ABDULLAH (Student)',
    'Zully Abbas (Student)'
  ]);

  useEffect(() => {
    if (route.params?.newUser) {
      setUsers((prevUsers) => [...prevUsers, route.params.newUser]);
    }
  }, [route.params?.newUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Users</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddUser')}>
        <Text style={styles.addButtonText}>+ Add User</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
