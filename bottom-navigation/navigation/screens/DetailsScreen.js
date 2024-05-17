import * as React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../AppBar';
import { useEffect } from 'react';

export default function DetailsScreen({ navigation }) {
    //   const navigate = useNavigate();
    useEffect(() => {
        // Change the headerTitle here
        navigation.setOptions({ headerTitle: 'Detail' });
      }, [navigation]);


    return (
        <>
        {/* <AppBar title="Detail" /> */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           
            <Text onPress={() => navigation.push('MainScreen')} >Details Screen</Text>
        </View>
        </>
    )
}