import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, TouchableOpacity, 
  SafeAreaView, Dimensions, NativeSyntheticEvent, NativeScrollEvent,
  Modal, Alert 
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/CouponScreen/couponShop';
// 화면 너비 가져오기
const { width } = Dimensions.get('window');

// 카드 설정값
const CARD_WIDTH = width * 0.75; // 화면의 75% 크기 (다음 카드가 보이게)
const CARD_GAP = 20; // 카드 사이 간격
const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP; // 스크롤이 멈출 간격

// 더미 데이터 (여러 장의 카드를 보여주기 위함)
const CARD_DATA = [
  {
    id: 1,
    title: '리워드 교환',
    brand: '카페 더 스토리',
    desc: '사이즈업',
    price: 500,
    bgColor: '#EFF6FF', // 연한 파랑
    btnColor: '#3B82F6', // 파랑
  },
  {
    id: 2,
    title: '기간 한정 이벤트',
    brand: '더 스토리',
    desc: '아메리카노 1+1 쿠폰',
    price: 1000,
    bgColor: '#FFF8E1', // 연한 노랑
    btnColor: '#FFB300', // 짙은 노랑 (알다 스타일)
  },
  {
    id: 3,
    title: '제휴 할인',
    brand: 'CGV 영화관',
    desc: '3천원 즉시 할인',
    price: 2000,
    bgColor: '#FFEBEE', // 연한 빨강
    btnColor: '#E53935', // 빨강
  },
];

