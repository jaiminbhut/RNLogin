import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import { NAVIGATION } from '../../constants';
import { strings } from '../../lang';
import { isNull } from '../../utils/helper';
import styles from './GetButtons.styles';

const handleShowButtons = (navigation, count) => {
  navigation.navigate(NAVIGATION.ShowButtons, {
    count: count,
  });
};

export function GetButtons() {
  const navigation = useNavigation();
  const [count, setCount] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        value={`${count}`}
        onChangeText={(text) => setCount(text.replace(/[^0-9]/g, ''))}
        keyboardType={'number-pad'}
        placeholder={strings.enterNumber}
      />
      <CustomButton
        disabled={isNull(count)}
        title={strings.showButtons}
        onPress={() => handleShowButtons(navigation, count)}
      />
    </View>
  );
}
