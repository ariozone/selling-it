import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, SafeAreaView, Alert } from "react-native"
import { Button } from "react-native"

export default function App() {
  console.log('App executed')
  const handlePress = () => {
    Alert.alert("Message:", "Do you want to continiue?", [
      { text: "Yes", onPress: () => console.log("Yes") },
      // { text: "Maybe", onPress: () => console.log("Maybe") },
      { text: "No", onPress: () => console.log("No") },
    ])
    // Alert.prompt("Message:", "Enter message here:", (text) => console.log(text))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title='Click Me!' onPress={handlePress} />
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
