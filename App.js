import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from "./screen/Home"
import Detail from "./screen/Details"
import Contact from './screen/Contact';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          activeBackgroundColor: 'green',
          
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "صفحه اصلی",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen 
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: "constac tlist",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "#3498DB"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "bold"}
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: "صفحه اصلی"
        }}
      />
      <Stack.Screen
        name = "Details"
        component = {Detail}
        options={{
          title: "جزئیات"
        }}
      />
    </Stack.Navigator>
  )
}
