import * as React from 'react';
import { View,Text } from 'react-native';
import { useEffect } from 'react';

export default function SettingsScreen({navigation}){

    useEffect(() => {
        // Change the headerTitle here
        navigation.setOptions({ headerTitle: 'Settings ' });
      }, [navigation]);

    return(
        <View style={{ flex:1, alignItems:"center" , justifyContent:"center"}}>
            <Text>Settings Screen</Text>

        </View>
    )
}