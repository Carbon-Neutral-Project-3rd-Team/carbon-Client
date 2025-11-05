import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // --- 비밀글 스타일 ---
  privateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  privateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  privateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343A40',
  },
  privateSubtitle: {
    fontSize: 14,
    color: '#868E96',
    marginTop: 8,
  },
  // --- 상세 내용 스타일 ---
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    paddingBottom: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 14,
    color: '#868E96',
  },
  contentSection: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  contentLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF', // 질문 (파란색)
    marginBottom: 12,
  },
  contentText: {
    fontSize: 15,
    color: '#343A40',
    lineHeight: 22,
  },
  // 답변 완료
  answerSection: {
    backgroundColor: '#E6F7FF', // 연한 파랑
    borderColor: '#B3DFFF',
    borderWidth: 1,
  },
  answerLabel: {
    color: '#0056B3',
  },
  // 답변 대기
  pendingSection: {
    backgroundColor: '#FFFBE6', // 연한 노랑
    borderColor: '#FFE58F',
    borderWidth: 1,
    alignItems: 'center',
    padding: 32,
  },
  pendingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#856404',
  },
});

export default styles;