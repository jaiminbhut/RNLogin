import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Colors } from '../../theme';
import styles from './CustomTextInput.styles';

const ErrorView = (message) => (
  <View style={styles.errorView}>
    <Text style={styles.alertText}>{message?.error}</Text>
  </View>
);

export function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  error,
  keyboardType,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {leftIcon && (
          <View style={styles.viewLeftIcon}>
            <Image style={styles.imageLeftIcon} source={leftIcon} />
          </View>
        )}
        <TextInput
          placeholderTextColor={Colors.gray}
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View>{error && <ErrorView error={error} />}</View>
    </View>
  );
}
