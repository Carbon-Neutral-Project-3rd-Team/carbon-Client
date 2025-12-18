import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, TouchableOpacity, 
  SafeAreaView, Dimensions, Modal 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/CouponScreen/couponShop';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75;
const CARD_GAP = 20;
const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;

const CARD_DATA = [
  {
    id: 1,
    title: '리워드 교환',
    brand: '카페 더 스토리',
    desc: '사이즈업',
    price: 500,
    bgColor: '#EFF6FF',
    btnColor: '#3B82F6',
  },
  {
    id: 2,
    title: '기간 한정 이벤트',
    brand: '카페 더 스토리',
    desc: '사이즈업 + 원두 선택',
    price: 1000,
    bgColor: '#FFF8E1',
    btnColor: '#FFB300',
  },
  {
    id: 3,
    title: '누적 이벤트',
    brand: '카페 더 스토리',
    desc: '아메리카노 1+1 쿠폰',
    price: 2000,
    bgColor: '#FFEBEE',
    btnColor: '#E53935',
  },
];

export default function App({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userPoints, setUserPoints] = useState(1523);
  const [userCoupons, setUserCoupons] = useState(2);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / SNAP_INTERVAL);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleExchangePress = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  const handleConfirmExchange = () => {
    if (selectedCard) {
      setUserPoints(prev => prev - selectedCard.price);
      setUserCoupons(prev => prev + 1);
    }
    setModalVisible(false);
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 300);
  };

  const handleGoToMyCoupon = () => {
    setSuccessModalVisible(false);
    navigation.navigate('MyCoupon');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#DDF5D3', '#F3FBF0', '#FFFFFF']}
        style={styles.backgroundGradient}
      />

      <SafeAreaView style={styles.safeArea}>
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

        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={SNAP_INTERVAL}
            snapToAlignment="start"
            contentContainerStyle={styles.carouselContent}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {CARD_DATA.map((item, index) => {
              const isAffordable = userPoints >= item.price;
              return (
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
                    <Text style={{ marginTop: 5, fontSize: 25, fontWeight: 'bold', color: '#aa0b0bff' }}>
                      {item.price.toLocaleString()}P
                    </Text>
                  </View>

                  <TouchableOpacity 
                    onPress={() => handleExchangePress(item)}
                    disabled={!isAffordable} 
                    style={[
                      styles.exchangeButton, 
                      { backgroundColor: isAffordable ? item.btnColor : '#C4C4C4' }
                    ]}
                  >
                    <Text style={styles.exchangeButtonText}>
                      {isAffordable ? '교환하기' : '포인트 부족'} 
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.cardIconPlaceholder}>
                    <MaterialCommunityIcons name="gift" size={40} color={item.btnColor} style={{ opacity: 0.5 }} />
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.paginationContainer}>
            {CARD_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { backgroundColor: activeIndex === index ? '#FF8A3D' : '#DDD' },
                  activeIndex === index && styles.activeDot
                ]}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCard && (
              <>
                <MaterialCommunityIcons name="check-decagram" size={50} color={selectedCard.btnColor} style={{ marginBottom: 10 }} />
                <Text style={styles.modalTitle}>쿠폰을 교환하시겠어요?</Text>
                
                <View style={styles.modalInfoBox}>
                  <Text style={styles.modalBrand}>{selectedCard.brand}</Text>
                  <Text style={styles.modalDesc}>{selectedCard.desc}</Text>
                  <Text style={[styles.modalPoint, { color: selectedCard.btnColor }]}>
                    -{selectedCard.price}P 차감
                  </Text> 
                </View>

                <View style={styles.modalButtons}>
                  <TouchableOpacity 
                    style={[styles.modalBtn, styles.modalBtnCancel]} 
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalBtnTextCancel}>취소</Text>
                  </TouchableOpacity>
                  
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

      <Modal 
        animationType="fade" 
        transparent={true} 
        visible={successModalVisible} 
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons name="check-circle" size={60} color="#4CAF50" style={{ marginBottom: 15 }} />
            <Text style={styles.successTitle}>교환 완료!</Text>
            <Text style={styles.successDesc}>쿠폰이 정상적으로 발급되었습니다.</Text>
            
            <TouchableOpacity style={styles.goToCouponBtn} onPress={handleGoToMyCoupon}>
              <Text style={styles.goToCouponBtnText}>내 쿠폰함으로 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeTextBtn} onPress={() => setSuccessModalVisible(false)}>
              <Text style={styles.closeText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}