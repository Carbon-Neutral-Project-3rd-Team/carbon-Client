import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  backgroundGradient: { position: 'absolute', width: '100%', height: '50%' },
  safeArea: { flex: 1 },
  
  // 헤더 영역 스타일
  headerContent: { padding: 20, paddingBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  userInfo: { marginBottom: 10 },
  badgeContainer: { 
    backgroundColor: '#FFF', padding: 6, borderRadius: 12, alignSelf: 'flex-start', marginBottom: 8,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 1
  },
  badgeText: { color: '#8B5E3C', fontWeight: 'bold', fontSize: 12 },
  userName: { fontSize: 26, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  subText: { fontSize: 16, color: '#666', marginBottom: 15 },
  statsRow: { flexDirection: 'row', alignItems: 'center' },
  pointText: { fontSize: 18, fontWeight: 'bold', marginRight: 15 },
  ticketText: { fontSize: 18, fontWeight: 'bold' },

  // [핵심] 캐러셀(가로 스크롤) 스타일
  carouselContainer: {
    marginTop: 10,
  },
  carouselContent: {
    paddingHorizontal: 20, // 시작 부분 여백
    paddingBottom: 20, // 그림자 공간 확보
  },
  cardItem: {
    height: 300,
    borderRadius: 20,
    padding: 24,
    justifyContent: 'space-between',
    // 그림자
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTextContent: { zIndex: 1 },
  cardTitle: { fontSize: 14, color: '#555', marginBottom: 5, fontWeight: '600' },
  cardBrand: { fontSize: 22, color: '#222', fontWeight: 'bold', marginBottom: 5 },
  cardDesc: { fontSize: 15, color: '#777' },

  // 카드 내부 요소
  exchangeButton: {
    alignSelf: 'flex-end', // 오른쪽 정렬
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  exchangeButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  cardIconPlaceholder: { position: 'absolute', right: 20, top: 20 },

  // 페이지네이션 점
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 20, // 활성화되면 길어지는 효과
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
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalInfoBox: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  modalBrand: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modalDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  modalPoint: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalBtnCancel: {
    backgroundColor: '#EEE',
  },
  modalBtnTextCancel: {
    color: '#555',
    fontWeight: 'bold',
  },
  modalBtnTextConfirm: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  successTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#111', 
    marginBottom: 8 
  },
  successDesc: { 
    fontSize: 15, 
    color: '#666', 
    marginBottom: 25, 
    textAlign: 'center' 
  },
  goToCouponBtn: {
    backgroundColor: '#111', // 검정색 혹은 브랜드 컬러
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  goToCouponBtnText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  closeTextBtn: { 
    padding: 10 
  },
  closeText: { 
    color: '#888', 
    fontSize: 14, 
    textDecorationLine: 'underline' 
  },
});

export default styles;