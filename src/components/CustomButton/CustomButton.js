import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './CustomButton.styles';

export function CustomButton({ title, customStyle, onPress, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={StyleSheet.flatten([
        styles.container,
        disabled && styles.disabled,
        customStyle,
      ])}>
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
