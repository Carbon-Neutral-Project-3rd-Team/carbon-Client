import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ... (safeArea, container, card 등 기존 스타일은 그대로)

  // --- "사용 확인" 모달 스타일 ---
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalSubtext:{
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalCouponName: {
    fontWeight: 'bold',
  },
  
  // --- "비밀번호 입력" 모달 스타일 추가 ---
  passwordInput: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },

  // --- 모달 버튼 스타일 (공용) ---
  modalButtonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalButtonConfirm: {
    flex: 1,
    backgroundColor: '#0b8348',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  modalButtonClose: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  modalButtonTextConfirm: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalButtonTextClose: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // --- (기존 카드 스타일 코드) ---
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  container: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#99a',
    textAlign: 'center',
    marginBottom: 24,
  },
  couponListContainer: {},
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 20,
    backgroundColor: '#FADDAF',
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
    marginVertical: 2,
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f00',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '#0b8348',
  },
  buttonTextActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;