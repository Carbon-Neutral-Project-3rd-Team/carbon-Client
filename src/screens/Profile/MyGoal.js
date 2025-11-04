import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/ProfileScreen/MyGoal';

const CALORIE_KEY = '@my_calorie_goal';
const STEP_KEY = '@my_step_goal';

// --- 1. 메인 통계 카드 ---
const StatsCard = () => {
    const navigation = useNavigation();

    const [currentCalorieGoal, setCurrentCalorieGoal] = React.useState('...');
    const [currentStepGoal, setCurrentStepGoal] = React.useState('...');

    // 화면이 포커스 될 때마다 목표를 불러옴

    useFocusEffect(
      useCallback(() => {
        loadGoals();
      }, [])
    );

    const loadGoals = async () => {
      try {
        const savedCalorieGoal = await AsyncStorage.getItem(CALORIE_KEY);
        const savedStepGoal = await AsyncStorage.getItem(STEP_KEY);

        if (savedCalorieGoal !== null) {
          setCurrentCalorieGoal(savedCalorieGoal);
        }else{
          setCurrentCalorieGoal('0'); // 기본값 설정
        }
        if (savedStepGoal !== null) {
          setCurrentStepGoal(savedStepGoal);
        }else{
          setCurrentStepGoal('0'); // 기본값 설정
        }

      } catch (e) {
        console.error('Failed to load goals.', e);
      }
    };



  return (
    <View style={styles.card}>
      <TouchableOpacity 
      style={styles.nameRow}
      onPress={() => {navigation.navigate('GoalSetting')}}>
        <Text style={styles.nameText}>김인하</Text>
        {/* 화살표 아이콘 대신 간단한 텍스트로 대체 */}
        <Text style={styles.arrowIcon}>&#62;</Text>
      </TouchableOpacity>
      <View style={styles.statsRow}>
        {/* 일일 목표 칼로리 */}
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>일일 목표 칼로리</Text>
          <Text style={styles.statValue}>{currentCalorieGoal}<Text style={styles.unitText}>kcal</Text></Text>
        </View>
        {/* 구분선 */}
        <View style={styles.divider} />
        {/* 일일 목표 걸음 수 */}
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>일일 목표 걸음 수</Text>
          <Text style={styles.statValue}>{currentStepGoal}<Text style={styles.unitText}>보</Text></Text>
        </View>
        {/* 구분선 */}
        <View style={styles.divider} />
        {/* 보유 포인트 */}
        <View style={styles.statItem}>
          <Text style={[styles.statLabel, styles.blueText]}>보유 포인트</Text>
          <Text style={[styles.statValue, styles.blueText]}>523<Text style={[styles.unitText, styles.blueText]}>p</Text></Text>
        </View>
      </View>
    </View>
  );
};

// --- 2. 역대 최고 기록 카드 ---
const BestRecordCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.recordTitle}>역대 최고 기록</Text>
      <Text style={styles.recordValue}>34,500<Text style={styles.recordUnit}>보</Text></Text>
    </View>
  );
};

// --- 3. 이번 달 누적 걸음 카드 ---
const MonthlyRecordCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.recordTitle}>이번 달 누적 걸음</Text>
      <Text style={styles.recordValue}>12,045<Text style={styles.recordUnit}>보</Text></Text>
    </View>
  );
};

// --- 메인 화면 컴포넌트 ---
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
    
      {/* 카드들이 포함될 컨테이너 (스크롤 없음) */}
      <View style={styles.container}>
        <StatsCard />
        <BestRecordCard />
        <MonthlyRecordCard />
      </View>
    </SafeAreaView>
  );
}

// --- 스타일시트 ---
