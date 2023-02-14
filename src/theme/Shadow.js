import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { vs } from './Spacing';

/*
 * generated with https://ethercreative.github.io/react-native-shadow-generator/
 * to get the same shadow on both platforms
 */
export const Shadow = StyleSheet.create({
  primary: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: vs(5),
    zIndex: vs(14),
  },
  light: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: vs(5),
    zIndex: vs(14),
  },
});
