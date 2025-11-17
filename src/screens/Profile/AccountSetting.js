import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import styles from '../../styles/ProfileScreen/AccountSetting';
import { useAuth } from '../../../AuthContext';
//목업 데이터 대신 임의의 사용자를 지정
//실제론 서버에서 데이터를 받아야 함
const App = () => {

  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "로그아웃",
      "정말로 로그아웃하시겠습니까?",
      [
        {text: "취소", style: "cancel"},
        {text: "확인",
          onPress: () => logout()
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.container.backgroundColor} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        {/* 1. 프로필 요약 카드 */}
        <View style={[styles.card, styles.profileSummaryCard]}>
          <Text style={styles.userName}>김인하</Text>
          <Text style={styles.userId}>inhakim</Text>
          <Text style={styles.userContact}>inha@naver.com</Text>
          <Text style={styles.userContact}>inha111</Text>
        </View>

        {/* 2. 계정 정보 카드 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>계정 정보</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>이메일</Text>
            <Text style={styles.value}>inha@naver.com</Text>
          </View>
          <View style={[styles.infoRow, styles.infoRowBorder]}>
            <Text style={styles.label}>전화번호</Text>
            <Text style={styles.value}>+82 10-12**-56**</Text>
          </View>
          <View style={[styles.infoRow, styles.infoRowBorder]}>
            <Text style={styles.label}>이름</Text>
            <Text style={styles.value}>김*하</Text>
          </View>
        </View>
        //--로그아웃 버튼--
        <View style={styles.logoutButtonContainer}>
          <Button
          title="로그아웃"
          onPress={handleLogout}
          color="#e74c3c"/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;