import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
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
    color: 'black',
    fontWeight: 'bold',
    },
    CircleValue:{
      fontSize: 20,
      color: '#666',
    },
  cardContainer: {
    padding:20, // 스크롤 뷰 내부에 여백
    justifyContent: 'flex-end',
    flex: 1,
  },
  // --- 공통 카드 스타일 ---
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    // 그림자 효과 (iOS)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // 그림자 효과 (Android)
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // 내부 요소들을 균등하게 배치
    alignItems: 'center',
  },
  // --- 1. 목표/포인트 카드 ---
  infoBox: {
    alignItems: 'center', // 텍스트 중앙 정렬
    flex: 1, // 공간을 균등하게 차지
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6cc197',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  // --- 2. 쿠폰함 버튼 카드 ---
  couponButton: {
    paddingVertical: 16,
    alignItems: 'center', // 텍스트 중앙 정렬
  },
  couponButtonText: {
    fontSize: 16,
    color: '#5a9cd0', // 이미지의 색상과 유사하게
    fontWeight: '600',
  },
  // --- 3. 활동 카드 ---
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e6716a',
  },
  activityBox: {
    flex: 1, // 3개의 박스가 공간을 1:1:1로 나눠 가짐
    alignItems: 'center', // 텍스트 중앙 정렬
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6cc197',
    marginBottom: 8,
  },
  activityValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  unit: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4, // 숫자와 단위 사이 간격
  },
  verticalDivider: {
    borderLeftWidth: 1, // 수직 구분선
    borderColor: '#eee', // 연한 회색
  },
});

export default styles;