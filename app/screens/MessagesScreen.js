import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios'
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
const initialMessages = [{

  id: 1,
  title: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
  image: require('../assets/at.jpg'),
  url: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to."
},
{

  id: 2,
  title: "reprehenderit",
  image: require('../assets/chair.jpg'),
  url: "h/771796"
},
{

  id: 3,
  title: "officia",
  image: require('../assets/jacket.jpg'),
  url: "via.place"
},
{

  id: 4,
  title: "culpa odio ",
  image: require('../assets/logo-red.png'),
  url: "der.co776"
}
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  // const getMessages = async () => await axios.get('https://jsonplaceholder.typicode.com/photos')
  // useEffect(setMessages(getMessages()), [])
  // console.log(messages)
  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }
  return (
    <Screen >

      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.url}
            image={item.image}
            onPress={() => console.log('Messege selected', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={
              () => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{

            id: 3,
            title: "officia ",
            image: require('../assets/jacket.jpg'),
            url: "https"
          }])
        }}

      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
