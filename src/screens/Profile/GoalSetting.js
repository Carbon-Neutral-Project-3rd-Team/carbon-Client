import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  SafeAreaView, 
  ScrollView, 
  StatusBar,
  Platform, // 안드로이드/iOS 스타일 분기를 위해 import
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/ProfileScreen/GoalSetting';
import { Ionicons } from '@expo/vector-icons';

const CALORIE_KEY = '@my_calorie_goal';
const STEP_KEY = '@my_step_goal';


export default function App({navigation}) {
  // 입력값을 관리하기 위한 state
  const [calorieGoal, setCalorieGoal] = useState('');
  const [stepGoal, setStepGoal] = useState('');

  useEffect(() => {
    // 앱 시작 시 AsyncStorage에서 저장된 목표 불러오기
    loadgoals();
    }, []);

    const loadgoals = async () => {
        try {
            const savedCalorieGoal = await AsyncStorage.getItem(CALORIE_KEY);
            const savedStepGoal = await AsyncStorage.getItem(STEP_KEY);
            if (savedCalorieGoal !== null) {
                setCalorieGoal(savedCalorieGoal);
            }
            if (savedStepGoal !== null) {
                setStepGoal(savedStepGoal);
            }
        } catch (e) {
            console.error('Failed to load goals.', e);
        }
    };

    const  handleSave = async () => {
        if(!calorieGoal && !stepGoal) {
            alert('저장할 목표가 없습니다.');
            return;
        }
        try{
            await AsyncStorage.setItem(CALORIE_KEY, calorieGoal);
            await AsyncStorage.setItem(STEP_KEY, stepGoal);
            Alert.alert('완료', '목표가 저장되었습니다!');
        }
        catch(e){
            Alert.alert('저장 실패', '목표 저장에 실패했습니다. 다시 시도해주세요.');
            console.error('Failed to save goals.', e);
        }
    };
 
  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>

      <View style={styles.DefaultContainer}>

        <LinearGradient
                colors={['#5a9cd0', '#F3FBF0', '#ffffff']}
                style={styles.backgroundGradient}
              />
              
    <SafeAreaView style={styles.safeArea}>

      <View style={{paddingVertical: 10,}}>
        {/* 내가 만든 커스텀 Back 버튼 */}
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

      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        
        {/* 칼로리 카드 */}
        <View style={styles.goalCard}>
          <Text style={styles.cardTitle}>현재 목표 칼로리</Text>
          <Text style={styles.currentValue}>
            <Text style={styles.calorieText}>{calorieGoal}</Text>
            <Text style={styles.unit}>kcal</Text>
        </Text>
          <TextInput
            style={styles.input}
            placeholder="목표를 입력하세요!"
            placeholderTextColor="#aaa"
            keyboardType="numeric" // 숫자 키패드 표시
            value={calorieGoal}
            onChangeText={setCalorieGoal}
          />
        </View>

        {/* 걸음 수 카드 */}
        <View style={styles.goalCard}>
          <Text style={styles.cardTitle}>현재 목표 걸음 수</Text>
          <Text style={styles.currentValue}>
            <Text style={styles.stepsText}>{stepGoal}</Text>
            <Text style={styles.unit}>보</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="목표를 입력하세요!"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={stepGoal.toLocaleString()}
            onChangeText={setStepGoal}
          />
        </View>

        <TouchableOpacity style={styles.saveButton}
            onPress={handleSave}>
            <Text style={styles.saveButtonText}>목표 저장</Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
    </View>
    </TouchableWithoutFeedback>
  );
}
