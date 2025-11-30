import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { startPedometer, usePedometerStore } from '../Home/PedometerLogic';
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
      size={100}
      width={10}
      fill={fillpercent}
      tintColor='#5a9cd0'
      backgroundColor='#fff'
      
      rotation={0}
      >
        {
          (fill) => (
            <View style={styles.topCircle}>
              <Text style={styles.CircleInfoTitle}>
                {steps}
                <Text style={styles.CircleValue}>보</Text>
              </Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
      </View>
    );
}

const App = () => {
  const [status, setStatus] = useState('좋음'); // 상태 관리

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. 상단 이미지 영역 (화면의 약 55~60% 차지) */}
      <ImageBackground source={require('../../../assets/induk2.png')} style={styles.topSection} resizeMode="cover">

      </ImageBackground>

      {/* 2. 중단 상태 표시줄 (구분선 역할) */}
      <View style={styles.statusBar}>
        <Ionicons name="happy-outline" size={24} color="#333" />
        <Text style={styles.statusText}>인덕이의 상태 : {status}</Text>
      </View>

      {/* 3. 하단 정보 영역 (흰색 배경, 나머지 공간 차지) */}
      <View style={styles.bottomSection}>
        
        <View style={styles.statsRow}>
          {/* 왼쪽: 오늘 걸음 수 */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>오늘 걸음 수</Text>
            <TopCircleDisplay/>
          </View>

          {/* 오른쪽: 내 포인트 */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>내 포인트</Text>
            <Text style={styles.statValue}>5,240</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // --- 1. 상단 이미지 영역 스타일 ---
  topSection: {
    flex: 1.3, // 비율을 높여서 이미지가 화면을 더 많이 차지하게 함
    width: '100%',
  },
  safeArea: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  // --- 2. 중단 상태 바 스타일 ---
  statusBar: {
    height: 70, // 고정 높이
    backgroundColor: '#fff',
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center',
    justifyContent: 'center', // 세로 중앙 정렬
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0', // 연한 구분선
    // 그림자 효과 (이미지 위로 살짝 떠있는 느낌)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // 위쪽으로 그림자
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 1,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },

      topCircleContainer: {
        paddingVertical: 40,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 10,
    },
    topCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
  },
  CircleInfoTitle: {
    fontSize: 25,
    color: '#4caf50',
    fontWeight: 'bold',
    },
    CircleValue:{
      fontSize: 20,
      color: '#666',
    },

  // --- 3. 하단 정보 영역 스타일 ---
  bottomSection: {
    flex: 0.7, // 하단 공간 비율 (상단보다 작게)
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // 위쪽부터 내용 채움
    paddingTop: 40, // 상태바와의 간격
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // 좌우 균등 배분
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center', // 텍스트 중앙 정렬
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 32, // 숫자 크게
    fontWeight: 'bold',
    color: '#4CAF50', // 초록색 포인트 컬러
  },
});

export default App;