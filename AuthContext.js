// ... (React 및 React Native import)
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

// 1. 인증 Context 생성
const AuthContext = React.createContext();

// AsyncStorage 키
const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const USER_KEY = "USER";

// 2. 인증 상태를 제공하는 Provider 컴포넌트
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  // 앱 시작 시, AsyncStorage에서 로그인 정보 확인
  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        const storedUser = await AsyncStorage.getItem(USER_KEY);

        if (token && storedUser) {
          setLoggedInUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Auth check failed", e);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  // Context를 통해 제공할 함수들
  const authContextValue = React.useMemo(
    () => ({
      isLoading,
      loggedInUser,

      // 회원가입 함수
      signup: async (email, password, name) => {
        try {
          const res = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
          });

          if (!res.ok) {
            throw new Error("회원가입 실패");
          }
        } catch (err) {
          console.error(err);
          throw err; // UI부분에서 catch해서 alert
        }
      },

      // 로그인 함수
      login: async (email, password) => {
        try {
          const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          if (!res.ok) {
            throw new Error("로그인 실패");
          }

          const data = await res.json();
          /**
           * 예상 응답
           * {
           *   accessToken: "...",
           *   user: { id, email, name, role }
           * }
           */

          await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
          await AsyncStorage.setItem(USER_KEY, JSON.stringify(data.user));

          setLoggedInUser(data.user);
        } catch (err) {
          console.log(err);
          throw err; // UI부분에서 catch해서 alert
        }
      },

      // 로그아웃 함수
      logout: async () => {
        await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
        await AsyncStorage.removeItem(USER_KEY);
        setLoggedInUser(null);
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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
