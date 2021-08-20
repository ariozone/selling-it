import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map(imageUri => (
        <View key={imageUri} style={styles.image}>
          <ImageInput

            imageUri={imageUri}
            onChangeImage={() => { onRemoveImage(imageUri) }}
          ></ImageInput>
        </View>))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)}></ImageInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: {
    marginRight: 10
  }
})

export default ImageInputList;
