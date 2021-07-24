import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light}>

      <View style={styles.container}>
        <Image source={image} style={styles.image}></Image>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>

      </View>
    </TouchableHighlight>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10
  },
  title: {
    fontWeight: '600'
  },
  subTitle: {
    color: colors.medium
  }
})

export default ListItem;
