import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './Home/index';
import CouponStack from './Coupon/index';
import ProfileStack from './Profile/index';

const Tab = createBottomTabNavigator();

const Root = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="홈"
                component={HomeStack}
            />
            <Tab.Screen
                name="쿠폰샵"
                component={CouponStack}
            />
            <Tab.Screen
                name="프로필"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
}

export default Root;

