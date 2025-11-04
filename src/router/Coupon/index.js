import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import React from 'react';

import Coupon from '../../screens/Coupon/index';

const Stack = createNativeStackNavigator();
export default function CouponIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Coupon"
                component={Coupon}
            />
        </Stack.Navigator>
    );
}