import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

function ErrorMessage({ error }) {
  if (!error) return null
  return (
    <AppText style={styles.message}>{error}</AppText>
  );
}
const styles = StyleSheet.create({
  message: { color: 'red', fontSize: 14 }
})
export default ErrorMessage;
