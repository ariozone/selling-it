import React from 'react'
import { Platform, Text, StyleSheet } from 'react-native'

export default function AppText({ children }) {

  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'

  }
})
