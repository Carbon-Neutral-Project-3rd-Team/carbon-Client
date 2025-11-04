import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Root from './router/TabIndex';

import MyCoupon from './screens/Coupon/MyCoupon';
import MyGoal from './screens/Profile/MyGoal';
import GoalSetting from './screens/Profile/GoalSetting';
import AccountSetting from './screens/Profile/AccountSetting';
import MyPage from './screens/Profile/MyPage';
import CSpage from './screens/Profile/CSpage';
import RewardHistory from './screens/Profile/RewardHistory';

const Stack = createNativeStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="이전"
                component={Root}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MyCoupon"
                component={MyCoupon}
                options={{title: '내 쿠폰함'}}
            />
            <Stack.Screen
                name="MyGoal"
                component={MyGoal}
                options={{title: '목표 관리'}}
            />
            <Stack.Screen
                name="GoalSetting"
                component={GoalSetting}
                options={{title: '목표 설정'}}
            />
            <Stack.Screen
                name="AccountSetting"
                component={AccountSetting}
                options={{title: '아이디 및 비밀번호 관리'}}
            />
            <Stack.Screen
              name="MyPage"
              component={MyPage}
              options={{title: '나의 기록'}}
            />
            <Stack.Screen
              name="RewardHistory"
              component={RewardHistory}
              options={{title: '리워드 히스토리'}}
            />
            <Stack.Screen
              name="CSpage"
              component={CSpage}
              options={{title: '고객 지원'}}
            />
        </Stack.Navigator>
        </NavigationContainer>  
    );  
}


