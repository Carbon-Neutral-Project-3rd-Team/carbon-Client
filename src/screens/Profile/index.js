import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../styles/ProfileScreen/MainProfile';

// --- (3) 설정 리스트 카드용 항목 컴포넌트 ---
// 반복되는 리스트 항목을 컴포넌트로 분리
const MenuListItem = ({ title, navigation, ScreenName }) => (

  <TouchableOpacity style={styles.listItem}
  onPress={() => {navigation.navigate(ScreenName)}}>
    <Text style={styles.listItemText}>{title}</Text>
  </TouchableOpacity>
);

export default function ProfileScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* --- 헤더 --- */}
        <View style={styles.header}>
          <Text style={styles.headerSubtitle}>계정 설정 및 기록</Text>
        </View>

        {/* --- 1. 내 쿠폰함 버튼 카드 --- */}
        <TouchableOpacity 
        style={[styles.card, styles.couponButton]}
        onPress={() => {navigation.navigate('MyCoupon')}}
        >
          <Text style={styles.couponButtonText}>내 쿠폰함</Text>
        </TouchableOpacity>

        {/* --- 2. 통계 카드 --- */}
        <TouchableOpacity
        onPress={() => {navigation.navigate('MyGoal')}}>
        <View style={styles.card}>
          <Text style={styles.usernameText}>ㅇㅇㅇ님  /  목표 설정하기 </Text>
          <View style={styles.statsRow}>
            {/* 최근 기록 */}
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>최고 기록</Text>
              <Text style={styles.statValue}>
                30,000<Text style={styles.statUnit}>보</Text>
              </Text>
            </View>

            {/* 이번 달 목표 달성률 (구분선 포함) */}
            <View style={[styles.statBox, styles.verticalDivider]}>
              <Text style={styles.statTitle}>월 목표 달성률</Text>
              <Text style={styles.statValue}>
                55<Text style={styles.statUnit}>%</Text>
              </Text>
            </View>

            {/* 사용한 포인트 (구분선 포함) */}
            <View style={[styles.statBox, styles.verticalDivider]}>
              <Text style={styles.statTitle}>사용한 포인트</Text>
              <Text style={styles.statValue}>
                1,300<Text style={styles.statUnit}>p</Text>
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        {/* --- 3. 설정 리스트 카드 --- */}
        <View style={[styles.card, styles.menuCard]}>
          <MenuListItem title="계정 정보" navigation={navigation} ScreenName='AccountSetting' />
          <MenuListItem title="마이페이지" navigation={navigation} ScreenName='MyPage'/>
          <MenuListItem title="리워드 히스토리" navigation={navigation} ScreenName='RewardHistory'/>
          <MenuListItem title="문의 게시판" navigation={navigation} ScreenName='CSpage'/>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

// --- 스타일시트 ---

