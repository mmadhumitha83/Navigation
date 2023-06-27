// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';  // This for icon 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Bottom Navigation 
import Profile from "./profile";
import Home from "./Home";
import Exit from "./Exit";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Profile"
        component={Profile}/>
    </Stack.Navigator>
  );
}

function ExitStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Exit"
          component={Exit} />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            if (route.name === 'ExitStack') {
              iconName = focused
                ? 'close-circle'
                : 'closecircle-outline';
            } 

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack} // Compent is nothing but a function 
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            title: 'Setting'
          }} />
        <Tab.Screen
          name="ExitStack"
          component={ExitStack}
          options={{
            title: 'Exit'
          }} />

          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;