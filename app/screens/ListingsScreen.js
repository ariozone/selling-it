import React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [{
  id: 1,
  title: 'Red Jacket for Sale',
  price: 200,
  image: require('../assets/jacket.jpg')
},
{
  id: 2,
  title: 'Couch in great condition',
  price: 1500,
  image: require('../assets/couch.jpg')
}]

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.image}></Card>
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === 'android' ? 10 : 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen;
