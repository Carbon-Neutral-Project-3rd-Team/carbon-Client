import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // 기본 화면 스타일
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // 앱 배경색
  },
  scrollViewContent: {
    padding: 20, // 화면 전체의 여백
  },
  logoutButtonContainer: {
    marginTop: 50, // 다른 컴포넌트와 간격을 줍니다.
    paddingHorizontal: 20, // 버튼 좌우 여백
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

export default styles;