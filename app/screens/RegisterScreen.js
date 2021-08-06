import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native'
import { AppFormField, AppForm, SubmitButton } from '../components/forms'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label('Name').trim(),
  email: Yup.string().required().email().min(5).trim().label('Email'),
  password: Yup.string().required().min(6).trim().label('Password')
})
function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={
          {
            name: '',
            email: '',
            password: ''
          }
        }
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name='name'
          placeholder='Name'
          icon='account'
          autoCapitalize='none'
          autoCorrect={false}

        >
        </AppFormField>
        <AppFormField
          name='email'
          placeholder='Email'
          icon='email'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
        >
        </AppFormField>
        <AppFormField
          name='password'
          placeholder='Password'
          icon='lock'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          secureTextEntry
        >
        </AppFormField>
        <SubmitButton title="Register"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: 10 }
})
export default RegisterScreen;
