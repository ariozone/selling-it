import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>

      <View style={styles.closeIcon}><MaterialCommunityIcons name='close' color='white' size={35}></MaterialCommunityIcons></View>
      <View style={styles.deleteIcon}><MaterialCommunityIcons name='trash-can-outline' color='red' size={35}>
      </MaterialCommunityIcons></View>

      <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  closeIcon: {

    position: 'absolute',
    top: 40,
    left: 25
  },
  deleteIcon: {

    position: 'absolute',
    top: 40,
    right: 25
  }
})
export default ViewImageScreen;
