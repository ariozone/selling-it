import React from "react"

import { Text, View } from "react-native"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import AppText from './app/components/AppText'


export default function App() {
  return (
    // <WelcomeScreen>
    // </WelcomeScreen>
    // <ViewImageScreen></ViewImageScreen>

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50

    }}>

      <AppText style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'tomato',
        textAlign: 'center',
        lineHeight: 30
      }}>I love React Native! Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

      </AppText>
    </View>
  )
}
