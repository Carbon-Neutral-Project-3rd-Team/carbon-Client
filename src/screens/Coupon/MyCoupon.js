import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StatusBar,
  Modal,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Expo 아이콘 사용
import styles from '../../styles/CouponScreen/MyCouponStyle';

// 임시 더미 데이터입니다. 실제 데이터는 API나 상태 관리에서 받아오시면 됩니다. 
const COUPON_DATA = [
  { id: '1', title: '카페 더 스토리', desc: '사이즈업 추가' },
  { id: '2', title: '카페 더 스토리', desc: '토핑 추가' },
  { id: '3', title: '카페 더 스토리', desc: '휘핑 추가' },
  { id: '4', title: '카페 더 스토리', desc: '라지 사이즈' },
  { id: '5', title: '카페 더 스토리', desc: '1 + 1 쿠폰' },
];

export default function MyCouponScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const [successModalVisible, setSuccessModalVisible] = useState(false); //사용완료 모달

  // 사용하기 버튼 클릭 시
  const handleUsePress = (id) => {
    setSelectedId(id);
    setPassword(''); // 비밀번호 초기화
    setModalVisible(true);
  };

  // 모달 취소
  const handleCancel = () => {
    setModalVisible(false);
    setPassword('');
  };

  // 비밀번호 확인 로직
  const handleConfirm = () => {
    // 예시 비밀번호: 1234
    if (password === '1234') {
      setModalVisible(false);

      setTimeout(() => {
        setSuccessModalVisible(true); // 2. 성공 모달 열기
      }, 300);
      //여기서 쿠폰 처리 로직 추가
    } else {
      Alert.alert("오류", "비밀번호가 일치하지 않습니다.");
    }
};

const handleSuccessConfirm = () => {
    setSuccessModalVisible(false);
    // 필요하다면 여기서 목록을 새로고침하거나 화면을 이동할 수 있습니다.
};

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      {/* 왼쪽 컨텐츠 영역 */}
      <View style={styles.leftContent}>
        <View style={styles.imagePlaceholder}>
          {/* 실제 이미지가 있다면 source={{uri: '...'}} 사용 */}
          <Image 
            source={require('../../../assets/induk.png')} // 계란과 유사한 대체 이미지
            style={styles.eggImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.couponTitle}>{item.title}</Text>
          <Text style={styles.couponDesc}>{item.desc}</Text>
        </View>
      </View>

      {/* 티켓 절취선 효과 (점선 + 위아래 홈) */}
      <View style={styles.separatorContainer}>
        <View style={styles.circleTop} />
        <View style={styles.dashedLine} />
        <View style={styles.circleBottom} />
      </View>

      {/* 오른쪽 버튼 영역 (요청사항: 사용하기 버튼) */}
      <View style={styles.rightContent}>
        <TouchableOpacity 
        style={styles.useButton}
        onPress={() => handleUsePress(item.id)}
        >
          <Text style={styles.useButtonText}>사용하기</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );

  return (

    <View style={styles.Defaultcontainer}>

    <LinearGradient
        colors={['#5a9cd0', '#F3FBF0', '#ffffff']}
        style={styles.backgroundGradient}
      />

    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>내 쿠폰함</Text>
      </View>

      {/* 쿠폰 리스트 */}
      <FlatList
        data={COUPON_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCancel}
        >
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalOverlay}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>비밀번호 입력</Text>
              <Text style={styles.modalSubTitle}>직원 확인용 비밀번호를 입력해주세요.</Text>
              
              <TextInput 
                style={styles.input}
                placeholder="비밀번호 4자리"
                secureTextEntry={true}
                keyboardType="number-pad"
                maxLength={4}
                value={password}
                onChangeText={setPassword}
                autoFocus={true}
              />

              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.modalBtnCancel} onPress={handleCancel}>
                  <Text style={styles.modalBtnTextCancel}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalBtnConfirm} onPress={handleConfirm}>
                  <Text style={styles.modalBtnTextConfirm}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={handleSuccessConfirm}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { alignItems: 'center' }]}>
              {/* 체크 아이콘 추가 */}
              <Ionicons name="checkmark-circle" size={60} color="#5a9cd0" style={{ marginBottom: 15 }} />
              
              <Text style={styles.modalTitle}>사용 완료!</Text>
              <Text style={styles.modalSubTitle}>
                쿠폰 사용이 정상적으로{'\n'}완료되었습니다.
              </Text>
              
              <View style={[styles.modalButtonContainer, { marginTop: 10 }]}>
                <TouchableOpacity 
                  style={[styles.modalBtnConfirm, { marginLeft: 0 }]} // 스타일 재사용
                  onPress={handleSuccessConfirm}
                >
                  <Text style={styles.modalBtnTextConfirm}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

    </SafeAreaView>
    </View>
  );
}

