import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    saveButton: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    },
    saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },

  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5', // 앱 배경색
  },
  container: {
    padding: 20,
    alignItems: 'center', // 카드들을 가운데 정렬
  },
  goalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: '100%', // 화면 좌우 여백은 container의 padding이 담당
    marginBottom: 20,
    
    // 그림자 (iOS)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12.0,

    // 그림자 (Android)
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  currentValue: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10, // 위아래 여백
  },
  calorieText: {
    color: '#20C997', // 이미지의 초록색 계열
  },
  stepsText: {
    color: '#4A90E2', // 이미지의 파란색 계열
  },
    unit: {
        color: 'black',
    },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16, // 좌우 패딩
    paddingVertical: 14,   // 상하 패딩
    fontSize: 16,
    color: '#333', // 입력하는 텍스트 색상
    marginTop: 10, // '현재 값'과의 간격
  },
});

export default styles;