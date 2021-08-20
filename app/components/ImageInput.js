import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function ImageInput({ imageUri, onChangeImage }) {
  return (
    <View style={styles.container}>
      {!imageUri && <Icon name='camera' size={55} backgroundColor={colors.light} iconColor={colors.medium}></Icon>}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image}></Image>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImageInput;
