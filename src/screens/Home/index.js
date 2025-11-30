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

const { width, height } = Dimensions.get('window');

const videoSource = require('../../../assets/HomeVideo.mp4');

export default function HomeScreen() {
  
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
          <TouchableOpacity style={styles.wardrobeButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#333', // 이미지가 로드되기 전 배경색
    backgroundColor: 'transparent',
  },
  // 배경 이미지를 절대 위치로 설정하여 뒤에 깝니다.
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    // zIndex는 필요 없지만, 혹시 가리면 -1 줘보세요. 보통 맨 위에 쓰면 알아서 깔립니다.
  },
  safeArea: {
    flex: 1,
  },
  
  /* 상단 상태바 스타일 */
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20,
    width: '100%',
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 8, // 아이템 사이 간격 (RN 0.71+)
    marginRight: 20,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 반투명 흰색 배경
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 4,
  },
  statusText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  
  /* 옷장 버튼 스타일 */
  wardrobeButton: {
   backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E9D5FF', 
    // marginTop: 40, <-- 삭제함 (배지와 높이 맞춤)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 20,
  },

  /* 중앙 캐릭터 영역 */
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50, // 하단 네비게이션 바 공간 고려해서 조금 위로
  },
  characterImage: {
    width: 250, // 오리 크기 조절
    height: 250,
  },
});