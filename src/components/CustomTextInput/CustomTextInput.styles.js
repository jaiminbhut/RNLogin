import { StyleSheet } from 'react-native';
import { Colors, Layout, hs, ms, vs } from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(10),
  },
  innerContainer: {
    height: vs(50),
    borderWidth: ms(1),
    borderColor: Colors.gray,
    paddingHorizontal: hs(14),
    borderRadius: ms(4),
    ...Layout.rowHCenter,
  },
  viewLeftIcon: {
    height: ms(22),
    width: ms(22),
    marginEnd: hs(10),
  },
  imageLeftIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    tintColor: Colors.orange,
  },
  textInput: {
    height: vs(50),
    ...Layout.fill,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: ms(14),
    color: Colors.black,
  },
  errorView: {
    marginVertical: vs(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertText: {
    fontSize: ms(10),
    color: Colors.red,
    marginLeft: hs(5),
  },
});

export default styles;
