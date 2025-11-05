import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from '../../styles/ProfileScreen/CSreading';

// 1. 상세 페이지용 목업 데이터 (질문과 답변 내용 추가)
// BoardListScreen에서 postId만 넘겨주면, 이 데이터에서 ID로 찾아 사용합니다.
const DUMMY_POSTS = [ //임시 더미 데이터입니다.
  {
    id: '1',
    title: '교환 관련 문의드립니다.',
    author: '김*수',
    date: '2023.10.27',
    isPublic: true,
    status: 'answered',
    questionContent:
      '어제 쿠폰을 교환하고 나서 다시 돌려받고 싶은데 가능할까요..?',
    answerContent:
      '안녕하세요, 고객님. 000입니다.......',
  },
  {
    id: '2',
    title: '비밀글입니다.',
    author: '이*나',
    date: '2023.10.26',
    isPublic: false,
    status: 'answered',
    questionContent: '제 개인정보 관련 내용이라 비밀글로 남깁니다...',
    answerContent: '고객님, 안녕하세요. 요청하신 사항 처리 완료되었습니다.',
  },
  {
    id: '3',
    title: '포인트 적립 규정이 궁금합니다.',
    author: '박*훈',
    date: '2023.10.25',
    isPublic: true,
    status: 'pending',
    questionContent:
      '몇 걸음에 몇 포인트이죠?',
    answerContent: null, // 답변 대기
  },
  {
    id: '4',
    title: '비밀글입니다.',
    author: '최*영',
    date: '2023.10.24',
    isPublic: false,
    status: 'pending',
    questionContent: '아이디/비밀번호 관련 문의입니다.',
    answerContent: null, // 답변 대기
  },
  {
    id: '5',
    title: '사용법 문의',
    author: '강*주',
    date: '2023.10.23',
    isPublic: true,
    status: 'answered',
    questionContent: '이번에 새로 발급받은 쿠폰 사용처가 궁금합니다',
    answerContent: '안녕하세요. 고객님.....',
  },
];
// 비밀글일 때 보여줄 컴포넌트
const PrivatePostView = () => (
  <View style={styles.privateContainer}>
    <Text style={styles.privateIcon}>🔒</Text>
    <Text style={styles.privateTitle}>비밀글입니다</Text>
    <Text style={styles.privateSubtitle}>작성자만 내용을 확인할 수 있습니다.</Text>
  </View>
);

/**
 * 2. 메인 화면 (게시글 상세)
 * BoardListScreen에서 { navigation, route } props를 전달받습니다.
 */
export default function BoardDetailScreen({ route }) {
  // BoardListScreen에서 넘겨준 postId를 받습니다.
  // 예: const { postId } = route.params;
  // 지금은 테스트를 위해 '1'번 글을 하드코딩합니다.
  // 비밀글 테스트는 '2' 또는 '4'로 변경
  // 답변 대기 테스트는 '3'으로 변경
  const { postId } = route.params; // 기본값으로 '1' 설정

  // postId로 상세 데이터 찾기
  const post = DUMMY_POSTS[postId-1];

  // 데이터가 없는 경우
  if (!post) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text>게시글을 찾을 수 없습니다.</Text>
        </View>
      </SafeAreaView>
    );
  }

  // 3. 비공개 글 처리
  // (실제 앱: if (!post.isPublic && post.authorId !== myUserId) )
  if (!post.isPublic) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <PrivatePostView />
      </SafeAreaView>
    );
  }

  // 4. 공개 글 렌더링
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 게시글 헤더 (제목, 작성자, 날짜) */}
        <View style={styles.header}>
          <Text style={styles.title}>{post.title}</Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>{post.author}</Text>
            <Text style={styles.metaText}>{post.date}</Text>
          </View>
        </View>

        {/* 질문 내용 */}
        <View style={styles.contentSection}>
          <Text style={styles.contentLabel}>Q. 질문</Text>
          <Text style={styles.contentText}>{post.questionContent}</Text>
        </View>

        {/* 답변 내용 (조건부 렌더링) */}
        {post.status === 'answered' ? (
          <View style={[styles.contentSection, styles.answerSection]}>
            <Text style={[styles.contentLabel, styles.answerLabel]}>A. 답변</Text>
            <Text style={styles.contentText}>{post.answerContent}</Text>
          </View>
        ) : (
          <View style={[styles.contentSection, styles.pendingSection]}>
            <Text style={styles.pendingText}>답변을 준비 중입니다.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}