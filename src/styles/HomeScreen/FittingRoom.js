import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column', // [변경] row -> column (세로 배치)
    padding: 10,
  },
  
  // === 상단 프리뷰 영역 스타일 ===
  previewSection: {
    flex: 2, // [변경] 화면의 약 2/3 차지
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // UI 창과의 간격
  },
  avatarContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%', 
    height: '90%',
  },
  placeholderDuck: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },

  // === 하단 UI 영역 스타일 ===
  uiWindow: {
    flex: 1, // [변경] 화면의 약 1/3 차지
    width: '100%', // 가로 꽉 채우기
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20, // 둥근 모서리를 더 강조
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    elevation: 10, // 그림자 강화
  },
  uiBody: {
    flex: 1,
    flexDirection: 'row', // 내부 구조는 좌우(카테고리|아이템) 유지
  },
  categorySidebar: {
    width: 70, // 터치하기 편하게 조금 넓힘
    backgroundColor: '#EEEEEE',
    borderRightWidth: 2,
    borderColor: '#DDD',
    alignItems: 'center',
    paddingTop: 15,
  },
  categoryTab: {
    width: 50,
    height: 50,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  activeCategoryTab: {
    backgroundColor: '#FFD700',
    borderColor: '#5a9cd0',
    borderWidth: 2,
    transform: [{ scale: 1.1 }], // 선택 시 살짝 커지는 효과
  },
  categoryIcon: {
    fontSize: 24,
  },
  itemGridArea: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF',
  },
  itemGridContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between', // 아이템이 적을 때 벌어지는 것 방지하려면 'flex-start'로 변경 가능
  },
  gridItem: {
    width: 70,    // [변경] 정사각형 크기 고정
    height: 70,   
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 5,
  },
  gridItemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  // styles/HomeScreen/FittingRoom.js 에 추가
buttonContainer: {
  paddingHorizontal: 20,
  paddingBottom: 20, // 하단 여백
  paddingTop: 20,
},
applyButton: {
  backgroundColor: '#FF6B6B', // 포인트가 되는 색상
  paddingVertical: 15,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3, // 안드로이드 그림자
},
applyButtonText: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 'bold',
},
// 이전 답변에서 드린 아이템 이미지 스타일도 잊지 마세요!
gridItemImage: {
  width: '100%',
  height: '100%',
  borderRadius: 6,
},
});

export default styles;