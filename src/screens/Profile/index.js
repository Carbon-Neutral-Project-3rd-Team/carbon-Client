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
import { Ionicons } from '@expo/vector-icons'; 
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ navigation }) => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeXZmkceoj7CZIsJWkZE11sQ2D9I-O4C7t2jBYyuxaB6LFBMw/viewform?usp=dialog";

  const openUrl = async () => {
    try {
      const supported = await Linking.canOpenURL(googleFormUrl);
      if (supported) {
        await Linking.openURL(googleFormUrl);
      } else {
        Alert.alert("알림", "링크를 열 수 없습니다.");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. 전체 배경 그라데이션 */}
      <LinearGradient
        colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
        style={styles.backgroundGradient}
      />

      <ScrollView contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}>
        <View style={styles.topSection}>
          {/* 2. 상단 섹션 전용 중복 그라데이션 (원래 코드 유지) */}
          <LinearGradient
            colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
            style={styles.backgroundGradient}
          />
          
          <View style={styles.topTextContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                우리 학교의 <Text style={styles.badgeBold}>탄소 지킴이</Text>
              </Text>
            </View>
            <Text style={styles.greetingTitle}>김인하님의 활동 차트</Text>
          </View>

          <View style={styles.cardWrapper}>
            <Image 
              source={require('../../../assets/profile_induk.png')} 
              style={styles.floatingStampImage}
            />

            <View style={styles.mainCard}>
              <View style={styles.scoreSection}>
                <Text style={styles.scoreLabel}>오늘의 걸음</Text>
                <View style={styles.scoreRow}>
                  <Text style={styles.scoreNumber}>500</Text>
                  <Text style={styles.scoreUnit}> 보</Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>포인트</Text>
                  <Text style={styles.statValue}>1,523P</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>쿠폰</Text>
                  <Text style={styles.statValue}>2개</Text>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.innerBanner}
                onPress={() => { navigation.navigate('MyCoupon') }}
              >
                <View>
                  <Text style={styles.innerBannerLabel}>쿠폰 사용하기</Text>
                  <Text style={styles.innerBannerValue}>내 쿠폰함</Text>
                </View>
                <View style={styles.innerBannerRight}>
                  <View style={styles.miniIconCircle}>
                    <Ionicons name="gift-outline" size={18} color="#FF6B6B" />
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#CCC" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.listSection}>
            {/* 에러 해결 포인트: Text와 Icon을 분리해서 배치 */}
            <TouchableOpacity 
              onPress={() => { navigation.navigate('GoalSetting') }}
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
            >
              <Text style={styles.sectionTitle}>나의 목표 수정하기</Text>
              <Ionicons name="chevron-forward" size={20} color="#CCC" style={{ marginLeft: 5 }} />
            </TouchableOpacity>

            <View style={styles.listItem}>
              <View style={[styles.iconBox, { backgroundColor: '#FFF4E6' }]}>
                <Ionicons name="accessibility" size={24} color="#D97706" />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>목표 달성률</Text>
                <Text style={styles.itemDesc}>탄소 중립 실천 완료!{"\n"}계속 걸어서 지구를 지킬 수 있어요</Text>
              </View>
              <View>
                <Text style={styles.recordValue}>70<Text style={styles.unitValue}>%</Text></Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={[styles.iconBox, { backgroundColor: '#FFEBEE' }]}>
                <Ionicons name="footsteps-outline" size={24} color="#D32F2F" />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>누적 걸음 수</Text>
                <Text style={styles.itemDesc}>많이 걷는 습관,{"\n"}쿠폰으로 교환해드립니다!</Text>
              </View>
              <View>
                <Text style={styles.recordValue}>35,000<Text style={styles.unitValue}>보</Text></Text>
              </View>
            </View>
          </View>

          <View style={styles.listSection}>
            <Text style={styles.sectionTitle}>계정 및 고객지원</Text>
            
            <TouchableOpacity onPress={() => { navigation.navigate('AccountSetting') }}>
              <View style={styles.listItem}>
                <View style={[styles.iconBox, { backgroundColor: '#5a9cd1' }]}>
                  <Icon name="account-outline" size={24} color="#fff" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>마이페이지</Text>
                  <Text style={styles.itemDesc}>계정 정보 및 로그아웃</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CCC" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={openUrl}>
              <View style={styles.listItem}>
                <View style={[styles.iconBox, { backgroundColor: '#f0f0f0' }]}>
                  <Icon name="comment-alert-outline" size={24} color="#D32F2F" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>고객 지원</Text>
                  <Text style={styles.itemDesc}>문의 및 개선 방안</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#CCC" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;