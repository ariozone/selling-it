import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, SafeAreaView, Alert } from "react-native"
import { Button } from "react-native"

export default function App() {
  const handlePress = () => {
    Alert.alert("Message:", "Do you want to continiue?", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title='Click Me' onPress={handlePress} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
