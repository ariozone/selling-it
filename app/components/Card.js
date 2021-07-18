import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }

})
export default Card;
