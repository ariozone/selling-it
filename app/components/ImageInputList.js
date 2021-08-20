import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      <ImageInput></ImageInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
})

export default ImageInputList;
