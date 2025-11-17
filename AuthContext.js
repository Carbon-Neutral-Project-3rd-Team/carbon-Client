// ... (React 및 React Native import)
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

// 1. 인증 Context 생성
const AuthContext = React.createContext();

// AsyncStorage 키
const USER_STORAGE_KEY = '@local_user_';
const LAST_LOGIN_KEY = '@last_logged_in_user';

// 2. 인증 상태를 제공하는 Provider 컴포넌트
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  // 앱 시작 시, AsyncStorage에서 로그인 정보 확인
  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const lastUser = await AsyncStorage.getItem(LAST_LOGIN_KEY);
        if (lastUser) {
          setLoggedInUser(lastUser);
        }
      } catch (e) {
        console.error('Failed to load user status');
      }
      setIsLoading(false);
    };
    checkLoginStatus();
  }, []);

  // Context를 통해 제공할 함수들
  const authContextValue = React.useMemo(
    () => ({
      isLoading,
      loggedInUser,
      
      // 회원가입 함수
      signup: async (username, password) => {
        if (!username || !password) {
          throw new Error('아이디와 비밀번호를 모두 입력하세요.');
        }
        const existingUser = await AsyncStorage.getItem(USER_STORAGE_KEY + username);
        if (existingUser) {
          throw new Error('이미 존재하는 아이디입니다.');
        }
        // ⚠️ 데모용: 실제 앱에선 비밀번호를 암호화해야 합니다.
        await AsyncStorage.setItem(USER_STORAGE_KEY + username, password);
      },

      // 로그인 함수
      login: async (username, password) => {
        if (!username || !password) {
          throw new Error('아이디와 비밀번호를 모두 입력하세요.');
        }
        const storedPassword = await AsyncStorage.getItem(USER_STORAGE_KEY + username);
        if (storedPassword && storedPassword === password) {
          setLoggedInUser(username);
          await AsyncStorage.setItem(LAST_LOGIN_KEY, username);
        } else {
          throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      },

      // 로그아웃 함수
      logout: async () => {
        setLoggedInUser(null);
        await AsyncStorage.removeItem(LAST_LOGIN_KEY);
      },
    }),
    [isLoading, loggedInUser]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Context를 쉽게 사용하기 위한 Custom Hook
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

