import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  KeyboardAvoid:{
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo:{
    width: 300,
    height: 300,
    resizeMode:'contain',
    marginBottom: 50,
  },
  formInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f7',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  btnNext: {
    backgroundColor: '#589bff',
  },
  btnSignup: {
    backgroundColor: '#b0b0b0',
  },
  btnKakao: {
    backgroundColor: '#fee500',
  },
  btnNaver: {
    backgroundColor: '#03c75a',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  btnTextBlack: {
    color: '#000000',
  },
});

export default styles;