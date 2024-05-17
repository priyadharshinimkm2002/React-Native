import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainContainer } from './navigation/MainContainer';
import MainScreen from './navigation/screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
// import {MainStack} from './Stack/MainStack'


const getTabName = (route) => {
  const routeName = route.state && route.state.routes[route.state.index].name ;

  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'DetailsScreen':
      return 'Details';
    case 'SettingsScreen':
      return 'Settings';
  
  }
};

export default function App() {

 // console.log(navigation );
//  options={{headerShown:true}}
   
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainContainer} options={{headerShown:false}}
          />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

