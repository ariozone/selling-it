
import React from "react"
import { Dimensions } from "react-native"
import { View } from "react-native"
import { StyleSheet, SafeAreaView, Alert, Platform, StatusBar } from "react-native"
import { Button } from "react-native"

export default function App() {
  console.log(Dimensions.get('screen'))
  // const handlePress = () => {
  //   Alert.alert("Message:", "Do you want to continiue?", [
  //     { text: "Yes", onPress: () => console.log("Yes") },
  //     // { text: "Maybe", onPress: () => console.log("Maybe") },
  //     { text: "No", onPress: () => console.log("No") },
  //   ])
  //   // Alert.prompt("Message:", "Enter message here:", (text) => console.log(text))
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title='Click Me!' onPress={handlePress} /> */}
      <View style={{ backgroundColor: 'dodgerblue', width: '50%', height: 70 }}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // alignItems: "center",
    // justifyContent: "center",
  },
})
