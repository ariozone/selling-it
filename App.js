import React from "react"
//import { Dimensions } from "react-native"
import { View } from "react-native"
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
// import { StyleSheet, SafeAreaView, Alert, Platform, StatusBar } from "react-native"
// import { Button } from "react-native"

export default function App() {
  //console.log(Dimensions.get('screen'))
  // console.log(useDeviceOrientation())
  // console.log(useDimensions())
  // const { landscape } = useDeviceOrientation()
  // const handlePress = () => {
  //   Alert.alert("Message:", "Do you want to continiue?", [
  //     { text: "Yes", onPress: () => console.log("Yes") },
  //     // { text: "Maybe", onPress: () => console.log("Maybe") },
  //     { text: "No", onPress: () => console.log("No") },
  //   ])
  //   // Alert.prompt("Message:", "Enter message here:", (text) => console.log(text))
  // }

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gray",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// })
