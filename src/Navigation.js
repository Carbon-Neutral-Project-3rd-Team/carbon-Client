import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator} from 'react-native';
//---로그인 스크린 import---
import AuthScreen from './screens/Login/loginForm';
//---스크린 import---
import Root from './router/TabIndex';

import MyCoupon from './screens/Coupon/MyCoupon';
import MyGoal from './screens/Profile/MyGoal';
import GoalSetting from './screens/Profile/GoalSetting';
import AccountSetting from './screens/Profile/AccountSetting';
import MyPage from './screens/Profile/MyPage';
import CSpage from './screens/Profile/CSpage';
import RewardHistory from './screens/Profile/RewardHistory';
import CSwriting from './screens/Profile/CSwriting';
import CSreading from './screens/Profile/CSreading';
import { useAuth } from '../AuthContext';

//--걸음 수 스크린은 일단 따로 표시
import StepScreen from './screens/Home/pedometer';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){

    const { isLoading, loggedInUser } = useAuth();

    if(isLoading){
        return(
            <View style={{flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
        <Stack.Navigator>
            {loggedInUser ? (
                //--로그인이 되었다면 screen 보여주기
            <>
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
              options={{title: '문의 게시판'}}
            />
            <Stack.Screen
            name="CSwriting"
            component={CSwriting}
            options={{title: '문의하기'}}
            />
            <Stack.Screen
            name='CSreading'
            component={CSreading}
            options={{title: '게시물'}}
            />
            <Stack.Screen
            name='pedometer'
            component={StepScreen}
            options={{title:'걸음 수'}}/>
            </>
            ) : (
                //--로그아웃인 상태
                <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{headerShown: false}}
                />
            )}
        </Stack.Navigator>
        </NavigationContainer>  
    );  
}


