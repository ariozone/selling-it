import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';
import * as ImagePicker from 'expo-image-picker'

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert('You need to enable access to the library.')
  }
  useEffect(() => {
    requestPermission()
  }, [])
  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null) }, {
        text: 'No'
      }])
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled)
        onChangeImage(result.uri)

    } catch (error) {
      console.log('Error loading the image', error)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Icon name='camera' size={55} backgroundColor={colors.light} iconColor={colors.medium}></Icon>}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image}></Image>}
      </View>
    </TouchableWithoutFeedback>

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
