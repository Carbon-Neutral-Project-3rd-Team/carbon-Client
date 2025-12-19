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
    { id: 't0', color: '#FF9F1C', image: require('../../../assets/ForShow/graduate2.png') },
    { id: 't1', color: '#FF9F1C', image: require('../../../assets/Hat/clover.png') },
    { id: 't2', color: '#FF9F1C', image: require('../../../assets/Hat/cap.png') },
    { id: 't3', color: '#FF9F1C', image: require('../../../assets/Hat/headphone.png') },
    { id: 't4', color: '#FF9F1C', image: require('../../../assets/Hat/sunglasses.png') },
    { id: 't5', color: '#FF9F1C', image: require('../../../assets/Hat/deer.png') },
    { id: 't6', color: '#FF9F1C', image: require('../../../assets/Hat/curly.jpg') },
    { id: 't7', color: '#FF9F1C', image: require('../../../assets/Hat/blonde.jpg') },
    { id: 't8', color: '#FF9F1C', image: require('../../../assets/Hat/bear.png') },
    { id: 't9', color: '#FF9F1C', image: require('../../../assets/Hat/Lipstick.png') },
    { id: 't10', color: '#FF9F1C', image: require('../../../assets/Hat/pama.png') },
    { id: 't11', color: '#FF9F1C', image: require('../../../assets/Hat/long.jpg') },
  ],
  top: [
    {id : 't0', color: '#FF9F1C', image: require('../../../assets/ForShow/graduate.png')},
    { id: 't1', color: '#FF9F1C', image: require('../../../assets/Outer/blackSheep.png') },
    { id: 't2', color: '#2EC4B6', image: require('../../../assets/Outer/leather.png') },
    { id: 't3', color: '#FF9F1C', image: require('../../../assets/Outer/swimsuit.png') },
    { id: 't4', color: '#2EC4B6', image: require('../../../assets/Outer/hwaiian.png') },
    { id: 't5', color: '#FF9F1C', image: require('../../../assets/Outer/heavy1.png') },
    { id: 't6', color: '#2EC4B6', image: require('../../../assets/Outer/hoodie1.png') },
    { id: 't7', color: '#FF9F1C', image: require('../../../assets/Outer/heavy2.png') },
    { id: 't8', color: '#2EC4B6', image: require('../../../assets/Outer/jean.png') },
    { id: 't9', color: '#FF9F1C', image: require('../../../assets/Outer/college.png') },
    { id: 't10', color: '#2EC4B6', image: require('../../../assets/Outer/college2.png') },
    { id: 't11', color: '#FF9F1C', image: require('../../../assets/Outer/college3.png') },
    { id: 't12', color: '#2EC4B6', image: require('../../../assets/Outer/leather.png') },
  ],
  bottom: [
    { id: 't0', color: '#FF9F1C', image: require('../../../assets/ForShow/graduate3.png') },
    { id: 't1', color: '#FF9F1C', image: require('../../../assets/Pants/boots.png') },
    { id: 't2', color: '#FF9F1C', image: require('../../../assets/Pants/croocs.png') },
    { id: 't3', color: '#FF9F1C', image: require('../../../assets/Pants/roller.png') },
    { id: 't4', color: '#FF9F1C', image: require('../../../assets/Pants/converse.png') },
    { id: 't5', color: '#FF9F1C', image: require('../../../assets/Pants/red.png') },
    { id: 't6', color: '#FF9F1C', image: require('../../../assets/Pants/board.jpg') },
    { id: 't7', color: '#FF9F1C', image: require('../../../assets/Pants/socks.png') },
    { id: 't8', color: '#FF9F1C', image: require('../../../assets/Pants/boots2.png') },
    { id: 't9', color: '#FF9F1C', image: require('../../../assets/Pants/walker.png') },
    { id: 't10', color: '#FF9F1C', image: require('../../../assets/Pants/purple.jpg') },
    { id: 't11', color: '#FF9F1C', image: require('../../../assets/Pants/sandle.png') },
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
          {/* 이미지가 있으면 이미지를 보여주고, 없으면 배경색을 보여줍니다. */}
          {item.image ? (
            <Image 
              source={item.image} 
              style={styles.gridItemImage} 
              resizeMode="contain" 
            />
          ) : (
            <View style={{ flex: 1, backgroundColor: item.color, borderRadius: 6 }} />
            )}
          </TouchableOpacity>
            ))
            ) : (
          <Text>아이템이 없습니다.</Text>
          )}
          </ScrollView>
                </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={() => {
              // 'MainHome'은 이동하고 싶은 페이지의 이름으로 변경하세요 (예: 'Home', 'Result' 등)
              navigation.navigate('ExtraHome', { 
              selectedDuckImage: currentImage 
            });
          }}
          >
          <Text style={styles.applyButtonText}>적용하기</Text>
        </TouchableOpacity>
        </View>

        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}