import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../../screens/Home/index';

const Stack = createNativeStackNavigator();
export default function HomeIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}
