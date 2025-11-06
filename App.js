import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './src/Navigation';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delay_splash(){
  await SplashScreen.preventAutoHideAsync();
  await sleep(3000);
  await SplashScreen.hideAsync();
}

export default function App() {
  delay_splash();
  return (
    <SafeAreaProvider>
        <AppNavigator />
    </SafeAreaProvider>
  );
}