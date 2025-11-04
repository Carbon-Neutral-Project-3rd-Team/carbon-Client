import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
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

        {/* 3. 계정 변경 카드 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>계정 변경</Text>
          <TouchableOpacity style={styles.settingLink}>
            <Text style={styles.settingLinkText}>아이디 확인</Text>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingLink}>
            <Text style={styles.settingLinkText}>비밀번호 변경</Text>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- StyleSheet ---
const styles = StyleSheet.create({
  // 기본 화면 스타일
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // 앱 배경색
  },
  scrollViewContent: {
    padding: 20, // 화면 전체의 여백
  },

  // 카드 공통 스타일
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    // iOS 그림자
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    // Android 그림자
    elevation: 5,
  },

  // 1. 프로필 요약 카드
  profileSummaryCard: {
    alignItems: 'center', // 텍스트 중앙 정렬
    paddingVertical: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  userId: {
    fontSize: 18,
    fontWeight: '500',
    color: '#e6716a',
    marginBottom: 12,
  },
  userContact: {
    fontSize: 14,
    color: '#888',
    marginVertical: 2, // HTML의 margin 4px 0 과 유사하게
  },

  // 2. 계정 정보 카드
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row', // 가로 정렬
    justifyContent: 'space-between', // 양쪽 끝으로 정렬
    alignItems: 'center',
    paddingVertical: 16,
  },
  infoRowBorder: {
    borderTopWidth: 1, // 구분선
    borderTopColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#888',
    fontWeight: 'medium',
  },

  // 3. 계정 변경 카드
  settingLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16, // 클릭 영역 확보
  },
  settingLinkText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#333',
  },
  arrow: {
    fontSize: 20,
    color: '#aaa',
    fontWeight: 'bold',
  },
});

export default App;