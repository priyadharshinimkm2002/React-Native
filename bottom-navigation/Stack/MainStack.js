import { createNativeStackNavigator, NavigationContainer } from "@react-navigation/native-stack";
import MainScreen from "../navigation/screens/Main";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;