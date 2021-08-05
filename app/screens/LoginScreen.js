import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().trim().min(5).label('Email'),
  password: Yup.string().required().trim().min(6).label('Password')
})

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>

            <AppFormField
              name='email'
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'>
            </AppFormField>
            <AppFormField
              name='password'
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='password'
              secureTextEntry
            ></AppFormField>
            <SubmitButton title='login'></SubmitButton>
            {/* <AppButton title='Login' onPress={handleSubmit} /> */}
          </>
        )}
      </Formik>

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
