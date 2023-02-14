import { StyleSheet } from 'react-native';
import { Colors, Layout, Shadow, hs, ms, vs } from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...Layout.fill,
    backgroundColor: Colors.white,
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    marginTop: '40%',
    backgroundColor: Colors.orange,
  },
  formContainer: {
    position: 'absolute',
    width: '90%',
    marginTop: '10%',
    borderRadius: ms(8),
    paddingHorizontal: hs(15),
    ...Layout.selfCenter,
    backgroundColor: Colors.white,
    ...Shadow.primary,
  },
  viewAppLogo: {
    marginVertical: vs(40),
    ...Layout.selfCenter,
    height: ms(80),
    width: ms(80),
  },
  imgAppLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  outline: {
    height: ms(14),
    width: ms(14),
    borderWidth: ms(1),
    marginEnd: hs(10),
    borderRadius: ms(2),
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  filled: {
    borderColor: Colors.gray,
    backgroundColor: Colors.orange,
  },
  checkView: {
    ...Layout.rowHCenter,
    marginVertical: vs(4),
  },
  textRememberMe: {
    fontSize: ms(12),
    color: Colors.black,
  },
  textForgotPassword: {
    color: Colors.orange,
  },
  btnSignIn: {
    marginVertical: vs(30),
  },
  textPrivacyPolicy: {
    color: Colors.orange,
    fontSize: ms(10),
    paddingVertical: vs(4),
    marginBottom: vs(20),
    ...Layout.selfCenter,
  },
  textAnd: {
    color: Colors.gray,
  },
  textVersion: {
    backgroundColor: Colors.orange,
    color: Colors.white,
    fontSize: ms(10),
    textAlign: 'center',
    paddingBottom: vs(10),
  },
  alertText: {
    fontSize: ms(12),
    color: Colors.red,
    textAlign: 'center',
    marginLeft: hs(5),
  },
});

export default styles;
