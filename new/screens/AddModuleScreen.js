import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AddModuleScreen({ navigation }) {
  const [moduleName, setModuleName] = useState('');

  const addModule = () => {
    if (moduleName.trim() === '') {
      alert('Please enter a module name');
      return;
    }
    // Pass the new module back to the ModulesScreen
    navigation.navigate('Modules', { newModule: moduleName });
    setModuleName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Module</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Module Name"
        value={moduleName}
        onChangeText={setModuleName}
      />
      <TouchableOpacity style={styles.addButton} onPress={addModule}>
        <Text style={styles.addButtonText}>Add Module</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
