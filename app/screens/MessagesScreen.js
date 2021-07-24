import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios'
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
const message = [{

  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  image: require('../assets/at.jpg'),
  url: "https://via.placeholder.com/600/92c952"
},
{

  id: 2,
  title: "reprehenderit est deserunt velit ipsam",
  image: require('../assets/chair.jpg'),
  url: "https://via.placeholder.com/600/771796"
},
{

  id: 3,
  title: "officia porro iure quia iusto qui ipsa ut modi",
  image: require('../assets/jacket.jpg'),
  url: "https://via.placeholder.com/600/24f355"
},
{

  id: 4,
  title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  image: require('../assets/logo-red.png'),
  url: "https://via.placeholder.com/600/d32776"
}
]

function MessagesScreen(props) {
  // const [messages, setMessages] = useState([])
  // const getMessages = async () => await axios.get('https://jsonplaceholder.typicode.com/photos')
  // useEffect(setMessages(getMessages()), [])
  // console.log(messages)
  return (
    <Screen >

      <FlatList
        data={message}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.url}
            image={item.image}
            onPress={() => console.log('Messege selected', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}

      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
