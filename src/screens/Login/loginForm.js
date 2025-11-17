import React,  {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, 
  Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,
  Platform } from 'react-native';
import { useAuth } from '../../../AuthContext';
import styles from '../../styles/Loginscreen/LoginPage';

const AuthScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, signup } = useAuth();

    const handleSignup = async () => {
        if(!username || !password){
            Alert.alert('오류', '아이디와 비밀번호를 모두 입력하세요');
            return;
        }
        try{
            await signup(username, password);
            Alert.alert('성공', '회원가입이 완료되었습니다. 로그인해주세요.');
        }catch(e){
            Alert.alert('오류', e.message);
        }
    };

    const handleLogin = async () => {
        if(!username || !password){
            Alert.alert('오류', '아이디와 비밀번호를 모두 입력하세요.');
            return;
        }
        try{
            await login(username, password);
        }catch(e){
            Alert.alert('오류', e.message);
        }
    };
 
    return(
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <KeyboardAvoidingView
      style={styles.KeyboardAvoid}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
  <View style={styles.container}>
    {/* 폼 입력창 */}
    <Image
    source={require('../../../assets/icon.png')}
    style={styles.logo}
    />
    <TextInput 
      style={styles.formInput} 
      placeholder="아이디" 
      value={username}
      onChangeText={setUsername}
      autoCapitalize="none"
    />
    <TextInput
      style={styles.formInput}
      placeholder="비밀번호"
      secureTextEntry // 비밀번호 가리기
      value={password}
      onChangeText={setPassword}
    />

    {/* 버튼 */}
    <TouchableOpacity style={[styles.btn, styles.btnNext]}
    onPress={handleLogin}>
      <Text style={styles.btnText}>다음</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, styles.btnSignup]}
    onPress={handleSignup}>
      <Text style={styles.btnText}>회원가입</Text>
    </TouchableOpacity>
  </View>
  </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
    );
}

export default AuthScreen;