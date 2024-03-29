import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subtitle}>$200</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/at.jpg')}
            title='Ario Tamaddoni'
            subTitle='10 Listings'>

          </ListItem>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20
  },
  title: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 24
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen;
