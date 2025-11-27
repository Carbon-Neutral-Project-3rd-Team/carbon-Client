import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/ProfileScreen/MainProfile';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Expo가 아니면 react-native-vector-icons 사용
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {

  const googleFormUrl = "https://www.google.com";

  const openUrl = async () => {
    try {
      
      const supported = await Linking.canOpenURL(googleFormUrl);

      if (supported) {
        // 브라우저로 링크 열기
        await Linking.openURL(googleFormUrl);
      } else {
        Alert.alert("알림", "이 링크를 열 수 없습니다: " + googleFormUrl);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      
      <LinearGradient
        colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
        style={styles.backgroundGradient}
      />

      <ScrollView contentContainerStyle={[styles.scrollContent, {flexGrow: 1}]}>
      
       
        {/* 상단 텍스트 영역 */}

        <View style={styles.topSection}>
          
      <LinearGradient
        colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
        style={styles.backgroundGradient}
      />
        <View style={styles.topTextContainer}>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>우리 학교의 <Text style={styles.badgeBold}>탄소 지킴이</Text></Text>
          </View>
          <Text style={styles.greetingTitle}>김인하님의 활동 차트</Text>
        </View>

        {/* 메인 카드 영역 (상대 위치 잡기 위해 View로 감쌈) */}
        <View style={styles.cardWrapper}>
          
          <Image 
            source={require('../../../assets/induk.png')} 
            style={styles.floatingStampImage}
          />

          {/* 흰색 메인 카드 */}
          <View style={styles.mainCard}>
            <View style={styles.scoreSection}>
              <Text style={styles.scoreLabel}>오늘의 걸음</Text>
              <View style={styles.scoreRow}>
                <Text style={styles.scoreNumber}>500</Text>
                <Text style={styles.scoreUnit}> 보</Text>
              </View>
              {/* 노란 점 장식 (디자인 디테일) */}
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>포인트</Text>
                <Text style={styles.statValue}>1,000P</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>쿠폰</Text>
                <Text style={styles.statValue}>2개</Text>
              </View>
            </View>

            {/* 내부 배너 (스탬프 현황) */}
            <TouchableOpacity style={styles.innerBanner}
            onPress={() => {navigation.navigate('MyCoupon')}}>
              <View>
                <Text style={styles.innerBannerLabel}>쿠폰 사용하기</Text>
                <Text style={styles.innerBannerValue}>
                  내 쿠폰함
                </Text>
              </View>
              {/* 배너 오른쪽 아이콘 및 화살표 */}
              <View style={styles.innerBannerRight}>
                {/* 아이콘 이미지 대신 원형 뷰로 대체 */}
                <View style={styles.miniIconCircle}>
                   <Ionicons name="gift-outline" size={18} color="#FF6B6B" />
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CCC" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>

        {/* 하단 리스트 섹션 */}
        <View style={styles.bottomSection}>
        <View style={styles.listSection}>
          <TouchableOpacity onPress={() => {navigation.navigate('GoalSetting')}}>
          <Text style={styles.sectionTitle}>나의 목표 수정하기
            <Ionicons name="chevron-forward" 
            size={20} color="#CCC"
            marginLeft={20} /></Text>
            </TouchableOpacity>
          {/* 리스트 아이템 1: 출석체크 */}
          <View style={styles.listItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF4E6' }]}>
              <Ionicons name="accessibility" size={24} color="#D97706" />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>목표 달성률</Text>
              <Text style={styles.itemDesc}>탄소 중립 실천 완료!{'\n'}계속 걸어서 지구를 지킬 수 있어요</Text>
            </View>
            <View>
              <Text style={styles.recordValue}>50<Text style={styles.unitValue}>%</Text></Text>
            </View>
          </View>

          {/* 리스트 아이템 2: 만보기 */}
          <View style={styles.listItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFEBEE' }]}>
              <Ionicons name="footsteps-outline" size={24} color="#D32F2F" />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>누적 걸음 수</Text>
              <Text style={styles.itemDesc}>많이 걷는 습관,{'\n'}쿠폰으로 교환해드립니다!</Text>
            </View>
            <View>
              <Text style={styles.recordValue}>35,000<Text style={styles.unitValue}>보</Text></Text>
            </View>
          </View>
        </View>

         <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>계정 및 고객지원</Text>
          <TouchableOpacity
          onPress={() => {navigation.navigate('AccountSetting')}}>
          <View style={styles.listItem}>
            <View style={[styles.iconBox, { backgroundColor: '#5a9cd1' }]}>
              <Icon name="account-outline" size={24} color="#fff" />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>마이페이지</Text>
              <Text style={styles.itemDesc}>계정 정보 및 로그아웃</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" 
            size={20} color="#CCC"
            marginLeft={20} />
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openUrl}> //구글폼으로 연결
          <View style={styles.listItem}>
            <View style={[styles.iconBox, { backgroundColor: '#Fff' }]}>
              <Icon name="comment-alert-outline" size={24} color="#D32F2F" />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>고객 지원</Text>
              <Text style={styles.itemDesc}>문의 및 개선 방안</Text>
            </View>
            <Ionicons name="chevron-forward" 
            size={20} color="#CCC"
            marginLeft={20} />
          </View>
          </TouchableOpacity>
        </View>
        <View style={{height: 50}}/>
        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
};

export default ProfileScreen;