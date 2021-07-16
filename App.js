import React from "react"

import { View } from "react-native"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"


export default function App() {
  return (
    // <WelcomeScreen>
    // </WelcomeScreen>
    // <ViewImageScreen></ViewImageScreen>

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        shadowColor: 'gray',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30


      }}>
        <View style={{
          backgroundColor: 'gold',
          width: 50,
          height: 50
        }}></View>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        marginTop: 30
      }}></View>

    </View>
  )
}
