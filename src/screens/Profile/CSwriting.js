import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../../styles/ProfileScreen/CSwriting';
/**
 * 1. 메인 화면 (문의 작성)
 * { navigation } prop을 React Navigation으로부터 전달받습니다.
 */
export default function BoardWriteScreen({ navigation }) {
  // 2. 입력 값을 관리하는 state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // isPrivate: true (비밀글), false (공개글)
  const [isPrivate, setIsPrivate] = useState(false);

  // 3. '등록하기' 버튼 클릭 시 실행될 함수
  const handleSubmit = () => {
    // 간단한 유효성 검사
    if (!title.trim()) {
      Alert.alert('필수 입력','제목을 입력해주세요.'); // 실제 앱에서는 Alert 컴포넌트나 커스텀 모달 사용
      return;
    }
    if (!content.trim()) {
      Alert.alert('필수 입력', '내용을 입력해주세요.');
      return;
    }

    // 서버로 전송할 데이터 객체
    const newPost = {
      title: title,
      content: content,
      isPublic: !isPrivate, // isPrivate이 true면 isPublic은 false가 됨
      author: '사용자', // 실제로는 로그인 정보에서 가져와야 함
      date: new Date().toISOString().split('T')[0], // 'YYYY-MM-DD' 형식
      status: 'pending',
    };

    // --- (시뮬레이션) ---
    // 여기에서 API 서버로 newPost 데이터를 전송합니다.
    // fetch('API_ENDPOINT/posts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newPost),
    // })
    console.log('등록될 데이터:', newPost); //데이터 입력 확인
    Alert.alert('완료!', '문의가 등록되었습니다.');
    // --------------------

    // 등록 완료 후 목록 화면으로 돌아가기
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 키보드가 올라왔을 때 입력창을 가리지 않도록 설정 */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexContainer}
      >
        <ScrollView 
          style={styles.scrollContainer}
          keyboardShouldPersistTaps="handled" // 스크롤 시 키보드 숨김
        >
          {/* 제목 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>제목</Text>
            <TextInput
              style={styles.inputTitle}
              placeholder="제목을 입력하세요"
              value={title}
              onChangeText={setTitle}
              maxLength={50}
              returnKeyType="next"
            />
          </View>

          {/* 내용 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>내용</Text>
            <TextInput
              style={styles.inputContent}
              placeholder="문의하실 내용을 입력하세요 (최대 500자)"
              value={content}
              onChangeText={setContent}
              multiline={true} // 여러 줄 입력
              maxLength={500}
              textAlignVertical="top" // Android에서 multiline 상단 정렬
            />
          </View>

          {/* 비밀글 설정 */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>비밀글로 설정</Text>
            <Switch
              trackColor={{ false: '#E9ECEF', true: '#5a9cd0' }}
              thumbColor={isPrivate ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#E9ECEF"
              onValueChange={setIsPrivate}
              value={isPrivate}
            />
          </View>

          {/* 등록하기 버튼 */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>등록하기</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}