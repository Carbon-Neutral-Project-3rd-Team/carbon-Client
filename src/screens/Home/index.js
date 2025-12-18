import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
  StatusBar,
  Dimensions,
  Platform,
  AppState,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useVideoPlayer, VideoView } from 'expo-video';
import { startPedometer, usePedometerStore } from '../Home/PedometerLogic';
import styles from '../../styles/HomeScreen/Home';

const { width, height } = Dimensions.get('window');

const videoSource = require('../../../assets/HomeVideo_final.mp4');

export default function HomeScreen({navigation}) {
  
  // 날씨 멘트 상태 (나중에 API로 연동 가능)
  const [weatherMent, setWeatherMent] = useState("비가 오네");

  const steps = usePedometerStore((s) => s.steps);

  const GOAL = 100; //임시 목표 걸음 수 입니다.

  const fillpercent = parseInt((steps / GOAL) * 100);

  useEffect(() => {
        startPedometer();
      }, []);

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;   // 무한 반복
    player.play();        // 자동 재생
    player.muted = true;  // 소리 끔 (배경음악 없으면 필수)
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      // 앱이 'active' 상태(화면으로 돌아옴)가 되었고, 플레이어가 준비된 상태라면
      if (nextAppState === 'active') {
        player.play(); // 다시 재생!
      }
    });

    // 컴포넌트가 사라질 때 리스너 정리 (메모리 누수 방지)
    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* 1. 배경 GIF (화면 전체 꽉 채우기) */}
      <VideoView
        style={styles.backgroundVideo}
        player={player}
        nativeControls={false} // 재생바 숨기기
        contentFit="cover"     // 화면 꽉 채우기 (resizeMode="cover"와 동일)
      />

      <SafeAreaView style={styles.safeArea}>
        
        {/* 2. 상단 상태바 영역 (걸음수, 포인트, 에너지) */}
        <View style={styles.topBarContainer}>

          {/* 중앙 상태 정보들 */}
          <View style={styles.statusContainer}>
            <View style={styles.statusBadge}>
              <Ionicons name="footsteps" size={14} color="#4ADE80" />
              <Text style={styles.statusText}>{steps}</Text>
            </View>
            <View style={styles.statusBadge}>
              <Ionicons name="trophy" size={14} color="#FACC15" />
              <Text style={styles.statusText}>2</Text>
            </View>
            <View style={styles.statusBadge}>
              <Ionicons name="flash" size={14} color="#60A5FA" />
              <Text style={styles.statusText}>{fillpercent}%</Text>
            </View>
          </View>

          {/* 오른쪽 옷장 버튼 (여기서 위치를 잡아줍니다) */}
          <TouchableOpacity style={styles.wardrobeButton}
          onPress={() => {navigation.navigate("FittingRoom")}}>
             <Ionicons name="shirt-outline" size={24} color="#7C3AED" />
          </TouchableOpacity>
        </View>

        {/* 3. 메인 캐릭터 및 말풍선 영역 */}
        <View style={styles.centerContainer}>
          
        </View> 
      </SafeAreaView>
    </View>
  );
}

