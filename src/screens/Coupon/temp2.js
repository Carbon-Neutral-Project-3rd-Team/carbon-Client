import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Modal,
  Alert,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard // 1. TextInput import 추가
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/CouponScreen/MyCouponStyle';

// --- (1) "내 쿠폰" 카드 컴포넌트 ---
const MyCouponCard = ({ coupon, onUsePress }) => {
  const { title, subtitle, price } = coupon;

  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.cardImagePlaceholder} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
          <Text style={styles.cardPrice}>{price.toLocaleString()}p</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonActive]}
        onPress={() => onUsePress(coupon)} // '사용하기' 함수 연결
      >
        <Text style={styles.buttonTextActive}>
          사용하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// --- (2) 메인 화면 컴포넌트 ("내 쿠폰함") ---
export default function MyCouponScreen({navigation}) {
  
  const [myCoupons, setMyCoupons] = useState([
    { id: 1, title: '가을 식당 쿠폰', subtitle: '토핑 추가', price: 1000 },
    { id: 2, title: '가을 식당 쿠폰', subtitle: '토핑 추가', price: 1000 },
  ]);

  // --- 2. 모달 상태 변수 수정 ---
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false); // 1번 (사용 확인) 모달
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false); // 2번 (비밀번호) 모달
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [password, setPassword] = useState(''); // 비밀번호 입력을 위한 state

  // '사용하기' 버튼 (카드)
  const handleUsePress = (coupon) => {
    setSelectedCoupon(coupon);
    setConfirmModalVisible(true); // 1번 모달 열기
  };

  // '닫기' 버튼 (1번 모달)
  const closeConfirmModal = () => {
    setConfirmModalVisible(false);
    setSelectedCoupon(null);
  };

  // '사용' 버튼 (1번 모달)
  const confirmUsage = () => {
    setConfirmModalVisible(false); // 1번 모달 닫기
    setPasswordModalVisible(true); // 2번 모달 열기
  };

  // '취소' 버튼 (2번 모달)
  const cancelPasswordModal = () => {
    setPasswordModalVisible(false); // 2번 모달 닫기
    setSelectedCoupon(null); // 모든 선택 초기화
    setPassword(''); // 비밀번호 초기화
  };
  
  // '확인' 버튼 (2번 모달)
  const handlePasswordConfirm = () => {
    // --- (임시) 비밀번호 확인 로직 ---
    if (password === '1234') { 
      // TODO: 실제 쿠폰 사용 로직 (API 호출 등)
      console.log("쿠폰 사용됨:", selectedCoupon?.title);
      
      // 1. 모달 닫기
      setPasswordModalVisible(false);
      
      // 2. 완료 알림
      Alert.alert("쿠폰 사용 완료", `'${selectedCoupon?.title}' 쿠폰이 사용되었습니다.`);
      
      // 3. state 초기화
      setSelectedCoupon(null);
      setPassword('');

      // 4. (선택) 사용한 쿠폰 목록에서 제거
      setMyCoupons(myCoupons.filter(c => c.id !== selectedCoupon?.id));

    } else {
      Alert.alert("오류", "비밀번호가 틀렸습니다.");
      setPassword(''); // 비밀번호 필드만 초기화
    }
  };


  return (
    <View>
        <LinearGradient
          colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
          style={styles.backgroundGradient}
        />
    
    <SafeAreaView>
      {/* --- 커스텀 뒤로가기 버튼 --- */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // ★ 뒤로가기 기능 실행
      >
        <Ionicons name="arrow-back" size={28} color="black" /> 
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.headerContainer}>
          <Image
          source={require('../../../assets/induk.png')}
          style={styles.icon}
          />
          <Text style={styles.text}>
            걸어서 쿠폰을 교환해요
          </Text>
        </View>

        <View style={styles.couponListContainer}>
          {myCoupons.map(coupon => (
            <MyCouponCard
              key={coupon.id}
              coupon={coupon}
              onUsePress={handleUsePress}
            />
          ))}
        </View>
      </ScrollView>

      </SafeAreaView>

      {/* --- 1번 "사용 확인" 모달 --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isConfirmModalVisible}
        onRequestClose={closeConfirmModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>쿠폰 사용</Text>
            <Text style={styles.modalText}>
              <Text style={styles.modalCouponName}>{selectedCoupon?.title}</Text>
            </Text>
            <Text style={styles.modalSubtext}>아래 버튼을 누른 후 사장님께 보여주세요!</Text>

            <View style={styles.modalButtonGroup}>
              <TouchableOpacity
                style={styles.modalButtonConfirm}
                onPress={confirmUsage} // 2번 모달 띄우기
              >
                <Text style={styles.modalButtonTextConfirm}>사용</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonClose}
                onPress={closeConfirmModal}
              >
                <Text style={styles.modalButtonTextClose}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* --- 2번 "비밀번호 입력" 모달 --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isPasswordModalVisible}
        onRequestClose={cancelPasswordModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>비밀번호 입력</Text>
            
            <TextInput
              style={styles.passwordInput}
              placeholder="비밀번호 4자리"
              placeholderTextColor="#B0B0B0"
              secureTextEntry={true} // 비밀번호 가리기
              keyboardType="number-pad" // 숫자 키패드
              maxLength={4} // 4자리 제한
              value={password}
              onChangeText={setPassword}
              autoFocus={true} // 모달 열리면 자동 포커스
            />

            <View style={styles.modalButtonGroup}>
              <TouchableOpacity
                style={styles.modalButtonConfirm}
                onPress={handlePasswordConfirm} // 비밀번호 확인 함수
              >

                <Text style={styles.modalButtonTextConfirm}>확인</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonClose}
                onPress={cancelPasswordModal} // 취소 함수
              >
                <Text style={styles.modalButtonTextClose}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
       </View>
  );
}

