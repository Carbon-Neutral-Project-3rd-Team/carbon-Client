import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView,
} from 'react-native';
import { useEffect } from 'react';
import { startPedometer, usePedometerStore } from '../Home/PedometerLogic';
import styles from '../../styles/HomeScreen/Home';
import { AnimatedCircularProgress } from 'react-native-circular-progress';



const TopCircleDisplay = () =>{

  const steps = usePedometerStore((s) => s.steps);

  const GOAL = 100; //임시 목표 걸음 수 입니다.

  const fillpercent = (steps / GOAL) * 100;

  useEffect(() => {
      startPedometer();
    }, []);

    return(
      <View style={styles.topCircleContainer}>
      <AnimatedCircularProgress
      size={210}
      width={20}
      fill={fillpercent}
      tintColor='#5a9cd0'
      backgroundColor='#fff'
      padding={10}
      rotation={0}
      >
        {
          (fill) => (
            <View style={styles.topCircle}>
              <Text style={styles.CircleInfoTitle}>
                {steps}
                <Text style={styles.CircleValue}>걸음</Text>
              </Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
      </View>
    );
}

export default function MainLayoutScreen({navigation}) {
  return (
    // SafeAreaView를 사용해 노치 및 하단 영역을 피합니다.
    <SafeAreaView style={styles.container}>


        <TopCircleDisplay/> {/* 상단 원형 걸음 수 표시 임시 컴포넌트입니다. */}



      <View style={styles.cardContainer}>

        {/* --- 1. 일일 목표 / 오늘의 포인트 카드 --- */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>일일 목표</Text>
              <Text style={styles.infoValue}>0</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>오늘의 포인트</Text>
              <Text style={styles.infoValue}>0</Text>
            </View>
          </View>
        </View>

        {/* --- 2. 내 쿠폰함 버튼 카드 --- */}
        <TouchableOpacity 
        style={[styles.card, styles.couponButton]}
        onPress={() => {navigation.navigate('MyCoupon')}}>
          <Text style={styles.couponButtonText}>내 쿠폰함</Text>
        </TouchableOpacity>

        {/* --- 3. 활동 카드 --- */}
        <TouchableOpacity 
        onPress={() => {navigation.navigate('MyGoal')}}>
        <View style={styles.card}>
          <Text style={styles.title}>활동</Text>
          <View style={[styles.row, { marginTop: 20 }]}>
            {/* 칼로리 */}
            <View style={styles.activityBox}>
              <Text style={styles.activityTitle}>칼로리</Text>
              <Text style={styles.activityValue}>
                0<Text style={styles.unit}>kcal</Text>
              </Text>
            </View>

            {/* 어제 (구분선 포함) */}
            <View style={[styles.activityBox, styles.verticalDivider]}>
              <Text style={styles.activityTitle}>어제</Text>
              <Text style={styles.activityValue}>0<Text style={styles.unit}>보</Text></Text>
            </View>

            {/* 보유 포인트 (구분선 포함) */}
            <View style={[styles.activityBox, styles.verticalDivider]}>
              <Text style={styles.activityTitle}>보유 포인트</Text>
              <Text style={styles.activityValue}>
                0<Text style={styles.unit}>p</Text>
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

