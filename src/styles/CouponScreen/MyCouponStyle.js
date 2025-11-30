import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8', // 연한 회색 배경
  },
  Defaultcontainer:{
    flex: 1,
    backgroundColor: "#FFF",
  },
  safeArea: { 
    flex: 1,
    backgroundColor: 'transparent', 
  },
  backgroundGradient: { position: 'absolute', 
    width: '100%', 
    height: '50%',
    top: 0,
    left: 0,
    right:0, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // 뒤로가기 버튼과의 간격
    marginBottom: 2, // 시각적 정렬
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // 하단 버튼에 가려지지 않게 여백 추가
  },
  /* 쿠폰 카드 스타일 */
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    marginBottom: 15,
    // 그림자 효과
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden', // 자식 요소(원형 펀치)가 튀어나가지 않게 처리하려면 필요할 수 있음(여기서는 겹치게 하기 위해 제외할 수도 있음)
  },
  leftContent: {
    flex: 2.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0', // 이미지가 없을 때 배경색
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    // 이미지 그림자
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  eggImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  couponDesc: {
    fontSize: 12,
    color: '#888',
  },
  
  /* 절취선 스타일 */
  separatorContainer: {
    width: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 원형 펀치를 배치하기 위함
  },
  dashedLine: {
    height: '80%',
    width: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  circleTop: {
    position: 'absolute',
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // 배경색과 동일하게 하여 뚫린 느낌
  },
  circleBottom: {
    position: 'absolute',
    bottom: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F5F6F8', // 배경색과 동일하게 하여 뚫린 느낌
  },

  /* 오른쪽 버튼 영역 */
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  useButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0', // 연한 회색 버튼 배경
    borderRadius: 8,
  },
  useButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  /* 하단 플로팅 버튼 */
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    left: 0, // 오른쪽 정렬이지만 이미지처럼 보이게 하려면 width를 주거나 flex 사용
    alignItems: 'flex-end', // 오른쪽 정렬
    paddingHorizontal: 20,
  },
  floatingButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 반투명 검은 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalSubTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    textAlign: 'center', // 비밀번호 가운데 정렬
  },
  modalButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalBtnCancel: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
  },
  modalBtnConfirm: {
    flex: 1,
    backgroundColor: '#000', // 포인트 컬러
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 10,
    alignItems: 'center',
  },
  modalBtnTextCancel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  modalBtnTextConfirm: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;