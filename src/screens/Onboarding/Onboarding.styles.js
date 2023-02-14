import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...Layout.fill,
    ...Layout.colCenter,
    backgroundColor: Colors.white,
  },
});

export default styles;
