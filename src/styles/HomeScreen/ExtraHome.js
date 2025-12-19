import {StyleSheet, Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#333', // 이미지가 로드되기 전 배경색
    backgroundColor: 'transparent',
  },
  // 배경 이미지를 절대 위치로 설정하여 뒤에 깝니다.
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    // zIndex는 필요 없지만, 혹시 가리면 -1 줘보세요. 보통 맨 위에 쓰면 알아서 깔립니다.
  },
  safeArea: {
    flex: 1,
  },
  
  /* 상단 상태바 스타일 */
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20,
    width: '100%',
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 8, // 아이템 사이 간격 (RN 0.71+)
    marginRight: 20,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 반투명 흰색 배경
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 4,
  },
  statusText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  
  /* 옷장 버튼 스타일 */
  wardrobeButton: {
   backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E9D5FF', 
    // marginTop: 40, <-- 삭제함 (배지와 높이 맞춤)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 20,
  },

  /* 중앙 캐릭터 영역 */
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50, // 하단 네비게이션 바 공간 고려해서 조금 위로
  },
  characterImage: {
    width: 250, // 오리 크기 조절
    height: 250,
  },
  /* 하단 네비게이션 바 스타일 */
  tabBarContainer: {
  backgroundColor: '#fff', 
  borderTopWidth: 1,
  borderTopColor: '#eee',
  width: '100%', // 너비 확실히 지정
  paddingBottom: Platform.OS === 'ios' ? 30 : 10, 
  },
  tabBar: {
    flexDirection: 'row', // ★ 가로 정렬
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around', // 아이콘들 균등 배분
    width: '100%',
  },
tabItem: {
  flex: 1, // 각 탭이 동일한 너비를 가짐
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default styles;