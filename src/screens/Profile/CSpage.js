import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from '../../styles/ProfileScreen/CSpage';

// 1. 목업 데이터 (서버 API 응답을 시뮬레이션합니다)
// isPublic: 공개 여부 (false일 경우 비밀글)
// status: 답변 상태 ('pending' - 답변 대기, 'answered' - 답변 완료)
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

/**
 * 2. FlatList의 각 항목을 렌더링하는 컴포넌트
 * @param {object} item - 포스트 데이터
 * @param {function} onPress - 항목 클릭 시 실행될 함수
 */
const PostItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemHeader}>
        {/* 답변 상태 뱃지 */}
        <View
          style={[
            styles.statusBadge,
            item.status === 'answered'
              ? styles.statusAnswered
              : styles.statusPending,
          ]}>
          <Text style={styles.statusText}>
            {item.status === 'answered' ? '답변완료' : '답변대기'}
          </Text>
        </View>
        
        {/* 제목 */}
        <Text style={styles.itemTitle} numberOfLines={1}>
          {/* 비공개 글일 경우 자물쇠 아이콘 표시 */}
          {!item.isPublic && (
            <Text style={styles.privateIcon}>🔒 </Text>
          )}
          {item.title}
        </Text>
      </View>
      
      <View style={styles.itemFooter}>
        <Text style={styles.itemMeta}>{item.author}</Text>
        <Text style={styles.itemMeta}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

/**
 * 3. 메인 화면 (게시글 목록)
 * 실제 앱에서는 `navigation` prop을 React Navigation으로부터 전달받습니다.
 */
export default function BoardListScreen({ navigation}) {
  // FlatList의 각 항목을 렌더링하는 함수
  const renderItem = ({ item }) => (
    <PostItem
      item={item}
      // navigation.navigate('BoardDetail', { postId: item.id })
      // 위와 같이 상세 화면으로 이동하는 로직을 구현합니다.
      onPress={() => {navigation.navigate('CSreading', {postId: item.id})}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 헤더 타이틀 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>문의 게시판</Text>
      </View>

      {/* 게시글 목록 */}
      <FlatList
        data={DUMMY_POSTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        // 목록 상단에 구분선 추가
        ListHeaderComponent={() => <View style={styles.listHeaderFooter} />}
        // 목록 하단에 구분선 추가
        ListFooterComponent={() => <View style={styles.listHeaderFooter} />}
        // 각 항목 사이에 구분선 추가
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* 새 글 작성 버튼 (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        // navigation.navigate('BoardWrite')
        // 위와 같이 글 작성 화면으로 이동하는 로직을 구현합니다.
        onPress={() => {navigation.navigate('CSwriting')}}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}