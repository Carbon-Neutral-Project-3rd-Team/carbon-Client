import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/HomeScreen/FittingRoom';

// === 데이터 구성 (이전과 동일) ===
const BASE_DUCK_IMAGE = require('../../../assets/induk_nukki.png'); 

const CATEGORIES = [
  { id: 'hat', icon: '🧢', label: '모자' },
  { id: 'top', icon: '👕', label: '상의' },
  { id: 'bottom', icon: '👖', label: '하의' },
];

const ITEMS = { //해당하는 아이템을 입은 인덕이를 보여주기 위한 더미 데이터
    //각 카테고리를 입은 인덕이를 나열합니다.
  hat: [ 
    { id: 'h1', color: '#FF6B6B', image: null }, 
    { id: 'h2', color: '#FFD93D', image: null },
    { id: 'h3', color: '#6BCB77', image: null },
  ],
  top: [
    { id: 't1', color: '#FF9F1C', image: null },
    { id: 't2', color: '#2EC4B6', image: null },
    { id: 't3', color: '#E71D36', image: null },
  ],
  bottom: [
    { id: 'b1', color: '#011627', image: null },
    { id: 'b2', color: '#5C3C92', image: null },
  ]
};

export default function App({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState('hat');
  const [currentImage, setCurrentImage] = useState(BASE_DUCK_IMAGE);

  const handleSelectItem = (item) => {
    // 만약 현재 입고 있는 이미지가, 내가 방금 누른 아이템의 이미지와 같다면?
    if (currentImage === item.image) {
       // 벗는다 (기본 이미지로 돌아감)
       setCurrentImage(BASE_DUCK_IMAGE);
    } else {
       // 입는다 (새 아이템 이미지로 변경)
       setCurrentImage(item.image);
    }
  };


  return (
    <LinearGradient
  // 핑크 -> 연보라 -> 하늘색으로 이어지는 파스텔톤
    colors={['#FF9A9E', '#FECFEF', '#E0C3FC']}
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} // 대각선 방향
    style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>

        <View style={{paddingVertical: 10,}}>
                {/* 커스텀 Back 버튼 */}
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{
                    justifyContent: 'center',
                    width:40,
                    height: 40,
                    marginLeft:20,
                  }}
                >
                  <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

        <View style={styles.contentContainer}>

          {/* === 1. 상단: 캐릭터 표시 영역 === */}
          <View style={styles.previewSection}>
            <View style={styles.avatarContainer}>
              {currentImage ? (
                <Image 
                  source={currentImage} 
                  style={styles.fullImage} 
                  resizeMode="cover" 
                />
              ) : (
                <View style={styles.placeholderDuck}>
                   <Text style={{ fontSize: 120 }}>🦆</Text>
                   <Text style={{ marginTop: 20, color: '#555', fontWeight: 'bold' }}>이미지 준비중</Text>
                </View>
              )}
            </View>
          </View>

          {/* === 2. 하단: UI 영역 === */}
          <View style={styles.uiWindow}>
            <View style={styles.uiBody}>
              
              {/* (A) 카테고리 탭 (왼쪽 고정) */}
              <View style={styles.categorySidebar}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {CATEGORIES.map((cat) => (
                    <TouchableOpacity
                      key={cat.id}
                      style={[
                        styles.categoryTab,
                        selectedCategory === cat.id && styles.activeCategoryTab
                      ]}
                      onPress={() => setSelectedCategory(cat.id)}
                    >
                      <Text style={styles.categoryIcon}>{cat.icon}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* (B) 아이템 리스트 (나머지 영역) */}
              <View style={styles.itemGridArea}>
                <ScrollView contentContainerStyle={styles.itemGridContent}>
                  {ITEMS[selectedCategory] ? (
                    ITEMS[selectedCategory].map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        style={styles.gridItem}
                        onPress={() => handleSelectItem(item)}
                      >
                        <View style={{ flex: 1, backgroundColor: item.color, borderRadius: 6 }} />
                      </TouchableOpacity>
                    ))
                  ) : (
                    <Text>아이템이 없습니다.</Text>
                  )}
                </ScrollView>
              </View>

            </View>
          </View>

        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}