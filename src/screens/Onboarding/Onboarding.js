import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomButton } from '../../components';
import { NAVIGATION } from '../../constants';
import { strings } from '../../lang';
import { getUser } from '../../selectors/auth';
import { isNull } from '../../utils/helper';
import styles from './Onboarding.styles';

const handleTaskButtonPress = (navigation, task, user) => {
  if (task === 1) {
    if (!isNull(user)) {
      navigation.navigate(NAVIGATION.UserDetails);
    } else {
      navigation.navigate(NAVIGATION.Login);
    }
  } else {
    navigation.navigate(NAVIGATION.GetButtons);
  }
};

export function Onboarding() {
  const navigation = useNavigation();

  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <CustomButton
        title={strings.task1}
        onPress={() => handleTaskButtonPress(navigation, 1, user)}
      />
      <CustomButton
        title={strings.task2}
        onPress={() => handleTaskButtonPress(navigation, 2, {})}
      />
    </View>
  );
}
