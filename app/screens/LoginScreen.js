import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
      <AppTextInput
        placeholder='email'
        icon='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
        onTextChange={input => setEmail(text)}

      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='password'
        icon='lock'
        textContentType='password'
        secureTextEntry
        onTextChange={text => setPassword(text)}
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})
export default LoginScreen;
