import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
//--로그인 인증 auth사용
import { useAuth } from '../AuthContext';
//---로그인 스크린 import---
import AuthScreen from './screens/Login/loginForm';
//---하단 탭 import--- 기본적인 홈, 쿠폰샵, 프로필 화면 나옵니다.
import Root from './router/TabIndex';
//나머지 필요한 페이지 import--
import FittingRoom from './screens/Home/FittingRoom';
import MyCoupon from './screens/Coupon/MyCoupon';
import MyGoal from './screens/Profile/MyGoal';
import GoalSetting from './screens/Profile/GoalSetting';
//--프로필 스크린 import--
import AccountSetting from './screens/Profile/AccountSetting';
import { Ionicons } from '@expo/vector-icons';
//--시연용 추가 홈 화면--
import ExtraHome from './screens/Home/ExtraHome';


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
                options={{title: '내 쿠폰함',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MyGoal"
                component={MyGoal}
                options={{title: '목표 관리'}}
            />
            <Stack.Screen
                name="GoalSetting"
                component={GoalSetting}
                options={{title: '목표 설정',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AccountSetting"
                component={AccountSetting}
                options={{headerShown:  false}}
            />
            <Stack.Screen
                name="FittingRoom"
                component={FittingRoom}
                options={{headerShown:  false}}
            />
            <Stack.Screen
                name="ExtraHome"
                component={ExtraHome}
                options={{headerShown: false}}
            />
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


