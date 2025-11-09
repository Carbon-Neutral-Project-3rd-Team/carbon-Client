import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './Home/index'; //사용할 스크린들 import
import CouponStack from './Coupon/index';
import ProfileStack from './Profile/index';

import { Ionicons } from '@expo/vector-icons'; //사용할 아이콘들 import
import  AntDesign  from '@expo/vector-icons/AntDesign';
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Root = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="홈"
                component={HomeStack}
                options={{
          // tabBarIcon은 { focused, color, size }를 인자로 받습니다.
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name='home'
              style={{ color: focused ? "#5a9cd0" : "#000" }} 
              size={24} 
            />
          ),
        }}
            />
            <Tab.Screen
                name="쿠폰샵"
                component={CouponStack}
                options={{
          // tabBarIcon은 { focused, color, size }를 인자로 받습니다.
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name='card-multiple'
              style={{ color: focused ? "#5a9cd0" : "#000" }} 
              size={24} 
            />
          ),
        }}
            />
            <Tab.Screen
                name="프로필"
                component={ProfileStack}
                options={{
          // tabBarIcon은 { focused, color, size }를 인자로 받습니다.
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name='profile'
              style={{ color: focused ? "#5a9cd0" : "#000" }} 
              size={24} 
            />
          ),
        }}
            />
        </Tab.Navigator>
    );
}

export default Root;

