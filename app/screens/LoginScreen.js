import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

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
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}

            />
            <ErrorMessage error={errors.email} visible={touched.email}></ErrorMessage>
            <AppTextInput
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='password'
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <ErrorMessage error={errors.password} visible={touched.password}></ErrorMessage>
            <AppButton title='Login' onPress={handleSubmit} />
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
