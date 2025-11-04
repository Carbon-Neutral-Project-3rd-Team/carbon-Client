import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8', // 이미지 배경색
  },
  scrollContainer: {
    padding: 20,
  },
  // --- 헤더 ---
  header: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  // --- 공통 카드 스타일 ---
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    // 그림자 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // 그림자 (Android)
    elevation: 5,
  },
  // --- 1. 쿠폰함 버튼 카드 ---
  couponButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  couponButtonText: {
    fontSize: 16,
    color: '#5a9cd0', // 이미지의 파란색 텍스트
    fontWeight: '600',
  },
  // --- 2. 통계 카드 ---
  usernameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5a9cd0', // 이미지의 파란색 텍스트
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statBox: {
    flex: 1, // 3개 항목이 1:1:1 비율로 공간 차지
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6cc197',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  statUnit: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  verticalDivider: {
    borderLeftWidth: 1,
    borderColor: '#eee',
  },
  // --- 3. 설정 리스트 카드 ---
  menuCard: {
    paddingHorizontal: 0, // 내부 리스트가 카드 끝까지 닿도록
    paddingVertical: 0,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    // 리스트 항목 사이에 구분선 (마지막 항목 제외)
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default styles;