import { useNavigation } from '@react-navigation/native';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
} from 'react-native';
import styles from '../../styles/CouponScreen/couponShop';

// --- (1) 쿠폰 카드 컴포넌트 ---
// 이 컴포넌트를 별도 파일로 분리해서 사용해도 좋습니다.
const CouponCard = ({ title, subtitle, price, userPoints, coupon, onExchangePress }) => {
  // 현재 포인트로 교환 가능한지 여부 판단
  const canExchange = userPoints >= price;

  return (
    <View style={styles.card}>
      {/* 1. 왼쪽 (이미지 + 텍스트) */}
      <View style={styles.cardLeft}>
        {/* // 실제 이미지를 사용할 경우
          <Image source={imageSource} style={styles.cardImage} /> 
        */}
        
        {/* (임시) 이미지 플레이스홀더 */}
        <View style={styles.cardImagePlaceholder} />

        {/* 텍스트 묶음 */}
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
          <Text style={styles.cardPrice}>{price.toLocaleString()}p</Text>
        </View>
      </View>

      {/* 2. 오른쪽 (교환하기 버튼) */}
      <TouchableOpacity
        style={[
          styles.button,
          canExchange ? styles.buttonActive : styles.buttonDisabled,
        ]}
        disabled={!canExchange}
        onPress={() => {onExchangePress(coupon)}} // 교환 불가능하면 버튼 비활성화
      >
        <Text
          style={[
            styles.buttonText,
            canExchange ? styles.buttonTextActive : styles.buttonTextDisabled,
          ]}
        >
          교환하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// --- (2) 메인 화면 컴포넌트 ---
export default function App() {
  //const currentUserPoints = 1523; // 사용자의 현재 보유 포인트
 // const currentUserCoupons = 2; // 사용자의 현재 보유 쿠폰 수

  // (임시) 쿠폰샵 목록 데이터
  const couponList = [
    {
      id: 1,
      title: '가을 식당 쿠폰',
      subtitle: '토핑 추가',
      price: 1000,
      // image: require('./assets/autumn-coupon.png') // 실제 이미지 경로
    },
    {
      id: 2,
      title: '가을 식당 쿠폰',
      subtitle: '토핑 추가',
      price: 2000,
      // image: require('./assets/autumn-coupon.png')
    },
    {
      id: 3,
      title: '가을 식당 쿠폰',
      subtitle: '토핑 추가',
      price: 1000,
      // image: require('./assets/autumn-coupon.png')
    },
  ];

  const [userPoints, setUserPoints] = useState(1523);
  const [userCoupons, setUserCoupons] = useState(2);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleExchangePress = (coupon) => {
    setSelectedCoupon(coupon);
    setModalVisible(true);
    };

  const confirmExchange = () => {
    if(!selectedCoupon){
        return;
    }

    const newPoints = userPoints - selectedCoupon.price;
    setUserPoints(newPoints);

    setUserCoupons(userCoupons + 1);

    setModalVisible(false);
    setSuccessModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCoupon(null);
    };

  const navigation = useNavigation();

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
    setSelectedCoupon(null);
    navigation.navigate('MyCoupon');
  }


  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar barStyle="dark-content" />
      <View style={styles.infoBar}> 
          <Text style={styles.infoText}>보유 쿠폰: <Text style={styles.infoValue}>{userCoupons}</Text>개</Text>
          <Text style={styles.infoText}>보유 포인트: <Text style={styles.infoValue}>{userPoints.toLocaleString()}</Text>p</Text>
        </View>

      <ScrollView contentContainerStyle={styles.container}>
 
        {/* 3. 쿠폰 목록 */}
        <View style={styles.couponListContainer}>
          {couponList.map(coupon => (
            <CouponCard
              key={coupon.id}
              title={coupon.title}
              subtitle={coupon.subtitle}
              price={coupon.price}
              userPoints={userPoints}
              onExchangePress={handleExchangePress}
              coupon={coupon}
              // imageSource={coupon.image} // 실제 이미지를 넘길 때
            />
          ))}
        </View>


        {/* 교환 확인 모달 */}
        <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
        >
        <View style={styles.modalBackdrop}>
            <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>쿠폰을 교환하시겠습니까?</Text>

            <Text style={styles.modalText}>
                '{selectedCoupon?.title}'을 {selectedCoupon?.price.toLocaleString()}p로교환합니다.
            </Text>

            <View style={styles.modalButtonGroup}>
                <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonClose]}
                onPress={closeModal}
                >
                <Text style={styles.modalButtonTextClose}>닫기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonConfirm]}
                onPress={confirmExchange} // 로직 처리 후 모달 닫기}
              >
                <Text style={styles.modalButtonTextConfirm}>교환하기</Text>
              </TouchableOpacity>
             </View>
            </View>
          </View>
        </Modal>

        <Modal
        animationType="fade"
        transparent={true}
        visible={isSuccessModalVisible} // 2번 모달 state와 연결
        onRequestClose={closeSuccessModal}
      >
        <View style={styles.successModalBackdrop}>
          <View style={styles.successModalContent}>
            <Text style={styles.successModalTitle}>쿠폰 교환이 완료되었습니다.</Text>
            <Text style={styles.successModalSubtitle}>내 쿠폰함에서 확인해주세요!</Text>
            <Text style={styles.successModalPoints}>
              보유 포인트: {userPoints.toLocaleString()}p
            </Text>
            
            <TouchableOpacity
              style={styles.successModalButton}
              onPress={closeSuccessModal} // 2번 모달 '닫기' 함수 연결
            >
              <Text style={styles.successModalButtonText}>내 쿠폰함</Text>
              <Text style={styles.successModalButtonIcon}> &gt; </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}