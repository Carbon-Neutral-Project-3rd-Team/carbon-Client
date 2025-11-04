import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f4f6f8', // 이미지 배경색
  },
  // --- 헤더 ---
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f4f6f8', // 배경과 동일하게
  },
  headerBack: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 20,
    marginBottom: 10, // 카드와의 간격
  },
  // --- 카드 컨테이너 ---
  container: {
    marginTop: 20,
    paddingHorizontal: 20, // 좌우 여백
  },
  // --- 공통 카드 스타일 ---
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // --- 1. 메인 통계 카드 ---
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5a9cd0',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#aaa',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6cc197',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  unitText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#555',
  },
  blueText: {
    color: '#5a9cd0',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#eee',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  // --- 2 & 3. 기록 카드 ---
  recordTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e6716a',
    marginBottom: 30,
  },
  recordValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  recordUnit: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#555',
  },
});

export default styles;