import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ModulesScreen from './screens/ModulesScreen';
import AddModuleScreen from './screens/AddModuleScreen';
import UsersScreen from './screens/UsersScreen';
import AddUserScreen from './screens/AddUserScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ModulesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Modules" component={ModulesScreen} options={{ title: 'Module CRUDler' }} />
      <Stack.Screen name="AddModule" component={AddModuleScreen} options={{ title: 'Add Module' }} />
    </Stack.Navigator>
  );
}

function UsersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'User CRUDler' }} />
      <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Add User' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Modules CRUDler">
        <Drawer.Screen name="Modules CRUDler" component={ModulesStack} />
        <Drawer.Screen name="Users CRUDler" component={UsersStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
