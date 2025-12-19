import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // 전체 배경: 아주 연한 회색
  },
  backgroundGradient: { 
    position: 'absolute', 
    width: '100%', 
    height: '50%', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F9FAFB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  headerRightButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  headerRightText: {
    fontSize: 12,
    color: '#666',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  // 상단 텍스트
  topTextContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#EFF6FF', // 연한 파랑
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 13,
    color: '#666',
  },
  badgeBold: {
    color: '#3B82F6', // 파란색 강조
    fontWeight: 'bold',
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    lineHeight: 32,
  },
  // 메인 카드 래퍼 (이미지 겹침 처리용)
  cardWrapper: {
    paddingHorizontal: 20,
    marginTop: 20, 
    zIndex: 1,
  },
  floatingStampImage: {
    position: 'absolute',
    top: -50, // 카드 위로 튀어나오게
    right: 10,
    width: 140,
    height: 140,
    borderRadius: 16,
    zIndex: 10, // 카드보다 위에 표시
    resizeMode: 'contain',
    // 실제 이미지가 없다면 임시로 회전
    transform: [{ rotate: '10deg' }] 
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 24,
    paddingTop: 30,
    // 그림자
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  // 노란 점 장식 (디자인 요소)
  scoreSection: {
    marginBottom: 25,
  },
  scoreLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scoreNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#3B82F6', // 밝은 파랑
  },
  scoreUnit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 8,
    marginLeft: 2,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  statItem: {
    marginRight: 30,
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280', // 회색
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#E5E7EB',
    marginRight: 30,
  },
  innerBanner: {
    backgroundColor: '#F0F9FF', // 아주 연한 하늘색 배경
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerBannerLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
  innerBannerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  innerBannerTotal: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#9CA3AF',
  },
  innerBannerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniIconCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#FFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  // 하단 리스트
  listSection: {
    paddingHorizontal: 24,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  recordValue:{
    fontSize:25,
    fontWeight: 'bold',
    color: 'black',
  },
  unitValue:{
    fontSize: 15,
    fontWeight:'600',
  },
  actionButton: {
    backgroundColor: '#374151', // 진한 회색/검정
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // 그림자 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // 그림자 (Android)
    elevation: 5,
  },
  menuItem: {
  alignItems: 'center', // 세로 중앙 정렬
  paddingVertical: 16, // 상하 여백
  
  borderBottomWidth: 1, // 구분선
  borderBottomColor: '#F0F0F0',
  },
  menuLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    margin: 12,
  },
  topSection:{
    backgroundColor: '#f9fafb',
    paddingBottom: 30,
  },
  bottomSection:{
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});

export default styles;