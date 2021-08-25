import React from "react"
import ListingEditScreen from "./app/screens/ListingEditScreen"
// import RegisterScreen from "./app/screens/RegisterScreen"
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
// import { Button, Switch, Text, TextInput, View } from "react-native"
// import ViewImageScreen from "./app/screens/ViewImageScreen"
// import WelcomeScreen from "./app/screens/WelcomeScreen"
import Screen from "./app/components/Screen"
import { Button, Image } from "react-native"
import ImageInput from "./app/components/ImageInput"
import ImageInputList from "./app/components/ImageInputList"
// import Icon from './app/components/Icon'
// import Card from "./app/components/Card"
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
// import MessagesScreen from "./app/screens/MessagesScreen"
// import ListItem from "./app/components/ListItem"
// import AccountScreen from "./app/screens/AccountScreen"
// import ListingsScreen from "./app/screens/ListingsScreen"
// import AccountScreen from "./app/screens/AccountScreen"
// import MessagesScreen from "./app/screens/MessagesScreen"
// import AppTextInput from "./app/components/AppTextInput"
// import AppPicker from "./app/components/AppPicker"
// import LoginScreen from "./app/screens/LoginScreen"

// const colors = require('./app/config/colors')


// const categories = [{
//   label: 'Furniture', value: 1
// },
// {
//   label: 'Clothing', value: 2
// },
// {
//   label: 'Cameras', value: 3
// }]
export default function App() {
  // const [imageUris, setImageUris] = useState([])
  // const handleAdd = uri => { setImageUris([...imageUris, uri]) }
  // const handleDelete = uri => { setImageUris(imageUris.filter(u => u !== uri)) }
  // return (
  //   <Screen>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={handleAdd}
  //       onRemoveImage={handleDelete}
  //     ></ImageInputList>
  //   </Screen>
  // <MessagesScreen></MessagesScreen>
  // <ListingDetailsScreen></ListingDetailsScreen>
  return <ListingEditScreen></ListingEditScreen>
  // <RegisterScreen></RegisterScreen>
  // <ListingsScreen></ListingsScreen>
  // <AccountScreen></AccountScreen>

  //   const [firstName, setFirstName] = useState('')
  //   const handleFirstName = input => setFirstName(input)
  //   const [isNew, setIsNew] = useState(false)
  //   const [category, setCategory] = useState(categories[0])
  // return <LoginScreen></LoginScreen>
  // <Screen>
  {/* <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder='category'
        icon='apps'
        items={categories}
      >

      </AppPicker> */}
  {/* <AppTextInput placeholder='email' icon='email' /> */ }
  {/* <AppTextInput placeholder='Username' icon='email' /> */ }
  {/* <Text>{firstName}</Text>
      <TextInput
        onChangeText={handleFirstName}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }}
      /> */}
  // </Screen>
  // <AccountScreen></AccountScreen>
  // <ListingsScreen></ListingsScreen>
  // <Screen>
  //   <ListItem
  //     title='My Title'
  //     // subTitle='My subtitle'
  //     IconComponent={<Icon name='email' ></Icon>}></ListItem>
  // </Screen>
  // <MessagesScreen></MessagesScreen>
  // <ViewImageScreen></ViewImageScreen>
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

}
