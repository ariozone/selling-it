import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
        <Text>I am Selling It!</Text>

      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    height: 70,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#4ECDC4',
    height: 70,
    width: '100%',
  },
  logo: {

    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  }

})

export default WelcomeScreen;
