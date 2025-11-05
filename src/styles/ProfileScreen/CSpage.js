import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // 연한 회색 배경
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  listContainer: {
    paddingVertical: 8,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
  },
  statusAnswered: {
    backgroundColor: '#E6F7FF', // 연한 파랑
    borderColor: '#B3DFFF',
    borderWidth: 1,
  },
  statusPending: {
    backgroundColor: '#FFFBE6', // 연한 노랑
    borderColor: '#FFE58F',
    borderWidth: 1,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343A40',
    flex: 1, // 제목이 길어질 경우 나머지 공간을 모두 차지
  },
  privateIcon: {
    fontSize: 16,
    color: '#868E96',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  itemMeta: {
    fontSize: 13,
    color: '#868E96',
  },
  separator: {
    height: 1,
    backgroundColor: '#F1F3F5',
  },
  listHeaderFooter: {
    height: 1,
    backgroundColor: '#E9ECEF',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#5a9cd0', // 파란색
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // 안드로이드 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    fontSize: 30,
    color: 'white',
    lineHeight: 30, // + 기호 수직 중앙 정렬
    paddingBottom: 2,
  },
});

export default styles;