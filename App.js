import React from "react"

import { Button, Text, View } from "react-native"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
const colors = require('./app/config/colors')


export default function App() {
  return (
    <ListingDetailsScreen></ListingDetailsScreen>
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   width: '100%', height: '100%',
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card title='Red jacket for sale' subTitle='$200' imageUrl={require('./app/assets/jacket.jpg')}></Card>
    // </View>

    // <WelcomeScreen>
    // </WelcomeScreen>
    // <ViewImageScreen></ViewImageScreen>

    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'

    // }}>

    //   {/* <MaterialCommunityIcons name="email" size={100} color='dodgerblue'></MaterialCommunityIcons> */}
    //   {/* <AppText
    //   >I love React Native! Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

    //   </AppText> */}
    // </View>
  )
}
