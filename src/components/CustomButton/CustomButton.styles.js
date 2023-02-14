import { StyleSheet } from 'react-native';
import { Colors, Layout, hs, ms, vs } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange,
    paddingVertical: vs(10),
    paddingHorizontal: hs(20),
    borderRadius: ms(4),
    marginVertical: vs(10),
    ...Layout.colCenter,
    ...Layout.selfCenter,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
  textTitle: {
    fontSize: ms(14),
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default styles;
