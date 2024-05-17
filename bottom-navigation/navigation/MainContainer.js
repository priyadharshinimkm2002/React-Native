import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MainScreen from "./screens/Main";
import AppBar from "./AppBar";
import { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{ headerTitle: 'HomeScreen' }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator>
    <DetailsStack.Screen
      name="DetailsStack"
      component={DetailsScreen}
      options={{ headerTitle: 'DetailsScreen' }}
    />
  </DetailsStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="SettingsStack"
      component={SettingsScreen}
      options={{ headerTitle: 'SettingsScreen' }}
    />
  </SettingsStack.Navigator>
);


export const MainContainer = ({ navigation }) => {

  // useEffect(() => {
  //   // Change the headerTitle here
  //   navigation.setOptions({ headerTitle: 'Updated Title' });
  // }, [navigation]);


  return (
    <>


      {/* <NavigationContainer> */}

      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === 'DetailsScreen') {
              iconName = focused ? 'list' : 'list-outline'
            }
            else if (rn === 'SettingsScreen') {
              iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarLabel: getTabBarLabel(route),
          tabBarOnPress: ({ navigation, route }) => {
            const tabName = getTabBarLabel(route);
            navigation.navigate('Main', { tabName: tabName });
          },
        })}>
        {/* o */}

        <Tab.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="DetailsScreen"
          component={DetailsStackScreen}
          options={{ tabBarLabel: 'Details' }} 
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsStackScreen}
          options={{ tabBarLabel: 'Settings' }}
        />

        {/* <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name='DetailsScreen' component={DetailsScreen} options={{ tabBarLabel: 'Detail' }} />
        <Tab.Screen name='SettingsScreen' component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} /> */}

      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}
const getTabBarLabel = (route) => {
  const routeName = route.name;
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'DetailsScreen':
      return 'Details';
    case 'SettingsScreen':
      return 'Settings';

  }
};