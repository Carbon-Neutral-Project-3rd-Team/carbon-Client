import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Profile from '../../screens/Profile/index';

const Stack = createNativeStackNavigator();
export default function ProfileIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    );
}