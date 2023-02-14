import { StyleSheet } from 'react-native';
import { Colors, Layout, hs } from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...Layout.fill,
    backgroundColor: Colors.white,
    paddingHorizontal: hs(15),
  },
});

export default styles;
