import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors'
function WelcomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background} blurRadius={Platform.OS === 'android' ? 2 : 8}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
        <Text style={styles.tagline}>Let's Sell It!</Text>

      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='login' onPress={() => console.log('Login pressed')}></AppButton>
        <AppButton title='register' color='secondary' onPress={() => console.log('Register pressed')}></AppButton>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 10,
    width: '100%'
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }

})

export default WelcomeScreen;