export default function App({navigation}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // 스크롤 시 현재 페이지 계산 함수
  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    // 현재 스크롤 위치를 카드 크기로 나누어 인덱스 계산 (반올림)
    const index = Math.round(x / SNAP_INTERVAL);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleExchangePress = (item) => {
    setSelectedCard(item); // 선택된 카드 정보 저장
    setModalVisible(true); // 모달 열기
  };

  const handleConfirmExchange = () => {

    if (selectedCard) {
        setUserPoints(prev => prev - selectedCard.price);
        setUserCoupons(prev => prev + 1);
    }

    setModalVisible(false);
    // 교환 성공 알림 (Alert)
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 300);
  };

  const handleGoToMyCoupon = () => {
    setSuccessModalVisible(false);
    // 실제 앱에서는 여기서 네비게이션 이동 코드를 작성합니다.
    // 예: navigation.navigate('MyCouponBox');
    navigation.navigate('MyCoupon');
  };

  const [userPoints, setUserPoints] = useState(1523); //유저가 현재 가지고 있는 point
  const [userCoupons, setUserCoupons] = useState(2); //유저가 현재 가지고 있는 쿠폰 수


  return (
    <View style={styles.container}>
      {/* 배경 그라데이션 */}
      <LinearGradient
        colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
        style={styles.backgroundGradient}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* 상단 헤더 및 유저 정보 (기존 유지) */}
        <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>쿠폰샵</Text>
            <View style={styles.userInfo}>
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>👣 인하대학교</Text>
                </View>
                <Text style={styles.userName}>김인하 님</Text>
                <Text style={styles.subText}>오늘도 많이 걸으셨나요?</Text>
                <View style={styles.statsRow}>
                    <Text style={styles.pointText}>ⓟ {userPoints}P</Text>
                    <Text style={styles.ticketText}> 🎟 {userCoupons}장</Text>
                </View>
            </View>
        </View>

        {/* --- [핵심] 가로 스크롤 카드 영역 --- */}
        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled={false} // snapToInterval을 쓰려면 false여야 부드러움
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast" // 스크롤 감속 속도를 빠르게 (딱 붙는 느낌)
            snapToInterval={SNAP_INTERVAL} // 카드 너비 + 간격만큼 스냅
            snapToAlignment="start" // 시작점 기준으로 스냅
            contentContainerStyle={styles.carouselContent} // 좌우 여백
            onScroll={handleScroll}
            scrollEventThrottle={16} // 부드러운 이벤트 수신
          >
            {CARD_DATA.map((item, index) => {

              const isAffordable = userPoints >= item.price;

              return(
              <View 
                key={item.id} 
                style={[
                  styles.cardItem, 
                  { 
                    backgroundColor: item.bgColor,
                    width: CARD_WIDTH,
                    marginRight: index === CARD_DATA.length - 1 ? 0 : CARD_GAP 
                  }
                ]}
              >
                <View style={styles.cardTextContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardBrand}>{item.brand}</Text>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                  <Text style={{marginTop: 5, fontSize: 16, fontWeight: 'bold', color: '#555'}}>
                        {item.price.toLocaleString()}P
                    </Text>
                </View>

                {/* 교환하기 버튼 */}
                <TouchableOpacity 
                  onPress={() => handleExchangePress(item)}
                  disabled={!isAffordable} 
                  style={[
                    styles.exchangeButton, 
                    { 
                      backgroundColor: isAffordable ? item.btnColor : '#C4C4C4' 
                    }
                  ]}
                >
                <Text style={styles.exchangeButtonText}>
                  {isAffordable ? '교환하기' : '포인트 부족'}
                </Text>
                
                </TouchableOpacity>

                {/* 일러스트 플레이스홀더 (우측 아이콘 느낌) */}
                <View style={styles.cardIconPlaceholder}>
                    <MaterialCommunityIcons name="gift" size={40} color={item.btnColor} style={{opacity: 0.5}}/>
                </View>
              </View>
              );
            })}
          </ScrollView>



          {/* 페이지네이션 점 (Dots) */}
          <View style={styles.paginationContainer}>
            {CARD_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { backgroundColor: activeIndex === index ? '#FF8A3D' : '#DDD' }, // 활성: 주황색, 비활성: 회색
                  activeIndex === index && styles.activeDot // 활성 시 크기 변경 등
                ]}
              />
            ))}
          </View>
        </View>

      </SafeAreaView>

      <Modal
        animationType="fade" // 모달 등장 애니메이션 (slide, fade, none)
        transparent={true} // 배경을 투명하게 해서 뒤가 비치게 함
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // 안드로이드 뒤로가기 대응
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCard && (
              <>
                <MaterialCommunityIcons name="check-decagram" size={50} color={selectedCard.btnColor} style={{marginBottom:10}} />
                <Text style={styles.modalTitle}>쿠폰을 교환하시겠어요?</Text>
                
                <View style={styles.modalInfoBox}>
                  <Text style={styles.modalBrand}>{selectedCard.brand}</Text>
                  <Text style={styles.modalDesc}>{selectedCard.desc}</Text>
                  <Text style={[styles.modalPoint, {color: selectedCard.btnColor}]}>
                     -{selectedCard.point} 차감
                  </Text>
                </View>

                <View style={styles.modalButtons}>
                  {/* 취소 버튼 */}
                  <TouchableOpacity 
                    style={[styles.modalBtn, styles.modalBtnCancel]} 
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalBtnTextCancel}>취소</Text>
                  </TouchableOpacity>
                  
                  {/* 확인 버튼 */}
                  <TouchableOpacity 
                    style={[styles.modalBtn, { backgroundColor: selectedCard.btnColor }]} 
                    onPress={handleConfirmExchange}
                  >
                    <Text style={styles.modalBtnTextConfirm}>확인</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={successModalVisible} onRequestClose={() => setSuccessModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons name="check-circle" size={60} color="#4CAF50" style={{marginBottom: 15}} />
            <Text style={styles.successTitle}>교환 완료!</Text>
            <Text style={styles.successDesc}>쿠폰이 정상적으로 발급되었습니다.</Text>
            
            {/* 내 쿠폰함으로 이동 버튼 */}
            <TouchableOpacity style={styles.goToCouponBtn} onPress={handleGoToMyCoupon}>
              <Text style={styles.goToCouponBtnText}>내 쿠폰함으로 이동</Text>
            </TouchableOpacity>

            {/* 닫기 버튼 (선택 사항) */}
            <TouchableOpacity style={styles.closeTextBtn} onPress={() => setSuccessModalVisible(false)}>
              <Text style={styles.closeText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

