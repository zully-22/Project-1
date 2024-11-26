import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ModulesScreen({ navigation, route }) {
  const [modules, setModules] = useState([
    'Indvidual Project (cl6600_ALL_TY13_24)',
    'Mobile Application Development (Cl6330_A_TY13_24)',
    'Advanced Data Modelling (Cl6320_ALL_TY13_24)',
  ]);

  // Listen for new modules from AddModuleScreen
  useEffect(() => {
    if (route.params?.newModule) {
      setModules((prevModules) => [...prevModules, route.params.newModule]);
    }
  }, [route.params?.newModule]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Modules</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddModule')}>
        <Text style={styles.addButtonText}>+ Add Module</Text>
      </TouchableOpacity>
      <FlatList
        data={modules}
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
