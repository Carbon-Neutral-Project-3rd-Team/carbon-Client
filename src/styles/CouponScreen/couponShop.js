import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8', // 앱 배경색
  },
  container: {
    padding: 20,
  },
  modalBackdrop: { //모달 스타일
    flex: 1,
    backgroundColor: '#rgb(0,0,0,0.5)', // 반투명 검은색 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#868e96',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '80%', // 화면 가로의 80%
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1, // 버튼이 1:1 비율로 공간을 차지
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonClose: {
    flex: 1, // '닫기' 버튼이 공간을 차지
    backgroundColor: '#FFF', // 흰색 배경
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8, // '교
    marginRight: 8,
  },
  modalButtonConfirm: {
    flex: 1, // '교환' 버튼이 공간을 차지
    backgroundColor: '#4CAF50', // 초록색 (이전 버튼 색과 동일)
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8, // '닫기' 버튼과의 간격
  },
  modalButtonTextClose: {
    color: '#333', // 검은색 텍스트
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalButtonTextConfirm: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successModalBackdrop: { //2번 모달
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // 동일한 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModalContent: {
    backgroundColor: '#868E96', // 동일한 회색 배경
    borderRadius: 16,
    padding: 24,
    width: '80%',
    alignItems: 'center',
  },
  successModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  successModalSubtitle: {
    fontSize: 14,
    color: '#E9ECEF', // 약간 더 연한 흰색
    marginBottom: 16,
  },
  successModalPoints: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
    marginBottom: 24,
  },
  successModalButton: {
    flexDirection: 'row', // '내 쿠폰함'과 '>' 아이콘 가로 배치
    backgroundColor: 'transparent',
    borderColor: '#FFF', // 흰색 테두리
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successModalButtonIcon: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4, // 텍스트와의 간격
  },
  // 2. 보유 현황
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: 'bliack',
    fontWeight: 'bold',
  },
  // 3. 쿠폰 카드 (CouponCard)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    marginBottom: 16, // 카드 사이 간격
    flexDirection: 'row', // 가로 배치
    justifyContent: 'space-between', // 양쪽 끝으로 밀기
    alignItems: 'center', // 세로 중앙 정렬
    // 그림자 (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // 그림자 (Android)
    elevation: 3,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 20,
  },
  // (임시) 이미지 플레이스홀더 스타일
  cardImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 20,
    backgroundColor: '#FADDAF', // 이미지와 비슷한 색
  },
  cardTextContainer: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2, // 위아래 살짝 간격
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f00',
  },
  // 교환하기 버튼
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '#0b8348', // 초록색 버튼
  },
  buttonDisabled: {
    backgroundColor: '#E0E0E0', // 회색 버튼
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonTextActive: {
    color: '#FFFFFF', // 활성 버튼 텍스트 (흰색)
  },
  buttonTextDisabled: {
    color: '#9E9E9E', // 비활성 버튼 텍스트 (진한 회색)
  },
});

export default styles;