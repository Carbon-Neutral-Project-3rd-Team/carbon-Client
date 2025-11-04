import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

// 1. 네비게이터 컴포넌트 하나만 import 합니다.
import AppNavigator from './src/Navigation';

// (createNativeStackNavigator 및 모든 스크린 import는 삭제)

export default function App() {
  return (
    <SafeAreaProvider>
        {/* 2. 분리한 네비게이터 컴포넌트를 렌더링합니다. */}
        <AppNavigator />
    </SafeAreaProvider>
  );
}