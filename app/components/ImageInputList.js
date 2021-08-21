import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef()
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
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
      </ScrollView>
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
