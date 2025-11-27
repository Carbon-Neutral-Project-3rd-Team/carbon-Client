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

// 더미 데이터 (이미지 속 텍스트 반영)
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
      Alert.alert("성공", `${selectedId}번 쿠폰이 사용 처리되었습니다.`);
      // 여기서 실제 API 호출이나 상태 업데이트 로직을 추가하면 됩니다.
    } else {
      Alert.alert("오류", "비밀번호가 일치하지 않습니다.");
    }
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

      {/* 하단 플로팅 버튼 */}
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.floatingButtonText}>한번에 받기</Text>
        </TouchableOpacity>
      </View>

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

    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8', // 연한 회색 배경
  },
  Defaultcontainer:{
    flex: 1,
    backgroundColor: "#FFF",
  },
  safeArea: { 
    flex: 1,
    backgroundColor: 'transparent', 
  },
  backgroundGradient: { position: 'absolute', 
    width: '100%', 
    height: '50%',
    top: 0,
    left: 0,
    right:0, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // 뒤로가기 버튼과의 간격
    marginBottom: 2, // 시각적 정렬
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // 하단 버튼에 가려지지 않게 여백 추가
  },
  /* 쿠폰 카드 스타일 */
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    marginBottom: 15,
    // 그림자 효과
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden', // 자식 요소(원형 펀치)가 튀어나가지 않게 처리하려면 필요할 수 있음(여기서는 겹치게 하기 위해 제외할 수도 있음)
  },
  leftContent: {
    flex: 2.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0', // 이미지가 없을 때 배경색
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    // 이미지 그림자
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  eggImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  couponDesc: {
    fontSize: 12,
    color: '#888',
  },
  
  /* 절취선 스타일 */
  separatorContainer: {
    width: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 원형 펀치를 배치하기 위함
  },
  dashedLine: {
    height: '80%',
    width: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  circleTop: {
    position: 'absolute',
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // 배경색과 동일하게 하여 뚫린 느낌
  },
  circleBottom: {
    position: 'absolute',
    bottom: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F5F6F8', // 배경색과 동일하게 하여 뚫린 느낌
  },

  /* 오른쪽 버튼 영역 */
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  useButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0', // 연한 회색 버튼 배경
    borderRadius: 8,
  },
  useButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  /* 하단 플로팅 버튼 */
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    left: 0, // 오른쪽 정렬이지만 이미지처럼 보이게 하려면 width를 주거나 flex 사용
    alignItems: 'flex-end', // 오른쪽 정렬
    paddingHorizontal: 20,
  },
  floatingButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    padding: 25,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalSubTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    textAlign: 'center', // 비밀번호 가운데 정렬
  },
  modalButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalBtnCancel: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
  },
  modalBtnConfirm: {
    flex: 1,
    backgroundColor: '#000', // 포인트 컬러
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 10,
    alignItems: 'center',
  },
  modalBtnTextCancel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  modalBtnTextConfirm: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});